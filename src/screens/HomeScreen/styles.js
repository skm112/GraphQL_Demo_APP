import { StyleSheet } from "react-native";
import { shadow } from '~styles'

export const HomeScreenStyles = (colors) => StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.card,
        padding: 16,
        marginHorizontal: 16,
        borderStartWidth: 8,
        borderStartColor: colors.primary,
        borderRadius:4,
        ...shadow
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: .2,
        color: colors.text
    },
    separator: {
        height: 8
    }

})