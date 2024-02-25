import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {},
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    const data = await fetch(
      "  https://api.github.com/users/vishalparmar19422"
    );
    const json =  await data.json();
    console.log(json);

    this.setState({
      userInfo:json
    })
    console.log("child did mount");
  }
  
  render() {
    console.log("child render");

    return (
      <div className="">
        <h1>Profile of class based component</h1>
        <h1>Name : {this.props.name}</h1>
        <h1>Counter1 : {this.state.count}</h1>
        <h1>Counter2 : {this.state.count2}</h1>
        <h1>name : {this.state.userInfo.name}</h1>
        <img src={this.state.userInfo.avatar_url}></img>

        <button
          className="w-full bg-red-500 rounded-md text-white font-semibold text-[20px]"
          onClick={() => {
            let i = 7;
            this.setState({
              count: 1,
            });
          }}
        >
          SetCount1
        </button>
      </div>
    );
  }
}

export default ProfileClass;
