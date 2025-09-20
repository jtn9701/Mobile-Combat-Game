import { Text, View } from 'react-native';
import { globalStyles } from '../components/style-sheets/global-styles';
import { mainMenuStyles } from '../components/style-sheets/screen-styles';

const mainMenuScreen =  function MainMenuScreen() {
    return (
        <View style={[globalStyles.container, globalStyles.background, mainMenuStyles.backgroundImage]}>
            <View style={[globalStyles.container, globalStyles.borderForTesting, mainMenuStyles.modal]}>
                <Text style={[mainMenuStyles.navButtons, globalStyles.borderForTesting]}>How To Play</Text>
                <Text style={[mainMenuStyles.navButtons, globalStyles.borderForTesting]}>Play</Text>
                <Text style={[mainMenuStyles.navButtons, globalStyles.borderForTesting]}>Credits</Text>
            </View>
        </View>
    );
}

export default mainMenuScreen;