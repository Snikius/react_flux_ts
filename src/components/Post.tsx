import * as React from "react";
import * as PostModel from "../stores/PostsStore";

class Post extends React.Component<PostModel.PostData, any>
{
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>{this.props.text} and {this.props.author}</h1>;
    }
}

export default Post;