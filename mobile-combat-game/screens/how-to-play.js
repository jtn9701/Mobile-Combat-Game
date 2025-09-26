import InformationModal from '../components/InformationModal';
import constants from './../constants/flatListConstants.json';

const HowToPlayScreen =  ({setCurrentScreen}) => {
    return (
        <InformationModal
            data={constants.HOW_TO_PLAY_FLATLIST_DATA}
            screenValueSetter={setCurrentScreen}
        />
    );
}

export default HowToPlayScreen;