import { Text, View, Button } from 'react-native';
import { globalStyles } from '../components/style-sheets/global-styles';
import { screenStyles } from '../components/style-sheets/screen-styles';

const howToPlayScreen =  function HowToPlayScreen(screenValueSetter) {
    return (
        <View style={[globalStyles.container, globalStyles.background, screenStyles.mainMenuStyles.backgroundImage]}>
            <View style={[globalStyles.container, globalStyles.borderForTesting, screenStyles.creditsStyles.modal]}>
                <Text style={[screenStyles.mainMenuStyles.navButtons, globalStyles.borderForTesting, screenStyles.creditsStyles.textFont]}>Step 1: Press Play</Text>
                <Text style={[screenStyles.mainMenuStyles.navButtons, globalStyles.borderForTesting, screenStyles.creditsStyles.textFont]}>Step 2: Allocate stat points</Text>
                <Text style={[screenStyles.mainMenuStyles.navButtons, globalStyles.borderForTesting, screenStyles.creditsStyles.textFont]}>Step 3: Fight!</Text>
            </View>
            <Button title='Exit' onPress={() => {screenValueSetter(0)}}/>
        </View>
    );
}

export default howToPlayScreen;