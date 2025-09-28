import { Text, View, Button, FlatList } from 'react-native';
import { globalStyles } from './style-sheets/global-styles';
import { screenStyles } from './style-sheets/screen-styles';

import entityConstants from "./../constants/entityConstants.json"

import StatButton from './StatButton';

const StatsAllocationModal = ({data, setCurrentCombatScreen, state, dispatch, playerLevel, gameOutcome}) => {
    const renderModalItem = ({item}) => {
        const statContainerRenderer = () =>{
            function isPointsRemainingAboveZero() {
                return state.pointsToAllocate > 0;
            }

            function isNotCurrentStatAtMinValue(currentStat, minStat = 0) {
                return !(currentStat === minStat);
            }

            switch(item.title){
                case "Health":
                    return (
                        <>
                            <StatButton title={'-'} 
                                onPress={() => {
                                    dispatch( { statToChange: "healthStat", amount: -entityConstants.STAT_INCREMENT } );
                                    if (isNotCurrentStatAtMinValue(state.healthStat, entityConstants.DEFAULT_PLAYER_STATS.healthStat)){
                                        dispatch( { statToChange: "pointsToAllocate", amount: entityConstants.STAT_INCREMENT } );
                                    }
                                }}
                            />
                            <Text>{item.title}: {state.healthStat}</Text>
                            <StatButton title={'+'}  
                                onPress={() => {
                                    if (isPointsRemainingAboveZero()) {
                                        dispatch( { statToChange: "healthStat", amount: entityConstants.STAT_INCREMENT } ) ;
                                        dispatch( { statToChange: "pointsToAllocate", amount: -entityConstants.STAT_INCREMENT } );
                                    }
                                }}/>
                        </>
                    )
                case "Strength":
                    return (
                        <>
                            <StatButton title={'-'} 
                                onPress={() => {
                                    dispatch( { statToChange: "strengthStat", amount: -entityConstants.STAT_INCREMENT } );
                                    if (isNotCurrentStatAtMinValue(state.strengthStat, entityConstants.DEFAULT_PLAYER_STATS.strengthStat)){
                                        dispatch( { statToChange: "pointsToAllocate", amount: entityConstants.STAT_INCREMENT } );
                                    }
                                }}
                            />
                            <Text>{item.title}: {state.strengthStat}</Text>
                            <StatButton title={'+'}  
                                onPress={() => {
                                    if (isPointsRemainingAboveZero()) {
                                        dispatch( { statToChange: "strengthStat", amount: entityConstants.STAT_INCREMENT } ) ;
                                        dispatch( { statToChange: "pointsToAllocate", amount: -entityConstants.STAT_INCREMENT } );
                                    }
                                }}/>
                        </>
                    )
                case "Wisdom":
                    return (
                        <>
                            <StatButton title={'-'} 
                                onPress={() => {
                                    dispatch( { statToChange: "wisdomStat", amount: -entityConstants.STAT_INCREMENT } );
                                    if (isNotCurrentStatAtMinValue(state.wisdomStat, entityConstants.DEFAULT_PLAYER_STATS.wisdomStat)){
                                        dispatch( { statToChange: "pointsToAllocate", amount: entityConstants.STAT_INCREMENT } );
                                    }
                                }}
                            />
                            <Text>{item.title}: {state.wisdomStat}</Text>
                            <StatButton title={'+'}  
                                onPress={() => {
                                    if (isPointsRemainingAboveZero()) {
                                        dispatch( { statToChange: "wisdomStat", amount: entityConstants.STAT_INCREMENT } ) ;
                                        dispatch( { statToChange: "pointsToAllocate", amount: -entityConstants.STAT_INCREMENT } );
                                    }
                                }}/>
                        </>
                    )
                case "Mana":
                    return (
                        <>
                            <StatButton title={'-'} 
                                onPress={() => {
                                    dispatch( { statToChange: "manaStat", amount: -entityConstants.STAT_INCREMENT } );
                                    if (isNotCurrentStatAtMinValue(state.manaStat)){
                                        dispatch( { statToChange: "pointsToAllocate", amount: entityConstants.STAT_INCREMENT } );
                                    }
                                }}
                            />
                            <Text>{item.title}: {state.manaStat}</Text>
                            <StatButton title={'+'}  
                                onPress={() => {
                                    if (isPointsRemainingAboveZero()) {
                                        dispatch( { statToChange: "manaStat", amount: entityConstants.STAT_INCREMENT } ) ;
                                        dispatch( { statToChange: "pointsToAllocate", amount: -entityConstants.STAT_INCREMENT } );
                                    }
                                }}/>
                        </>
                    )
                case "Physical Defense":
                    return (
                        <>
                            <StatButton title={'-'} 
                                onPress={() => {
                                    dispatch( { statToChange: "defenseStat", amount: -entityConstants.STAT_INCREMENT } );
                                    if (isNotCurrentStatAtMinValue(state.defenseStat)){
                                        dispatch( { statToChange: "pointsToAllocate", amount: entityConstants.STAT_INCREMENT } );
                                    }
                                }}
                            />
                            <Text>{item.title}: {state.defenseStat}</Text>
                            <StatButton title={'+'}  
                                onPress={() => {
                                    if (isPointsRemainingAboveZero()) {
                                        dispatch( { statToChange: "defenseStat", amount: entityConstants.STAT_INCREMENT } ) ;
                                        dispatch( { statToChange: "pointsToAllocate", amount: -entityConstants.STAT_INCREMENT } );
                                    }
                                }}/>
                        </>
                    )
                case "Magic Defense":
                    return (
                        <>
                            <StatButton title={'-'} 
                                onPress={() => {
                                    dispatch( { statToChange: "magicDefenseStat", amount: -entityConstants.STAT_INCREMENT } );
                                    if (isNotCurrentStatAtMinValue(state.magicDefenseStat)){
                                        dispatch( { statToChange: "pointsToAllocate", amount: entityConstants.STAT_INCREMENT } );
                                    }
                                }}
                            />
                            <Text>{item.title}: {state.magicDefenseStat}</Text>
                            <StatButton title={'+'}  
                                onPress={() => {
                                    if (isPointsRemainingAboveZero()) {
                                        dispatch( { statToChange: "magicDefenseStat", amount: entityConstants.STAT_INCREMENT } ) ;
                                        dispatch( { statToChange: "pointsToAllocate", amount: -entityConstants.STAT_INCREMENT } );
                                    }
                                }}/>
                        </>
                    )
                default: return(
                    <></>
                )
            }
        }

        return (
            <View style={[globalStyles.borderForTesting, screenStyles.statAllocationStyles.statBox]}>
                {statContainerRenderer()}
            </View>
        )
    }
    
        return (
        <View style={[globalStyles.container, globalStyles.background, screenStyles.mainMenuStyles.backgroundImage]}>
            <View style={[globalStyles.container, globalStyles.borderForTesting, screenStyles.statAllocationStyles.modal]}>
                <View>
                    <Text style={screenStyles.statAllocationStyles.titleText}>Stat Allocation</Text>
                </View>
                <Text>Spend points to become stronger</Text>
                <FlatList data={data} renderItem={renderModalItem}/>
                <Text style={screenStyles.statAllocationStyles.titleText}>{gameOutcome}</Text>
                <Text style={screenStyles.statAllocationStyles.titleText}>Level: {playerLevel}</Text>
                <Text style={screenStyles.statAllocationStyles.titleText}>Points Remaining: {state.pointsToAllocate}</Text>
                <Button title='Continue' onPress={() => {setCurrentCombatScreen(1)}}/>
            </View>
        </View>
        );
}

export default StatsAllocationModal