import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen11103366Navigator from '../features/BlankScreen11103366/navigator';
import Messaging11103365Navigator from '../features/Messaging11103365/navigator';
import Achievements10103256Navigator from '../features/Achievements10103256/navigator';
import SignIn42101064Navigator from '../features/SignIn42101064/navigator';
import UserProfile3101063Navigator from '../features/UserProfile3101063/navigator';
import Tutorial4101062Navigator from '../features/Tutorial4101062/navigator';
import Dashboard15101061Navigator from '../features/Dashboard15101061/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen11103366: { screen: BlankScreen11103366Navigator },
Messaging11103365: { screen: Messaging11103365Navigator },
Achievements10103256: { screen: Achievements10103256Navigator },
SignIn42101064: { screen: SignIn42101064Navigator },
UserProfile3101063: { screen: UserProfile3101063Navigator },
Tutorial4101062: { screen: Tutorial4101062Navigator },
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
