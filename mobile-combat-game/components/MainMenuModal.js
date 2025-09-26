import { View, FlatList, Button, Text } from 'react-native';

import { globalStyles } from './style-sheets/global-styles';
import { screenStyles } from './style-sheets/screen-styles';

const MainMenuModal = ({data, navigation, setCurrentScreen}) => {
    const renderModalItem = ({item}) => {
        let screenValueSetter;
        if (item.title === "How To Play"){
            screenValueSetter = () => {setCurrentScreen(1)};
        } else if (item.title === "Play") {
            screenValueSetter = () => {navigation.navigate('combat-landing-page')};
        } else if (item.title === "Credits") {
            screenValueSetter = () => {setCurrentScreen(2)};
        }

        return <Button title={item.title} onPress={screenValueSetter}/>
    }

    return (
        <View style={[globalStyles.container, globalStyles.background, screenStyles.mainMenuStyles.backgroundImage]}>
            <View style={[globalStyles.container, globalStyles.borderForTesting, screenStyles.mainMenuStyles.modal]}>
                <FlatList data={data} renderItem={renderModalItem}/>
            </View>
        </View>
    );
}

export default MainMenuModal