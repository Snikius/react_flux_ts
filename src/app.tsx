// main.js
import * as React from "react";
import * as ReactDOM from "react-dom";
import PostBox from "./components/PostBox";
import Auth from "./components/Auth";
import PostsStore from "./stores/PostsStore";
import VKLib from "./lib/VKLib";
import UserStore from "./stores/UserStore";

// Инициализируем приложение VK
VKLib.init();
// Создаем хранилище сообщений
let posts = new PostsStore();
let user = new UserStore();

ReactDOM.render(
    <div>
        <Auth user={user}/>
        <PostBox source={posts} />
    </div>,
    document.getElementById("content")
)