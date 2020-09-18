import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView15103380Navigator from '../features/CalendarView15103380/navigator';
import Feed9103379Navigator from '../features/Feed9103379/navigator';
import Achievements10103256Navigator from '../features/Achievements10103256/navigator';
import SignIn42101064Navigator from '../features/SignIn42101064/navigator';
import UserProfile3101063Navigator from '../features/UserProfile3101063/navigator';
import Dashboard15101061Navigator from '../features/Dashboard15101061/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CalendarView15103380: { screen: CalendarView15103380Navigator },
Feed9103379: { screen: Feed9103379Navigator },
Achievements10103256: { screen: Achievements10103256Navigator },
SignIn42101064: { screen: SignIn42101064Navigator },
UserProfile3101063: { screen: UserProfile3101063Navigator },
Dashboard15101061: { screen: Dashboard15101061Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
