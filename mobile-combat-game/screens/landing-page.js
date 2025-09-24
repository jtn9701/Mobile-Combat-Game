import { useState } from "react";

import mainMenuScreen from './main-menu';
import creditsScreen from './credits';
import howToPlayScreen from './how-to-play';

// TODO: use "non-fake" method to go to play stats-allocation-screen
const landingPage = () => {
    let [currentScreen, setCurrentScreen] = useState(0);

    if (currentScreen === 0) {
        return (
            mainMenuScreen(setCurrentScreen)
        )
    } else if (currentScreen === 1) {
        return (
            howToPlayScreen(setCurrentScreen)
        )
    } else if (currentScreen === 2) {
        return (
            creditsScreen(setCurrentScreen)
        )
    }
}

export default landingPage