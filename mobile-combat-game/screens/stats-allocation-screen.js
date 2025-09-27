import StatsModal from './../components/StatsModal'
import constants from './../constants/flatListConstants.json';
/*
    stats to add
    healthStat;
    strengthStat;
    wisdomStat;
    manaStat;
    defenseStat;
    magicDefenseStat;
*/

const statsAllocationScreen =  function StatsAllocationScreen({setCurrentCombatScreen, state, dispatch}) {
    return (
        <StatsModal data={constants.STATS_MODAL_FLATLIST_DATA} setCurrentCombatScreen={setCurrentCombatScreen} state={state} dispatch={dispatch}/>
    );
}

export default statsAllocationScreen;