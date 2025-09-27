import { Text, View, Button, FlatList } from 'react-native';
import { globalStyles } from './style-sheets/global-styles';
import { screenStyles } from './style-sheets/screen-styles';

import entityConstants from "./../constants/entityConstants.json"

const StatsAllocationModal = ({data, setCurrentCombatScreen, state, dispatch}) => {
    const renderModalItem = ({item}) => {
        const statContainerRenderer = () =>{
            switch(item.title){
                case "Health":
                    return (
                        <>
                            <Button title='-' 
                                onPress={() => {
                                    dispatch( { statToChange: "healthStat", amount: -entityConstants.STAT_INCREMENT } );
                                    dispatch( { statToChange: "pointsToAllocate", amount: entityConstants.STAT_INCREMENT } );
                                }}
                            />
                            <Text>{item.title}: {state.healthStat}</Text>
                            <Button title='+'  
                                onPress={() => {
                                    dispatch( { statToChange: "healthStat", amount: entityConstants.STAT_INCREMENT } ) ;
                                    dispatch( { statToChange: "pointsToAllocate", amount: -entityConstants.STAT_INCREMENT } );
                                }}/>
                        </>
                    )
                case "Strength":
                    return (
                        <>
                            <Button title='-' 
                                onPress={() => {
                                    dispatch( { statToChange: "strengthStat", amount: -entityConstants.STAT_INCREMENT } );
                                    dispatch( { statToChange: "pointsToAllocate", amount: entityConstants.STAT_INCREMENT } );
                                }}
                            />
                            <Text>{item.title}: {state.strengthStat}</Text>
                            <Button title='+'  
                                onPress={() => {
                                    dispatch( { statToChange: "strengthStat", amount: entityConstants.STAT_INCREMENT } ) ;
                                    dispatch( { statToChange: "pointsToAllocate", amount: -entityConstants.STAT_INCREMENT } );
                                }}/>
                        </>
                    )
                case "Wisdom":
                    return (
                        <>
                            <Button title='-' 
                                onPress={() => {
                                    dispatch( { statToChange: "wisdomStat", amount: -entityConstants.STAT_INCREMENT } );
                                    dispatch( { statToChange: "pointsToAllocate", amount: entityConstants.STAT_INCREMENT } );
                                }}
                            />
                            <Text>{item.title}: {state.wisdomStat}</Text>
                            <Button title='+'  
                                onPress={() => {
                                    dispatch( { statToChange: "wisdomStat", amount: entityConstants.STAT_INCREMENT } ) ;
                                    dispatch( { statToChange: "pointsToAllocate", amount: -entityConstants.STAT_INCREMENT } );
                                }}/>
                        </>
                    )
                case "Mana":
                    return (
                        <>
                            <Button title='-' 
                                onPress={() => {
                                    dispatch( { statToChange: "manaStat", amount: -entityConstants.STAT_INCREMENT } );
                                    dispatch( { statToChange: "pointsToAllocate", amount: entityConstants.STAT_INCREMENT } );
                                }}
                            />
                            <Text>{item.title}: {state.manaStat}</Text>
                            <Button title='+'  
                                onPress={() => {
                                    dispatch( { statToChange: "manaStat", amount: entityConstants.STAT_INCREMENT } ) ;
                                    dispatch( { statToChange: "pointsToAllocate", amount: -entityConstants.STAT_INCREMENT } );
                                }}/>
                        </>
                    )
                case "Physical Defense":
                    return (
                        <>
                            <Button title='-' 
                                onPress={() => {
                                    dispatch( { statToChange: "defenseStat", amount: -entityConstants.STAT_INCREMENT } );
                                    dispatch( { statToChange: "pointsToAllocate", amount: entityConstants.STAT_INCREMENT } );
                                }}
                            />
                            <Text>{item.title}: {state.defenseStat}</Text>
                            <Button title='+'  
                                onPress={() => {
                                    dispatch( { statToChange: "defenseStat", amount: entityConstants.STAT_INCREMENT } ) ;
                                    dispatch( { statToChange: "pointsToAllocate", amount: -entityConstants.STAT_INCREMENT } );
                                }}/>
                        </>
                    )
                case "Magic Defense":
                    return (
                        <>
                            <Button title='-' 
                                onPress={() => {
                                    dispatch( { statToChange: "magicDefenseStat", amount: -entityConstants.STAT_INCREMENT } );
                                    dispatch( { statToChange: "pointsToAllocate", amount: entityConstants.STAT_INCREMENT } );
                                }}
                            />
                            <Text>{item.title}: {state.magicDefenseStat}</Text>
                            <Button title='+'  
                                onPress={() => {
                                    dispatch( { statToChange: "magicDefenseStat", amount: entityConstants.STAT_INCREMENT } ) ;
                                    dispatch( { statToChange: "pointsToAllocate", amount: -entityConstants.STAT_INCREMENT } );
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
                <FlatList data={data} renderItem={renderModalItem}/>
                <Text style={screenStyles.statAllocationStyles.titleText}>Points Remaining: {state.pointsToAllocate}</Text>
                <Button title='Continue' onPress={() => {setCurrentCombatScreen(1)}}/>
            </View>
        </View>
        );
}

export default StatsAllocationModal