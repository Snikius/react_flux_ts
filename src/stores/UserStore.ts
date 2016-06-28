import AppDispatcher from '../dispatcher/AppDispatcher'
import Constants from '../constants/PostsConstants'
import {EventEmitter} from 'fbemitter';

export interface UserData
{
    name: string;
    user_id: number;
}

export default class UserStore extends EventEmitter {
    private data:UserData;

    constructor() {
        super();
        // Состояние по умолчанию
        this.data = {
            name: "User not authorized",
            user_id: 0,
        };
        // Регистрируем store в диспетчере
        AppDispatcher.register((payload):boolean => {
            let action = payload.action;
            if(action.actionType == Constants.LOGIN) {
                // Сохраняем информацию о пользователе
                this.data = action.data;
                // Создаем событие о том что элемент должен быть перерисован
                this.emit('change');
            }
            return true;
        });
    }

    get id(): number {
        return this.data.user_id;
    }

    get name(): string {
        return this.data.name;
    }
}