import * as React from "react";
import AppAction from "../actions/AppActions";
import PostStore from "../stores/PostsStore";

class SearchForm extends React.Component<{}, {query: string, form_disabled: boolean}>
{
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            form_disabled: false,
        };
    }
    render() {
        return <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" value={this.state.query} onChange={this.handleChange.bind(this)} />
                <input disabled={this.state.form_disabled} value="Search" type="submit" />
               </form>;
    }
    handleChange(event) {
        this.setState({query: event.target.value, form_disabled: this.state.form_disabled});
    }
    handleSubmit(e) {
        AppAction.search(this.state.query);
        this.setState({query: this.state.query, form_disabled: true});
        e.preventDefault();
        return false;
    }
    componentDidMount() {
        // Ожидаем событие change для обновления query_active
        PostStore.addListener("change", ()=> {
            this.onChange();
        });
    }
    onChange() {
        this.setState({
            query: this.state.query,
            form_disabled: PostStore.queryRun,
        });
    }
}

export default SearchForm;