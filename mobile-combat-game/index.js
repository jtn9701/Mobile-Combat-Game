import { registerRootComponent } from 'expo';

import App from './App';
import CombatArenaScreen from './screens/combat-arena';
import landingPage from './screens/landing-page';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(landingPage);
