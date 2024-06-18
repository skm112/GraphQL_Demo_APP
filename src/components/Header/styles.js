import { StyleSheet} from 'react-native';

export const HeaderStyles = (colors) => StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        paddingVertical: 8,
        minHeight: 60,
        justifyContent: 'center'
    },
    headerText: {
        color: colors.textOne,
        alignSelf: 'center',
        fontSize: 20
    },
})