import InformationModal from '../components/InformationModal';
import constants from './../constants/flatListConstants.json';

const CreditsScreen =  ({setCurrentScreen}) => {
    return (
        <InformationModal
            data={constants.CREDITS_FLATLIST_DATA}
            screenValueSetter={setCurrentScreen}
        />
    );
}

export default CreditsScreen;