import { Text, View, Button, Image } from 'react-native';
import { useState, useRef } from 'react';

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

    const CurrentHP = player.getStats().healthStat;
    // Holds current run's MaxHP
    const savedMaxHPRef = useRef(null);
    if (savedMaxHPRef.current == null) {
        savedMaxHPRef.current = CurrentHP
    }

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

        function randEnemyAttack() {
            // Randomly picks 0 or 1
            let randNum = Math.floor(Math.random() * 2)
            // Choose a random Attack
            if (randNum === 0){
                newPlayerHP = player.takePhysicalDamage(enemy.getStats());
            } else {
                newPlayerHP = player.takeMagicDamage(enemy.getStats());
            }
            playerModifier(new Entity({...player.getStats(), healthStat: newPlayerHP}));
        }

        if (attackType === "physical"){
            newEnemyHP = enemy.takePhysicalDamage(player.getStats());
            enemyModifier(new Entity({...enemy.getStats(), healthStat: newEnemyHP}));
            randEnemyAttack();
            combatLogsModifier([...combatLogs, combatText.PLAYER_DOES_DAMAGE, combatText.ENEMY_TAKES_DAMAGE, combatText.ENEMY_DOES_DAMAGE, combatText.PLAYER_TAKES_DAMAGE]);
        } else if (attackType === "magic") {
            newEnemyHP = enemy.takeMagicDamage(player.getStats());
            enemyModifier(new Entity({...enemy.getStats(), healthStat: newEnemyHP}));
            randEnemyAttack();
            combatLogsModifier([...combatLogs, combatText.PLAYER_DOES_DAMAGE, combatText.ENEMY_TAKES_DAMAGE, combatText.ENEMY_DOES_DAMAGE, combatText.PLAYER_TAKES_DAMAGE]);
        } else if (attackType === "heal" && player.getStats().healthStat <= savedMaxHPRef.current) {
            newPlayerHP = player.healHP(player.getStats().manaStat);
            playerModifier(new Entity({...player.getStats(), healthStat: newPlayerHP}));
            randEnemyAttack();
            combatLogsModifier([...combatLogs, combatText.PLAYER_HEALS, combatText.ENEMY_DOES_DAMAGE, combatText.PLAYER_TAKES_DAMAGE]);
        }

        if (newPlayerHP > savedMaxHPRef.current) {
                playerModifier(new Entity({...player.getStats(), healthStat: savedMaxHPRef.current}));
            }

        checkIfGameOver(newPlayerHP, newEnemyHP);
    }

    return (
        <View style ={[screenStyles.combatArenaStyles.container, globalStyles.background, screenStyles.combatArenaStyles.backgroundImage]}>
            <View style={[globalStyles.borderForTesting, screenStyles.combatArenaStyles.monsterAreaContainer, screenStyles.combatArenaStyles.monsterAreaContainerLocation, {backgroundColor: '#eb9898ff'}]}>
                <Image style={{height: 200, width: 200}} source={require('./../assets/images/goblin.png')}/>
                <View style={[globalStyles.borderForTesting, {width: '50%', marginTop: 5}]}>
                    <Text style={{textAlign: 'center'}}>GOBLIN</Text>
                    <Text style={{textAlign: 'center'}}>HP: {enemy.getStats().healthStat}</Text>
                    <Text style={{textAlign: 'center'}}>Strength: {enemy.getStats().strengthStat}</Text>
                    <Text style={{textAlign: 'center'}}>Wisdom: {enemy.getStats().wisdomStat}</Text>
                </View>
                <CombatLog data={combatLogs}/>
            </View>
            <View style={[globalStyles.borderForTesting, screenStyles.combatArenaStyles.combatActionContainer, screenStyles.combatArenaStyles.monsterAreaContainerLocation, {backgroundColor: '#88f384ff'}]}>
                <Text>Your HP: {player.getStats().healthStat}</Text>
                <Text>Your Mana: {player.getStats().manaStat}</Text>
                <Text>Your Strength: {player.getStats().strengthStat}</Text>
                <Text>Your Wisdom: {player.getStats().wisdomStat}</Text>
                    <View style={{flexDirection: 'row', padding: 2}}>
                        <Button title='Attack with Sword' onPress={() => turnOfAttacks("physical")}/>
                        <Button title='Attack with Magic' onPress={() => turnOfAttacks("magic")}/>
                    </View>
                    <Button title='Heal' onPress={() => turnOfAttacks("heal")}/>
            </View>
        </View>
    );
}

export default CombatArenaScreen