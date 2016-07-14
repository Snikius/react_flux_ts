import * as React from "react";
import PostData from "../interfaces/PostData";
import Post from "./Post";

export interface PostListProps { list: PostData[]; }

class PostList extends React.Component<PostListProps, any>
{
    constructor(props) {
        super(props);
    }
    render() {
        let list = this.props.list;
        return (
            <div className="commentList">
                { list.map((element: PostData) => {
                    return <Post attachment={element.attachment} text={element.text} author={element.author} />;
                })}
            </div>
        );
    }
}

export default PostList;
