import { Text, View, Button } from 'react-native';
import { use, useState } from 'react';

import { screenStyles } from '../components/style-sheets/screen-styles';
import { globalStyles } from '../components/style-sheets/global-styles';

import entityConstants from "./../constants/entityConstants.json"
import Entity from '../classes/entity';

const CombatArenaScreen = ({playerState}) => {
    let [player, playerModifier] = useState(new Entity(playerState));
    let [enemy, enemyModifier] = useState(new Entity(entityConstants.DEFAULT_ENEMY_STATS))
    let [combatLogs, combatLogsModifier] = useState(["An enemy appeared. Fight It"])

    return (
        <View style ={[screenStyles.combatArenaStyles.container, globalStyles.background, screenStyles.combatArenaStyles.backgroundImage]}>
            <View style={[globalStyles.borderForTesting, screenStyles.combatArenaStyles.monsterAreaContainer, screenStyles.combatArenaStyles.monsterAreaContainerLocation]}>
                <Text style={globalStyles.borderForTesting}>Monster goes here</Text>
                <Text style={globalStyles.borderForTesting}>HP: {enemy.getStats().healthStat}</Text>
                <Text style={globalStyles.borderForTesting}>Strength: {enemy.getStats().strengthStat}</Text>
                <Text style={globalStyles.borderForTesting}>Wisdom: {enemy.getStats().wisdomStat}</Text>
            </View>
            <View style={[globalStyles.borderForTesting, screenStyles.combatArenaStyles.combatActionContainer, screenStyles.combatArenaStyles.monsterAreaContainerLocation]}>
                <Text>Your HP: {player.getStats().healthStat}</Text>
                <Text>Your Mana: {player.getStats().manaStat}</Text>
                <Text>Your Strength: {player.getStats().strengthStat}</Text>
                <Text>Your Wisdom: {player.getStats().wisdomStat}</Text>
                <Button title='Attack with Sword' onPress={() => {enemyModifier(new Entity({...enemy.getStats(), healthStat: enemy.takePhysicalDamage(player.getStats())}))}}/>
                <Button title='Attack with Magic' onPress={() => {enemyModifier(new Entity({...enemy.getStats(), healthStat: enemy.takeMagicDamage(player.getStats())}))}}/>
            </View>
        </View>
    );
}

export default CombatArenaScreen