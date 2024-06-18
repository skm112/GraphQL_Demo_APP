import { StyleSheet } from 'react-native'

export const KeyValueRowStyles = (colors) => StyleSheet.create({
    labelText: {
        alignSelf: 'stretch',
        flex: 1,
        paddingEnd: 4,
        fontSize: 14,
        letterSpacing: 0.2,
        color: colors.text,
        fontWeight: '600'

    },
    valueText: {
        flex: 1,
        alignSelf: 'flex-end',
        textAlign: 'right',
        paddingStart: 4,
        fontSize: 14,
        letterSpacing: 0.2,
        fontStyle: 'italic'
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 4
    }
})