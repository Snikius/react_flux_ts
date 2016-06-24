// main.js

import * as React from "react";
import * as ReactDOM from "react-dom";
import PostBox from "./components/PostBox";
import Auth from "./components/Auth";
import PostsStore from "./stores/PostsStore";
import VKLib from "./lib/VKLib";


// Инициализируем приложение VK
VKLib.init();

ReactDOM.render(
    <div>
        <Auth/>
        <PostBox source={PostsStore} />
    </div>,
    document.getElementById("content")
)