import * as React from "react";
import AppAction from "../actions/AppActions";
import UserStore from "../stores/UserStore";

class SearchForm extends React.Component<{}, {query: string}>
{
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={this.handleChange} />
                <button value="Search" type="submit" />
               </form>;
    }
    handleChange(event) {
        this.setState({query: event.target.value});
    }
    handleSubmit() {
        AppAction.search(this.state.query);
    }
}

export default SearchForm;