import { Text, View, Button } from 'react-native';
import { screenStyles } from '../components/style-sheets/screen-styles';
import { globalStyles } from '../components/style-sheets/global-styles';

const combatArenaScreen = function CombatArenaScreen() {
    return (
        <View style ={[screenStyles.combatArenaStyles.container, globalStyles.background, screenStyles.combatArenaStyles.backgroundImage]}>
            <View style={[globalStyles.borderForTesting, screenStyles.combatArenaStyles.monsterAreaContainer, screenStyles.combatArenaStyles.monsterAreaContainerLocation]}>
                <Text style={globalStyles.borderForTesting}>Monster goes here</Text>
                <Text style={globalStyles.borderForTesting}>HP: 0</Text>
                <Text style={globalStyles.borderForTesting}>Strength: 0</Text>
                <Text style={globalStyles.borderForTesting}>Wisdom: 0</Text>
            </View>
            <View style={[globalStyles.borderForTesting, screenStyles.combatArenaStyles.combatActionContainer, screenStyles.combatArenaStyles.monsterAreaContainerLocation]}>
                <Button title='Attack with Sword'/>
                <Text></Text>
                <Button title='Attack with Magic'/>
            </View>
        </View>
    );
}

export default combatArenaScreen