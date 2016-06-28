import config from "../config/auth";
import PostData from "../stores/PostsStore";
import {UserData} from '../stores/UserStore';
import AppAction from '../actions/AppActions';

// VK - глобальный объект из vk api
declare var VK: any;

export default class VKLib
{
    public static init():void
    {
        // Инициализируем приложение
        VK.init({
            apiId: config.client_id
        });

        VK.Auth.login((response) => {
            if (response.session) {
                // Пользователь успешно авторизовался
                // Формируем строку имени
                let name = [];
                let user = response.session.user;

                if(user.first_name) {
                    name.push(user.first_name);
                }
                if(user.last_name) {
                    name.push(user.last_name);
                }
                if(user.nickname) {
                    name.push("(" + user.nickname + ")");
                }
                let userData:UserData = {
                    name: name.join(" "),
                    user_id: user.id,
                };
                // Создаем событие инициализации пользователя
                AppAction.userReady(userData);
            } else {
                // Пользователь нажал кнопку Отмена в окне авторизации
                alert("Нужно авторизоваться!");
            }
        });
    }

    public static search(query:string = ''):PostData[] {
        let data:PostData[] = [];
        VK.Api.call('wall.search', {owner_id: 0, query: query}, function(r) {
            if(r.response) {
                let test = r.response;
                debugger;
            }
        });
        return data;
    }
}
