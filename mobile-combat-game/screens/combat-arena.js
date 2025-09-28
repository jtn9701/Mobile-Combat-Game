import { Text, View, Button } from 'react-native';
import { useState } from 'react';

import { screenStyles } from '../components/style-sheets/screen-styles';
import { globalStyles } from '../components/style-sheets/global-styles';

import CombatLog from '../components/CombatLog';
import entityConstants from "./../constants/entityConstants.json"
import combatText from "./../constants/combatText.json"
import Entity from '../classes/entity';

const CombatArenaScreen = ({playerState, setCurrentCombatScreen, playerLevel, playerLevelSetter, gameOutcomeSetter }) => {
    let [player, playerModifier] = useState(new Entity(playerState));
    let [enemy, enemyModifier] = useState(new Entity(entityConstants.DEFAULT_ENEMY_STATS))
    let [combatLogs, combatLogsModifier] = useState(["An enemy appeared. Fight It"])

    function checkIfGameOver(playerHP, enemyHP) {
        let goToStatsScreen = () => setCurrentCombatScreen(0);
        let incrementLevel = () => playerLevelSetter(++playerLevel)
        let saveOutcomeText = (outcomeText) => gameOutcomeSetter(outcomeText)

        if (playerHP <= 0) {
            goToStatsScreen();
            incrementLevel();
            saveOutcomeText(combatText.LOSE);
        }

        if (enemyHP <= 0) {
            goToStatsScreen();
            incrementLevel();
            saveOutcomeText(combatText.WIN);
        }
    }

    function turnOfAttacks(attackType) {
        let newEnemyHP;
        let newPlayerHP;

        if (attackType === "physical"){
            newEnemyHP = enemy.takePhysicalDamage(player.getStats());
            newPlayerHP = player.takePhysicalDamage(enemy.getStats())
        } else if (attackType === "magic") {
            newEnemyHP = enemy.takeMagicDamage(player.getStats());
            newPlayerHP = player.takeMagicDamage(enemy.getStats())
        }

        enemyModifier(new Entity({...enemy.getStats(), healthStat: newEnemyHP}));
        playerModifier(new Entity({...player.getStats(), healthStat: newPlayerHP}));
        combatLogsModifier([...combatLogs, combatText.PLAYER_DOES_DAMAGE, combatText.ENEMY_TAKES_DAMAGE, combatText.ENEMY_DOES_DAMAGE, combatText.PLAYER_TAKES_DAMAGE]);
        checkIfGameOver(newPlayerHP, newEnemyHP);
    }

    return (
        <View style ={[screenStyles.combatArenaStyles.container, globalStyles.background, screenStyles.combatArenaStyles.backgroundImage]}>
            <View style={[globalStyles.borderForTesting, screenStyles.combatArenaStyles.monsterAreaContainer, screenStyles.combatArenaStyles.monsterAreaContainerLocation]}>
                <Text style={globalStyles.borderForTesting}>Monster goes here</Text>
                <Text style={globalStyles.borderForTesting}>HP: {enemy.getStats().healthStat}</Text>
                <Text style={globalStyles.borderForTesting}>Strength: {enemy.getStats().strengthStat}</Text>
                <Text style={globalStyles.borderForTesting}>Wisdom: {enemy.getStats().wisdomStat}</Text>
                <CombatLog data={combatLogs}/>
            </View>
            <View style={[globalStyles.borderForTesting, screenStyles.combatArenaStyles.combatActionContainer, screenStyles.combatArenaStyles.monsterAreaContainerLocation]}>
                <Text>Your HP: {player.getStats().healthStat}</Text>
                <Text>Your Mana: {player.getStats().manaStat}</Text>
                <Text>Your Strength: {player.getStats().strengthStat}</Text>
                <Text>Your Wisdom: {player.getStats().wisdomStat}</Text>
                <Button title='Attack with Sword' 
                    onPress={() => turnOfAttacks("physical")}/>
                <Button title='Attack with Magic' onPress={() =>turnOfAttacks("magic")}/>
            </View>
        </View>
    );
}

export default CombatArenaScreen