import * as React from "react";
import UserStore from "../stores/UserStore";

class Auth extends React.Component<{}, {name: string}>
{
    constructor(props) {
        super(props);
        // По умолчанию пользователь неивестен, state состоит из {name: string} указан 2м агрументом в generics класса
        this.state = {
            name:  UserStore.name ? UserStore.name : "Unknown name"
        };
    }
    render() {
        let style = {
            color: "blue"
        };
        return <h1 style={style}>{this.state.name}</h1>;
    }
    componentDidMount() {
        // Ожидаем событие change
        UserStore.addListener("change", ()=> {
            this.onChange();
        });
    }
    onChange() {
        this.setState({
            name: UserStore.name
        });
    }
}

export default Auth;