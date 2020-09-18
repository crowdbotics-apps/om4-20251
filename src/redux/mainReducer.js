import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView15103380Reducer from '../features/CalendarView15103380/redux/reducers';
import SignIn42101064Reducer from '../features/SignIn42101064/redux/reducers'
import Dashboard15101061Reducer from '../features/Dashboard15101061/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView15103380: CalendarView15103380Reducer,
SignIn42101064: SignIn42101064Reducer,
Dashboard15101061: Dashboard15101061Reducer,

});