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

const statsAllocationScreen =  function StatsAllocationScreen({setCurrentCombatScreen}) {
    return (
        <StatsModal data={constants.STATS_MODAL_FLATLIST_DATA} setCurrentCombatScreen={setCurrentCombatScreen}/>
    );
}

export default statsAllocationScreen;