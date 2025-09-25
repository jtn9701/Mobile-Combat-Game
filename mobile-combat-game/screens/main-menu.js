import { View, Button } from 'react-native';
import { globalStyles } from '../components/style-sheets/global-styles';
import { screenStyles } from '../components/style-sheets/screen-styles';
import combatArenaScreen from './combat-arena';

const mainMenuScreen =  function MainMenuScreen({navigation}, screenValueSetter) {
    // TODO: Turn the inner View into a custom component containing a list of components
    return (
        <View style={[globalStyles.container, globalStyles.background, screenStyles.mainMenuStyles.backgroundImage]}>
            <View style={[globalStyles.container, globalStyles.borderForTesting, screenStyles.mainMenuStyles.modal]}>
                <Button title='How To Play' onPress={() => {screenValueSetter(1)}}/>
                <Button title='Play' onPress={ () => {navigation.navigate("combat-landing-page")}}/>
                <Button title='Credits' onPress={() => {screenValueSetter(2)}}/>
            </View>
        </View>
    );
}
export default mainMenuScreen;