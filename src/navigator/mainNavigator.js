import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile3101063Navigator from '../features/UserProfile3101063/navigator';
import Tutorial4101062Navigator from '../features/Tutorial4101062/navigator';
import Dashboard15101061Navigator from '../features/Dashboard15101061/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
