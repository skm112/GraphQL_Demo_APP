import { StyleSheet } from "react-native";

export const ExampleThreeStyles = (colors) => StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.card,
        padding: 16,
        marginHorizontal: 16,
        borderRadius: 4

    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: .2,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        color: colors.primary,
        lineHeight: 24,
    },
    separator: {
        height: 8
    },
    itemBtnContainer: {
        borderTopWidth: 1,
        borderTopColor: colors.border,
        paddingTop: 8,
        flexDirection:'row',
        justifyContent:'center',
        
    },
    btn: {
        backgroundColor: colors.danger,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        marginHorizontal:8
    },
    deleteBtn:{
        backgroundColor: colors.danger,
    },
    updateBtn:{
        backgroundColor: colors.success,
    },
    deleteBtnText: {
        color: colors.textOne,
        fontWeight: '500'
    }
})