import config from "../config/auth";
import PostData from "../stores/PostsStore";

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
                let test = response;
                debugger;
            } else {
                // Пользователь нажал кнопку Отмена в окне авторизации

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
