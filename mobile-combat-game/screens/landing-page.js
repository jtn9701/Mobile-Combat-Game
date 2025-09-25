import { useState } from "react";

import MainMenuScreen from './main-menu';
import CreditsScreen from './credits';
import HowToPlayScreen from './how-to-play';

// TODO: use "non-fake" method to go to play stats-allocation-screen
const LandingPage = ({navigation}) => {
    let [currentScreen, setCurrentScreen] = useState(0);

    if (currentScreen === 0) {
        return (
            MainMenuScreen({navigation}, setCurrentScreen)
        )
    } else if (currentScreen === 1) {
        return (
            HowToPlayScreen(setCurrentScreen)
        )
    } else if (currentScreen === 2) {
        return (
            CreditsScreen(setCurrentScreen)
        )
    }
}

export default LandingPage