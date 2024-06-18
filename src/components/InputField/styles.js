import { StyleSheet } from "react-native"

export const InputFieldStyle = (colors) => StyleSheet.create({
    label: {
        color: colors.text,
        fontSize: 14,
        fontWeight: '500',
        paddingHorizontal: 12,
        marginTop: 8

    },
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginHorizontal: 8,
        marginTop: 8,
        marginBottom: 8
    }
})