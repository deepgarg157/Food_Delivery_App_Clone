import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // count: 0,
            // count2: 1,
            userInfo:{
                name:"Dummy Name",
                location:"Dummy Location"
            }
        }

        // console.log(this.props.name + "child constructor");
    }

    // async componentDidMount(){
    //     // console.log(this.props.name + "child components did mount");
    //     const data = await fetch("https://api.github.com/users/akshaymarch7")
    //     const json = await data.json();
    //     console.log(json)
    //     this.setState({
    //             userInfo:json,
    //     })
    // }

    componentDidMount(){
        // console.log(this.props.name + "child components did mount");
        // this.timer = setInterval(()=>{
        //     console.log("Namaste class based components")
        // },1000)
    }

    componentDidUpdate(){
        // console.log("components did update")
    }

    componentWillUnmount(){
        // console.log("components will unmount")
        // clearInterval(this.timer)
    } 

    render() 
    {

        // console.log(this.props.name + "child render");
        // const { name } = this.props
        // const { count, count2 } = this.state
        const { name, location} = this.state.userInfo
        return (
            <div className="bg-slate-300 w-96 p-2 m-2 border-black">
                {/* <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Count Increse</button> */}
                {/* <h1>Count: {count2}</h1> */}
                <h2>Name: {name}</h2>
                <h3>Contact: deepgarg157@gmail.com</h3>
                <h4>ID:777</h4>
                <h4>location : {location}</h4>
            </div>
        )
    }
}

export default UserClass;