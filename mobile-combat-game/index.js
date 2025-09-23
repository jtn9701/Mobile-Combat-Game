import { registerRootComponent } from 'expo';

import App from './App';
import mainMenuScreen from './screens/main-menu'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(mainMenuScreen);
