import { useState } from "react";

import MainMenuScreen from './main-menu';
import CreditsScreen from './credits';
import HowToPlayScreen from './how-to-play';

const LandingPage = ({navigation}) => {
    let [currentScreen, setCurrentScreen] = useState(0);

    if (currentScreen === 0) {
        return (
            <MainMenuScreen navigation={navigation} setCurrentScreen={setCurrentScreen}/>
        )
    } else if (currentScreen === 1) {
        return (
            <HowToPlayScreen setCurrentScreen={setCurrentScreen}/>
        )
    } else if (currentScreen === 2) {
        return (
            <CreditsScreen setCurrentScreen={setCurrentScreen}/>
        )
    }
}

export default LandingPage