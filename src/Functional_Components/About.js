import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// class About extends React.Component{

//     constructor(props){
//         super(props)

        // console.log("parent constructor")
    // }
    
    // componentDidMount(){
        // console.log("parent components did mount");
    // }

    // render(){

        // console.log("parent render");
        // return(
        //     <div>
        //         <h1>This is About Page</h1>
        //         <User />
        //         <UserClass name={"First"}/>
        //     </div>
        // )
//     }
// }

const About = (props) => {
 
    return(
            <div>
                <h1 className="font-bold px-3 my-4">This is About Page</h1>
                <User />
                <UserClass name={"First"}/>
            </div>
        )
}

export default About;