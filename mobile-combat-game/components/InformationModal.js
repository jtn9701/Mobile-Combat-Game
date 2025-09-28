import { View, FlatList, Button, Text, Image } from 'react-native';

import { globalStyles } from './style-sheets/global-styles';
import { screenStyles } from './style-sheets/screen-styles';

const InformationModal = ({data, screenValueSetter}) => {
    const renderModalItem = ({item}) => {
        return <Text style={[globalStyles.borderForTesting, screenStyles.creditsStyles.textFont, {alignSelf: 'center', textAlign: 'center', width: '80%', paddingVertical: 10}]}>{item.title}</Text>
    }

    return (
        <View style={[globalStyles.container, globalStyles.background, screenStyles.mainMenuStyles.backgroundImage]}>
            <View style={[globalStyles.container, globalStyles.borderForTesting, screenStyles.creditsStyles.modal]}>
                <Image style={{height: 200, width: 200, marginBottom: 10}} source={require('./../assets/images/info.png')}/>
                <FlatList style={{width: '90%'}} data={data} renderItem={renderModalItem}/>
                <Button title='Exit' onPress={() => {screenValueSetter(0)}}/>
            </View>
        </View>
    )
}
export default InformationModal