import StatsModal from './../components/StatsModal'
import constants from './../constants/flatListConstants.json';

const statsAllocationScreen =  function StatsAllocationScreen({setCurrentCombatScreen, state, dispatch, playerLevel, gameOutcome}) {
    return (
        <StatsModal 
            data={constants.STATS_MODAL_FLATLIST_DATA} 
            setCurrentCombatScreen={setCurrentCombatScreen} 
            state={state} dispatch={dispatch} 
            playerLevel={playerLevel} 
            gameOutcome={gameOutcome}
        />
    );
}

export default statsAllocationScreen;