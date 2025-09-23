import { StyleSheet } from 'react-native';

export const screenStyles = StyleSheet.create({
    mainMenuStyles: {
        backgroundImage: {
            // TODO: replace with background image
            backgroundColor: '#1084e4ff'
        },
        modal: {
            flex: 0.50,
            width: '50%',
            justifyContent: 'space-evenly'
        },
        navButtons: {
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            flex: 0.15,
            width: "80%",
            paddingTop: 30,
        }
    },
    creditsStyles: {
        modal: {
            flex: 0.75,
            width: '75%',
            justifyContent: 'center'
        },
        textFont: {
            fontSize: 20
        }
    }
})

