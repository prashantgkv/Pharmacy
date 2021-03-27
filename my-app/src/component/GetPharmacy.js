 import React,{useEffect,useState} from 'react';
import axios from 'axios';
const GetPharmacy = () => {

    const [id,setId]  =useState(0);
    const [buttonId,setButtonId]=useState(0);
    useEffect(()=>{
        axios.get(`/pharmacy/1`)
        .then(response=>{console.log(response.data)})
        .catch(err => console.log(err));
    },[buttonId]);

    const handleSubmit=(e)=>{
        e.preventDefault()
        setButtonId(id)
    }

    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="id" class="form-label">Id</label>
                    <input type="text"
                    onChange={e=>setId(e.target.value)}
                    value={id}
                    class="form-control"
                    id="id"/>
                </div>
                <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default GetPharmacy