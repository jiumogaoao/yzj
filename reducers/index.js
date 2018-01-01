import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

const initialAuthState = { a:1 };

function auth(state = initialAuthState, action) {
    switch (action.type) {
        case 'add':
            return { ...state, a:state.a +1  };
        default:
            return state;
    }
}

const AppReducer = combineReducers({
    auth
});

export default AppReducer;