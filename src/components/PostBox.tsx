import * as React from "react";
import PostList from "./PostList";
import PostStore from "../stores/PostsStore";

class PostBox extends React.Component<{}, any> {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.state.list = PostStore.comments
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <PostList list={this.state.list}/>
            </div>
        );
    }
    componentDidMount() {
        // Ожидаем событие change для обновления списка постов
        PostStore.addListener("change", ()=> {
            this.onChange();
        });
    }
    onChange() {
        this.setState({
            list: PostStore.comments,
        });
    }
}

export default PostBox;
