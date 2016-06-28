import Flux = require('flux');
import {AppAction} from './../actions/AppActions';

export interface DispatcherAction {
    source: string,
    action: AppAction
}

class AppDispatcher extends Flux.Dispatcher<any>
{
    // Произошло изменение
    handleAction(appAction: AppAction):void {
        let action:DispatcherAction = {
            source: 'VIEW_ACTION',
            action: appAction
        };
        this.dispatch(action);
    }
}

export default new AppDispatcher();
