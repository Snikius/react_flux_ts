import * as React from "react";
import UserStore from "../stores/UserStore";

class Auth extends React.Component<{user:UserStore}, {name: string}>
{
    constructor(props) {
        super(props);
        // По умолчанию пользователь неивестен, state состоит из {name: string} указан 2м агрументом в generics класса
        this.state = {
            name:  this.props.user.name ? this.props.user.name : "Unknown name"
        };
    }
    render() {
        console.log("render now!");
        let style = {
            color: "blue"
        };
        return <h1 style={style}>{this.state.name}</h1>;
    }
    componentDidMount() {
        // Ожидаем событие change
        this.props.user.addListener("change", ()=> {
            this.onChange();
        });
    }
    componentWillUnmount() {
        this.props.user.addListener("change", ()=> {
            this.onChange();
        });
    }
    onChange() {
        this.setState({
            name: this.props.user.name
        });
    }
}

export default Auth;