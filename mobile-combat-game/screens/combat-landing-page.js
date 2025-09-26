import { useState } from "react";

import StatsAllocationScreen from "./stats-allocation-screen";
import CombatArenaScreen from "./combat-arena";

// TODO: this will house the state data for combat stuff

const CombatLandingPage = () => {
    let [currentCombatScreen, setCurrentCombatScreen] = useState(0);

    if (currentCombatScreen === 0) {
        return (
            <StatsAllocationScreen setCurrentCombatScreen={setCurrentCombatScreen}/>
        )
    } else {
        return (
            CombatArenaScreen(setCurrentCombatScreen)
        )
    }
}

export default CombatLandingPage