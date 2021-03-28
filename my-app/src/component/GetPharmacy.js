import React,{useEffect,useState,Fragment} from 'react';
import axios from 'axios';
const GetPharmacy = () => {

    const [id,setId]  =useState(1);
    const[pharmacy,setPharmacy]=useState({})
    const [buttonId,setButtonId]=useState(0);

    useEffect(()=>{
      //  axios.get(`/pharmacy`)
        axios.get(`/pharmacy/${id}`)
        .then(response=>
            {
                console.log(response.data)
                setPharmacy(response.data)
            })
        .catch(err => console.log(err));
    },[buttonId]);

    const handleSubmit=(e)=>{

        setButtonId(id)
        e.preventDefault()
    }

    return (
        <Fragment>
        <h1 className="text-center my-3">Search Pharmacy By Id</h1>
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
                <div><ul>
                    {Object.keys(pharmacy).map(function(keyName, keyIndex) {
                    return (
                        <li key={keyName}>
                            {keyName}
                            <br/>
                            {pharmacy[keyName]}
                        </li>
                            )
		})}
	</ul></div>
            </form>
        </div>
        </Fragment>
    )
}

export default GetPharmacy