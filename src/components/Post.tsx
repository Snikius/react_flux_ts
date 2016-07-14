import * as React from "react";
import PostData from "../interfaces/PostData";

class Post extends React.Component<PostData, any>
{
    constructor(props) {
        super(props);
    }
    render() {
        let attachment;
        // Добавляем отображение фото если есть
        if (this.props.attachment && this.props.attachment.photo) {
            attachment = <p>
                <img src={this.props.attachment.photo.src}/>
            </p>;
        } else {
            attachment = "";
        }

        return <div>
                    <h1>From id: {this.props.author}</h1>
                    <p><b>Text:</b> {this.props.text}</p>
                    {attachment}
                </div>;
    }
}

export default Post;