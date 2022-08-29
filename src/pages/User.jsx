import React from "react";
import { Link } from "react-router-dom";

export const User = ()=>{
    const [user,setUser] = React.useState([])
    const [loding,setLoding] = React.useState(false)
    const [error,setError] = React.useState(false)

    React.useEffect(()=>{
        setLoding(true)
        const getData = ()=>{
         fetch(`https://reqres.in/api/users?page=2`)
         .then((res)=>res.json())
         .then((res)=>setUser(res.data))
         .catch(()=>setError(true))
         .finally(()=>setLoding(false))
        }
        getData()
        
    },[])
   
        return loding ? (<div>Loding...</div>) : error ? (<h3>Somthing Went Wrong</h3>) :  (<div>{user.map((users)=>(<div key={users.id}>
           <img src={users.avatar} alt="" />
           <Link to={`/user/${users.id}`}>More Details</Link>
        </div>))}</div>)
        
}