
import AppDispatcher from '../dispatcher/AppDispatcher'
import Constants from '../constants/PostsConstants'
import UserData from "../interfaces/UserData";

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

    // Поиск
    static search(query: string):void {
        console.log("AppActions, search", query);
        let action:AppAction = {
            actionType: Constants.SEARCH,
            data: {query: query}
        };
        // Отправляем событие в диспетчер
        AppDispatcher.handleAction(action);
    }

};

export default AppActions;
