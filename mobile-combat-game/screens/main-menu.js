import MainMenuModal from '../components/MainMenuModal';
import constants from './../constants/flatListConstants.json';

const MainMenuScreen = ({navigation, setCurrentScreen}) => {
    return (
        <MainMenuModal
            data={constants.MAIN_MENU_FLATLIST_DATA}
            setCurrentScreen={setCurrentScreen} 
            navigation={navigation}
        />
    );
}
export default MainMenuScreen;