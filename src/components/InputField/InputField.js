import { StyleSheet, Text, TextInput } from 'react-native'
import React, { forwardRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { InputFieldStyle } from './styles';

// /** @type {function(number,...TextProps):string} */
const InputField = forwardRef(({ label, ...textInputProps }, ref) => {
    const { colors } = useTheme();
    const styles = InputFieldStyle(colors);
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                ref={ref}
                style={styles.textInput}
                {...textInputProps}

            />
        </>
    )
})


export default InputField

