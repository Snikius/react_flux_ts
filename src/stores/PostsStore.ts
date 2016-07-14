import AppDispatcher from '../dispatcher/AppDispatcher'
import Constants from '../constants/PostsConstants'
import {EventEmitter} from 'fbemitter';
import UserStore from '../stores/UserStore';
import VKLib from "../lib/VKLib";
import PostData from "../interfaces/PostData";

class PostsStore extends EventEmitter
{
    private data:PostData[];
    private waitForResponse: boolean;

    constructor() {
        super();
        // Состояние по умолчанию
        this.data = [];
        this.waitForResponse = false;
        // Регистрируем PostsStore в диспетчере
        AppDispatcher.register((payload):boolean => {
            let action = payload.action;
            if(action.actionType == Constants.SEARCH) {
                // Получаем информацию о запросе
                let query = action.data;
                // Ожидаем загрузки пользователя
                AppDispatcher.waitFor([UserStore.dispatcherIndex]);
                // В состояние ожидания
                this.waitForResponse = true;
                // Делаем запрос к апи (поиск постов)
                VKLib.search(query.query, UserStore.id).then((data)=> {
                    this.data = data;
                    // Выходим из состояния ожидания
                    this.waitForResponse = false;
                    // Создаем событие о том что элемент должен быть перерисован
                    this.emit('change');
                });
            }
            return true;
        });
    }
    get comments(): PostData[] {
        return this.data;
    }
    // Ожидает ли ответа от api в данный момент
    get queryRun(): boolean {
        return this.waitForResponse;
    }
}

export default new PostsStore();