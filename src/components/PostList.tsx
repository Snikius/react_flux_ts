import * as React from "react";
import * as PostModel from "../stores/PostsStore";
import Post from "./Post";

export interface PostListProps { list: PostModel.PostData[]; }

class PostList extends React.Component<PostListProps, any>
{
    constructor(props) {
        super(props);
    }
    render() {
        let list = this.props.list;
        return (
            <div className="commentList">
                { list.map((element: PostModel.PostData) => {
                    return <Post text={element.text} author={element.author} />;
                })}
            </div>
        );
    }
}

export default PostList;
