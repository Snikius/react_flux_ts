import AppDispatcher from '../dispatcher/AppDispatcher'
import Constants from '../constants/PostsConstants'
import {EventEmitter} from 'fbemitter';

export interface PostData {
    text: string,
    author:string
}

class PostsStore extends EventEmitter
{
    private data:PostData[];

    constructor() {
        super();
        // Состояние по умолчанию
        this.data = []
        // Регистрируем PostsStore в диспетчере
        AppDispatcher.register((payload):boolean => {
            let action = payload.action;
            if(action.actionType == Constants.SEARCH) {
                // Получаем информацию о запросе
                let query = action.data;

                // TODO !
                // Сделать waitFor  https://facebook.github.io/flux/docs/dispatcher.html
                // Сделать запрос к апи
                
                // Создаем событие о том что элемент должен быть перерисован
                //this.emit('change');
            }
            return true;
        });
    }
    get comments(): PostData[] {
        let data:PostData[] = [];

        return data;
    }
}

export default new PostsStore();