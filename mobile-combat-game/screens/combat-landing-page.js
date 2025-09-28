import { useState, useReducer, useEffect } from "react";

import StatsAllocationScreen from "./stats-allocation-screen";
import CombatArenaScreen from "./combat-arena";
import entityConstants from "./../constants/entityConstants.json"

const CombatLandingPage = () => {
    let [currentCombatScreen, setCurrentCombatScreen] = useState(0);
    let [playerLevel, playerLevelSetter] = useState(1);
    let [gameOutcome, gameOutcomeSetter] = useState('');

    const [playerState, dispatch] = useReducer(reducer, entityConstants.DEFAULT_PLAYER_STATS)

    function updateStatPointsBasedOnLevel() {
        const newAmount = (playerLevel) * entityConstants.POINTS_PER_LEVEL;

        if (newAmount !== playerState.pointsToAllocate)
            dispatch({ statToChange: 'setPointsToAllocate', amount: newAmount})
    }
    
    useEffect(() => {
        updateStatPointsBasedOnLevel();
    }, [playerLevel])

    function reducer(state, action) {
        // TODO: Make function to clamp values to not go past min value
        function valueClamp(){

        }

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
                return {...state, pointsToAllocate: ((state.pointsToAllocate) + action.amount)}
            case 'setPointsToAllocate':
                return { ...state, pointsToAllocate: action.amount };
            default: return state
        }
    }

    if (currentCombatScreen === 0) {
        return (
            <StatsAllocationScreen 
                setCurrentCombatScreen={setCurrentCombatScreen} 
                state={playerState} dispatch={dispatch} 
                playerLevel={playerLevel} 
                gameOutcome={gameOutcome}
            />
        )
    } else {
        return (
            <CombatArenaScreen 
                playerState={playerState} 
                setCurrentCombatScreen={setCurrentCombatScreen} 
                playerLevel = {playerLevel} 
                playerLevelSetter={playerLevelSetter} 
                gameOutcomeSetter={gameOutcomeSetter}
            />
        )
    }
}

export default CombatLandingPage