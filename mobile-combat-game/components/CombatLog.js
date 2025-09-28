import { Text, View, FlatList } from 'react-native';
import { useRef } from 'react';
import { globalStyles } from './style-sheets/global-styles';

const CombatLog = ({data}) => {
const listRef = useRef(null);

    const renderItem = ({item}) => {
        return (
            <Text>{item}</Text>
        )
    }

    return (
        <View style={[globalStyles.borderForTesting, {flex: 0.4, width: "100%"}]}>
            <FlatList 
                ref={listRef}
                data={data} 
                renderItem={renderItem} 
                style={{flexGrow: 1}}
                onContentSizeChange={() => {
                    // Scroll to the most recent log when updated
                    if (listRef.current) {
                        listRef.current.scrollToEnd({ animated: true });
                    }
                }}
                keyExtractor={(item, index) => String(index)}
            />
        </View>
    )
}

export default CombatLog