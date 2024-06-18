import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Header } from '~components'
import { HomeScreenStyles } from './styles'



const HomeScreen = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const styles = HomeScreenStyles(colors);
    const data = useRef([
        { name: 'ExampleOne', label: "Example 1", id: 0 },
        { name: 'ExampleTwo', label: "Example 2", id: 1 },
        { name: 'ExampleThree', label: "Example 3", id: 2 },
        { name: 'ExampleFour', label: "Example 4", id: 3 },
    ]).current;

    const keyExtractor = (item, index) => `index-${index}-id-${item.id}`

    const renderItem = (info) => {
        return (
            <Pressable
                style={styles.itemContainer}
                onPress={() => navigation?.navigate(info?.item?.name)}
            >
                <Text style={styles.itemText}>{info.item.label}</Text>
            </Pressable>
        )
    }

    const separator = () => <View style={styles.separator} />;


    return (<>
        <Header title="GraphQL Examples" />
        <FlatList
            data={data}
            contentContainerStyle={{ paddingVertical: 16 }}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={separator}
            renderItem={renderItem}
        />
    </>
    )
}

export default HomeScreen;
