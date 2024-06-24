import { useState } from "react";

const User = (props) =>{
    const [count] = useState(0);
    const [count2] = useState(1);
  return(
    <div className="user-card">
        <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1>
        <h2>name:{props.name}</h2>
        <h3>location:{props.location}</h3>
        <h4>contact:dhruv@020</h4>
    </div>
  );
};

export default User;