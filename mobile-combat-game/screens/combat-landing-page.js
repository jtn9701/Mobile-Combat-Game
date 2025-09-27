import { useState, useReducer } from "react";

import StatsAllocationScreen from "./stats-allocation-screen";
import CombatArenaScreen from "./combat-arena";
import entityConstants from "./../constants/entityConstants.json"

const CombatLandingPage = () => {
    let [currentCombatScreen, setCurrentCombatScreen] = useState(0);
    const [playerState, dispatch] = useReducer(reducer, entityConstants.DEFAULT_PLAYER_STATS)

    function reducer(state, action) {
        // TODO: Make function to clamp values to not go past min value
        function valueClamp(){

        }

        // TODO: Make this better
        switch(action.statToChange){
            case 'healthStat': 
                return {...state, healthStat: (state.healthStat + action.amount)}
            case 'strengthStat': 
                return {...state, strengthStat: (state.strengthStat + action.amount)}
            case 'wisdomStat': 
                return {...state, wisdomStat: (state.wisdomStat + action.amount)}
            case 'manaStat': 
                return {...state, manaStat: (state.manaStat + action.amount)}
            case 'defenseStat': 
                return {...state, defenseStat: (state.defenseStat + action.amount)}
            case 'magicDefenseStat': 
                return {...state, magicDefenseStat: (state.magicDefenseStat + action.amount)}
            case 'pointsToAllocate': 
                return {...state, pointsToAllocate: (state.pointsToAllocate + action.amount)}
            default: return state
        }
    }

    if (currentCombatScreen === 0) {
        return (
            <StatsAllocationScreen setCurrentCombatScreen={setCurrentCombatScreen} state={playerState} dispatch={dispatch}/>
        )
    } else {
        return (
            <CombatArenaScreen playerState={playerState}/>
        )
    }
}

export default CombatLandingPage