
import AppDispatcher from '../dispatcher/AppDispatcher'
import Constants from '../constants/PostsConstants'
import {UserData} from '../stores/UserStore'

export interface AppAction {
    actionType: number,
    data: any,
}

// Определяем события приложения
class AppActions
{
    // Пользователь инициализирован
    static userReady(user: UserData):void {
        console.log("AppActions, user ready", user);
        let action:AppAction = {
            actionType: Constants.LOGIN,
            data: user
        };
        // Отправляем событие в диспетчер
        AppDispatcher.handleAction(action);
    }

};

export default AppActions;
