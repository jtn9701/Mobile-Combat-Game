import { Text, View, Button, FlatList } from 'react-native';
import { globalStyles } from './style-sheets/global-styles';
import { screenStyles } from './style-sheets/screen-styles';

const StatsAllocationModal = ({data, setCurrentCombatScreen}) => {
    const renderModalItem = ({item}) => {
        return (
            <View style={[globalStyles.borderForTesting, screenStyles.statAllocationStyles.statBox]}>
                <Button title='-'/>
                <Text>{item.title}: 0</Text>
                <Button title='+'/>
            </View>
        )
    }
    
        return (
            <View style={[globalStyles.container, globalStyles.background, screenStyles.mainMenuStyles.backgroundImage]}>
            <View style={[globalStyles.container, globalStyles.borderForTesting, screenStyles.statAllocationStyles.modal]}>
                <View>
                    <Text style={screenStyles.statAllocationStyles.titleText}>Stat Allocation</Text>
                </View>
                <FlatList data={data} renderItem={renderModalItem}/>
                <Button title='Continue' onPress={() => {setCurrentCombatScreen(1)}}/>
            </View>
        </View>
        );
}

export default StatsAllocationModal