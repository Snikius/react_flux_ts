import * as React from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";

export interface BoxProps { source: string; }

class PostBox extends React.Component<BoxProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.state.list.push({text: "test1!", author:"Mimi1!"});
        this.state.list.push({text: "test2!", author:"Mimi2!"});
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <PostList list={this.state.list}/>
                <PostForm />
            </div>
        );
    }
}

export default PostBox;
