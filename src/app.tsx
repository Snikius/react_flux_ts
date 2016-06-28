// main.js
import * as React from "react";
import * as ReactDOM from "react-dom";
import PostBox from "./components/PostBox";
import Auth from "./components/Auth";
import SearchForm from "./components/SearchForm";
import VKLib from "./lib/VKLib";

// Инициализируем приложение VK
VKLib.init();

ReactDOM.render(
    <div>
        <Auth/>
        <SearchForm/>
        <PostBox/>
    </div>,
    document.getElementById("content")
)