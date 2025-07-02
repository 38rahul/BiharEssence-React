
import UserClass from "../components/UserClass"
import User from "./user";
const About = () =>{

    return (
        <div>
            <h4>About</h4>
            <h4>This is Namaste Web Series</h4>
            {/* <User name= {"Rahul kumar (functional Component)"}/> */}
            <UserClass name1 = {"Rahul kumar (Class Based Component)"} location={"Pune (class based component)"}/>
        </div>
    )

}
export default About;
