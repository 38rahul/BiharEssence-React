import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);   // why do we always have to write super(props)
        
        // use state in Class Based component

        this.state = {
            userInfo:{
                name: "Dummy",
                location: "Default"
            }
         };

         //console.log( this.props.name1 +" Child constructor");
    }

     componentDidCatch(){
         //   console.log("Child componentDidCatch");
        }

       async componentDidMount(){
          //  console.log(this.props.name1+ " Child Component Did mount");

          const data = await fetch ("https://api.github.com/user/devrahul97");

          const json = await data.json();
          console.log(json);

          this.setState({
            userInfo: json,
          } )
          
        }

        componentDidUpdate(){
         //   console.log(this.props.name1 +"Child Component Did Update");
        }

        componentWillUnmount(){

        }
    render() {
        
            const {name, company, followers, following} = this.state.userInfo;
         return (
        <div className="user-card">
        
            <h2>Name: {name }</h2>
            <h2>company: {company}</h2>
            <h2>followers count: {followers}</h2>
            <h2>following count: {following}</h2>
          
            <h4>Name: github/@38rahul</h4>
            
        </div>
    );
    }
}

export default UserClass;