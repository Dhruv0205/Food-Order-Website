import React from "react";

class UserClass extends React.Component{

  constructor(props)
  {
    super(props);
    
     this.state = {
          userInfo:{
            name: "Dummy",
            location: "Default Location",
            avatar_url: "https://pinnacle.works/dummy-image/"
          },
     };

    // console.log("children constructor called");
  }

 async componentDidMount(){
    // console.log("children component mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
        userInfo: json,
    });
  }

 componentDidUpdate(){
    console.log("component update");
 } 

 componentWillUnmount(){
    console.log("component unmount"); // this will happen when we will go to other page
 }
 
  render(){
    //  console.log(this.props.name + "children render");
      const  {name, location,avatar_url } = this.state.userInfo;
      debugger;
    //   const {count} = this.state;
    return(
        <div className="user-card">
            {/* <h1>Count: {count}</h1> 
             <button
             onClick={()=>{
                this.setState({
                    count: this.state.count + 1,
                });
            }}
            >
            Increase Count
            </button> */}
            <img src={avatar_url} />
            <h2>name:{name}</h2>
            <h3>location:{location}</h3>
            <h4>contact:antesh@121</h4>
        </div>
      );
  }
}

export default UserClass;