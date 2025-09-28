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
        function valueClamp(value, min = 0){
            const num = Number(value) || 0;
            return Math.max(min, num);
        }

        switch(action.statToChange){
            case 'healthStat': 
                return {...state, healthStat: valueClamp(state.healthStat + action.amount, entityConstants.DEFAULT_PLAYER_STATS.healthStat)}
            case 'strengthStat': 
                return {...state, strengthStat: valueClamp(state.strengthStat + action.amount, entityConstants.DEFAULT_PLAYER_STATS.strengthStat)}
            case 'wisdomStat': 
                return {...state, wisdomStat: valueClamp(state.wisdomStat + action.amount, entityConstants.DEFAULT_PLAYER_STATS.wisdomStat)}
            case 'manaStat': 
                return {...state, manaStat: valueClamp(state.manaStat + action.amount)}
            case 'defenseStat': 
                return {...state, defenseStat: valueClamp(state.defenseStat + action.amount)}
            case 'magicDefenseStat': 
                return {...state, magicDefenseStat: valueClamp(state.magicDefenseStat + action.amount)}
            case 'pointsToAllocate': 
                return {...state, pointsToAllocate: valueClamp(state.pointsToAllocate + action.amount)}
            case 'setPointsToAllocate':
                return { ...state, pointsToAllocate: valueClamp(action.amount) };
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