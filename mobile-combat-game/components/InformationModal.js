import { View, FlatList, Button, Text } from 'react-native';

import { globalStyles } from './style-sheets/global-styles';
import { screenStyles } from './style-sheets/screen-styles';

const InformationModal = ({data, screenValueSetter}) => {
    const renderModalItem = ({item}) => {
        return <Text style={[screenStyles.mainMenuStyles.navButtons, globalStyles.borderForTesting, screenStyles.creditsStyles.textFont]}>{item.title}</Text>
    }

    return (
        <View style={[globalStyles.container, globalStyles.background, screenStyles.mainMenuStyles.backgroundImage]}>
            <View style={[globalStyles.container, globalStyles.borderForTesting, screenStyles.creditsStyles.modal]}>
                <FlatList data={data} renderItem={renderModalItem}/>
            </View>
            <Button title='Exit' onPress={() => {screenValueSetter(0)}}/>
        </View>
    )
}
export default InformationModal