import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const globalStyles = StyleSheet.create({
    borderForTesting: {
        borderWidth: 5,
        borderRadius: 20,
        borderColor: '#000000ff'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
            width: '100%',
            resizeMode: 'contain',
        }
});
