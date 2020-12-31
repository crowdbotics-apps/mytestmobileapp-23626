import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile189477Navigator from '../features/UserProfile189477/navigator';
import Maps189458Navigator from '../features/Maps189458/navigator';
import Settings189436Navigator from '../features/Settings189436/navigator';
import Settings189421Navigator from '../features/Settings189421/navigator';
import NotificationList189420Navigator from '../features/NotificationList189420/navigator';
import Maps189419Navigator from '../features/Maps189419/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile189477: { screen: UserProfile189477Navigator },
Maps189458: { screen: Maps189458Navigator },
Settings189436: { screen: Settings189436Navigator },
Settings189421: { screen: Settings189421Navigator },
NotificationList189420: { screen: NotificationList189420Navigator },
Maps189419: { screen: Maps189419Navigator },

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
