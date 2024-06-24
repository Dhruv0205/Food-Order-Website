import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {

 constructor(props){
      super(props);
    //  console.log("parent constructor");
 }

 componentDidMount(){
    // console.log("parent mount");
 }

  render(){
    // console.log("parent render");
    return(
        <div>
        <h1>About</h1>
        <h2>This is Namaste React web series</h2>
        <div>
          {/* when we dont have  hooks speciallly in older version such as class based component than react provide other way that is with the help  of consumer and in that we have to use callback function. we use like a component not a hook */}
            <UserContext.Consumer>
              {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
            </UserContext.Consumer>
        </div>

        <UserClass name={"Dhruv"} location={"Indore"} />
        </div>
    );
  }
};

export default About;