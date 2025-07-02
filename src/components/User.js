import { useState } from "react";

const User = ({name}) =>{

    const [count]  = useState(0);
    const [count2]  = useState(10); 

    return (
        <div className="user-card" >
            
            <h1>  count =  {count}</h1>
            <h2>Hey</h2>
            <h1>count2 =  {count2}</h1>
            <h2>Name: {name}</h2>
            <h2>Location: Pune</h2>
            <h4>Name: @38rahul</h4>
        </div>
    );
}

export default User;