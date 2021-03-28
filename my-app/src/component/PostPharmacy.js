import React,{useEffect,useState,Fragment} from 'react';
import TimeField from 'react-simple-timefield';
//import "../styles/PostPharmacy.css";
import axios from 'axios'

const PostPharmacy = () => {

    const[pharmacy,setPharmacy]=useState({
        institutionId:0,
        pharmacyName:'',
        addressLine1:'',
        dayOfWeek:'',
        startTime:'12:30',
        endTime:'12:30'
    });
    const[pharmacyFromButton,setPharmacyFromButton]=useState({
        institutionId:0,
        pharmacyName:'',
        addressLine1:'',
        dayOfWeek:'',
        startTime:'12:30',
        endTime:'12:30'
    });

    useEffect(()=>{
        axios.post(`/pharmacy`,pharmacy,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response=>{console.log(response.data)})
        .catch(err => console.log(err));
    },[pharmacyFromButton]);

    const handleClick=(e)=>{
        e.preventDefault()
        setPharmacyFromButton(pharmacy)
    }

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill New Pharmacy Details</h1>
        <div>
            <div className="container">
            <form>
                <div class="mb-3">
                    <label for="id" class="form-label">Institution Id</label>
                    <input type="text"
                    onChange={e=>setPharmacy({...pharmacy,institutionId:e.target.value})}
                    value={pharmacy.institutionId}
                    class="form-control"
                    id="institutionId"/>
                </div>
                <div class="mb-3">
                    <label for="id" class="form-label">Pharmacy name</label>
                    <input type="text"
                    onChange={e=>setPharmacy({...pharmacy,pharmacyName:e.target.value})}
                    value={pharmacy.pharmacyName}
                    class="form-control"
                    />
                </div>
                <div class="mb-3">
                    <label for="id" class="form-label">Address Line 1</label>
                    <input type="text"
                    onChange={e=>setPharmacy({...pharmacy,addressLine1:e.target.value})}
                    value={pharmacy.addressLine1}
                    class="form-control"
                    />
                </div>
                <div class="mb-3">
                    <label for="id" class="form-label">Day of Week</label>
                    <input type="text"
                    onChange={e=>setPharmacy({...pharmacy,dayOfWeek:e.target.value})}
                    value={pharmacy.dayOfWeek}
                    class="form-control"
                    />
                </div>
                <div>
                <label for="id" class="form-label">StartTime:</label>
                <TimeField onChange={e=>setPharmacy({...pharmacy,startTime:e.target.value})} value={pharmacy.startTime} name="startTime" id="startTime" />
                </div>
                <div>
                <label for="id" class="form-label">EndTime:</label>
                <TimeField onChange={e=>setPharmacy({...pharmacy,startTime:e.target.value})} value={pharmacy.startTime}  name="endTime" id="endTime" />
                </div>
                <button onClick={handleClick} type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>

        </div>
        </Fragment>
    )
}

export default PostPharmacy