import { View, Button } from 'react-native';
import { globalStyles } from '../components/style-sheets/global-styles';
import { screenStyles } from '../components/style-sheets/screen-styles';

const mainMenuScreen =  function MainMenuScreen() {
    // TODO: Turn the inner View into a custom component containing a list of components
    return (
        <View style={[globalStyles.container, globalStyles.background, screenStyles.mainMenuStyles.backgroundImage]}>
            <View style={[globalStyles.container, globalStyles.borderForTesting, screenStyles.mainMenuStyles.modal]}>
                <Button title='How To Play'/>
                <Button title='Play'/>
                <Button title='Credits'/>
            </View>
        </View>
    );
}
export default mainMenuScreen;

/*
    <Text style={[mainMenuStyles.navButtons, globalStyles.borderForTesting]}>How To Play</Text>
    <Text style={[mainMenuStyles.navButtons, globalStyles.borderForTesting]}>Play</Text>
    <Text style={[mainMenuStyles.navButtons, globalStyles.borderForTesting]}>Credits</Text>
*/