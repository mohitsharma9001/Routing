import React from "react";
import { useParams } from "react-router-dom";

export const Userdetails = ()=>{
    const {id} = useParams();
    const [loding,setLoding] = React.useState(false)
    const [error,setError] = React.useState(false);
    const [user,setUser] = React.useState({})
   React.useEffect(()=>{
setLoding(true)
fetch(`https://reqres.in/api/users/${id}`)
.then((res)=>res.json())
.then((res)=>setUser(res.data))
.catch(()=>setError(true))
.finally(()=>setLoding(false))
},[])
return loding ? ( <div>Loding...</div> ) : error ? ( <div>Somthing Went Wrong</div> ) : ( <div>
    <img src={user.avatar} alt="profile" />
    <h4>UserName : {user.first_name}{" "}{user.last_name}</h4>
    <h4>UserEmail : {user.email}</h4>
    </div> )
}