import { Text, View, Button } from 'react-native';
import { globalStyles } from '../components/style-sheets/global-styles';
import { screenStyles } from '../components/style-sheets/screen-styles';
/*
    stats to add
    healthStat;
    strengthStat;
    wisdomStat;
    manaStat;
    defenseStat;
    magicDefenseStat;
    speedStat;
    evasionStat;
*/

const statsAllocationScreen =  function StatsAllocationScreen(combatScreenValueSetter) {
    // Make custom component
    return (
        <View style={[globalStyles.container, globalStyles.background, screenStyles.mainMenuStyles.backgroundImage]}>
            <View style={[globalStyles.container, globalStyles.borderForTesting, screenStyles.statAllocationStyles.modal]}>
                <View>
                    <Text style={screenStyles.statAllocationStyles.titleText}>Stat Allocation</Text>
                </View>
                <View style={[globalStyles.borderForTesting, screenStyles.statAllocationStyles.statBox]}>
                    <Button title='-'/>
                    <Text>Health: 0</Text>
                    <Button title='+'/>
                </View>
                <View style={[globalStyles.borderForTesting, screenStyles.statAllocationStyles.statBox]}>
                    <Button title='-'/>
                    <Text>Strength: 0</Text>
                    <Button title='+'/>
                </View>
                <View style={[globalStyles.borderForTesting, screenStyles.statAllocationStyles.statBox]}>
                    <Button title='-'/>
                    <Text>Wisdom: 0</Text>
                    <Button title='+'/>
                </View>
                <View style={[globalStyles.borderForTesting, screenStyles.statAllocationStyles.statBox]}>
                    <Button title='-'/>
                    <Text>Mana: 0</Text>
                    <Button title='+'/>
                </View>
                <View style={[globalStyles.borderForTesting, screenStyles.statAllocationStyles.statBox]}>
                    <Button title='-'/>
                    <Text>Physical Defense: 0</Text>
                    <Button title='+'/>
                </View>
                <View style={[globalStyles.borderForTesting, screenStyles.statAllocationStyles.statBox]}>
                    <Button title='-'/>
                    <Text>Magic Defense: 0</Text>
                    <Button title='+'/>
                </View>
                <View style={[globalStyles.borderForTesting, screenStyles.statAllocationStyles.statBox]}>
                    <Button title='-'/>
                    <Text>Speed: 0</Text>
                    <Button title='+'/>
                </View>
                <View style={[globalStyles.borderForTesting, screenStyles.statAllocationStyles.statBox]}>
                    <Button title='-'/>
                    <Text>Evasion: 0</Text>
                    <Button title='+'/>
                </View>
                <Button title='Continue' onPress={() => {combatScreenValueSetter(1)}}/>
            </View>
        </View>
    );
}

export default statsAllocationScreen;