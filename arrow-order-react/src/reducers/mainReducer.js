import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import historyReducer from './historyReducer';
import domenReducer from './domenReducer';
import popUpReducer from './popUpReducer';
import assemblyColorReducer from './assemblyColorReducer';
import orderDetailsReducer from './orderDetailsReducer';

const mainReducer = combineReducers({
    domen : domenReducer,
    login : loginReducer,
    history : historyReducer,
    popUp : popUpReducer,
    assemblyColors : assemblyColorReducer,
    orderDetails : orderDetailsReducer,
});

export default mainReducer