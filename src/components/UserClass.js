import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);   // why do we always have to write super(props)
        
        // use state in Class Based component

        this.state = {
            count: 12,
            
        };
    }
    render() {
        const {name1, location} = this.props;
        const {count} = this.state;
         return (
        <div className="user-card">
            <h1>count: {count}</h1>
            <button onClick={
                () =>{
                    // Never Update State Variables Directly
                    // this.state.count = this.state.count++; 
                    // 40 min
                }
            }>count Increase</button>
            <h2>Name: {name1 }</h2>
            <h2>Locan: {location}</h2>
            <h4>Name: github/@38rahul</h4>
            
        </div>
    );
    }
}

export default UserClass;