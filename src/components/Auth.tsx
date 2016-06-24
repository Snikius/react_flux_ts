import * as React from "react";
import * as PostModel from "../stores/UserStore";

class Auth extends React.Component<PostModel.UserData, any>
{
    constructor(props) {
        super(props);
        this.props.name = "Unknown name";
    }
    render() {
        return <h1 style="color: blue">{this.props.name}</h1>;
    }
}

export default Auth;