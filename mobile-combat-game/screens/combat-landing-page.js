import { useState } from "react";

import statsAllocationScreen from "./stats-allocation-screen";
import combatArenaScreen from "./combat-arena";

// TODO: use "non-fake" method to go to play stats-allocation-screen
const CombatLandingPage = () => {
    let [currentCombatScreen, setCurrentCombatScreen] = useState(0);

    if (currentCombatScreen === 0) {
        return (
            statsAllocationScreen(setCurrentCombatScreen)
        )
    } else {
        return (
            combatArenaScreen(setCurrentCombatScreen)
        )
    }
}

export default CombatLandingPage