import config from "../config/auth";
import PostData from "../interfaces/PostData";
import {UserData} from "../interfaces/UserData";
import AppAction from '../actions/AppActions';
import {Promise} from 'es6-promise';

// VK - глобальный объект из vk api
declare var VK: any;

export default class VKLib
{
    public static init():void {
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
                alert("Auth required!");
            }
        });
    }

    // Ищем посты по поисковой строке query
    public static search(query:string, user_id: number):Promise<PostData[]> {
        return new Promise(
            function(resolve, reject) {
                VK.Api.call('wall.search', {owner_id: user_id, query: query}, function(r) {
                    if(r.response) {
                        // Формируем массив постов
                        let result: PostData[] = [];
                        for (let data of r.response) {
                            // Пустые игнорируем
                            if(!data.from_id || !data.text) {
                                continue;
                            }
                            let post:PostData = {author: data.from_id, text: data.text};
                            // Есть ли прикрепленные файлы к посту
                            if(Array.isArray(data.attachments) && data.attachments.length > 0) {
                                // Берем только последний элемент (для упрощения)
                                post.attachment = data.attachments.pop();
                            }
                            result.push(post);
                        }
                        resolve(result);
                    }
                });
            }
        );
    }
}
