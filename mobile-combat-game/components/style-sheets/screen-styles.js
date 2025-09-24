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
    },
    statAllocationStyles: {
        modal: {
            flex: 0.75,
            width: '75%',
            justifyContent: 'space-evenly'
        },
        statBox: {
            flexDirection: 'row',
            flex: 0.05,
            width: '95%',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        titleText: {
            fontSize: 20
        }
    },
    combatArenaStyles: {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 100
        },
        backgroundImage: {
            // TODO: replace with background image
            backgroundColor: '#1084e4ff'
        },
        monsterAreaContainer: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            justifyContent: 'flex-end',
            paddingBottom: 100
        },
        combatActionContainer: {
            flex: .4,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        }
    }
})

