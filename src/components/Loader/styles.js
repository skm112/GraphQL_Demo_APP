import { StyleSheet } from 'react-native'
import { shadow } from '~styles'

export const LoaderStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subContainer: {
        backgroundColor: colors.card,
        padding: 4,
        borderRadius: 100,
        ...shadow
    }
})