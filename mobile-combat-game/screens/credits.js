import { Text, View, Button } from 'react-native';
import { globalStyles } from '../components/style-sheets/global-styles';
import { screenStyles } from '../components/style-sheets/screen-styles';

const creditsScreen =  function CreditsScreen() {
    // TODO: Turn the inner View into a custom component containing a list of components
    return (
            <View style={[globalStyles.container, globalStyles.background, screenStyles.mainMenuStyles.backgroundImage]}>
                <View style={[globalStyles.container, globalStyles.borderForTesting, screenStyles.creditsStyles.modal]}>
                    <Text style={[screenStyles.mainMenuStyles.navButtons, globalStyles.borderForTesting, screenStyles.creditsStyles.textFont]}>Created By: Jason Nguyen</Text>
                    <Text style={[screenStyles.mainMenuStyles.navButtons, globalStyles.borderForTesting, screenStyles.creditsStyles.textFont]}>Art By: Test</Text>
                    <Text style={[screenStyles.mainMenuStyles.navButtons, globalStyles.borderForTesting, screenStyles.creditsStyles.textFont]}>Music By: Test</Text>
                </View>
                <Button title='Exit'/>
            </View>
    );
}

export default creditsScreen;