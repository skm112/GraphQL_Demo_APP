import { Text, View } from 'react-native'
import React, { useRef } from 'react'
import { useTheme } from '@react-navigation/native'
import { KeyValueRowStyles } from './styles'

const KeyValueRow = ({ label, value }) => {
    const { colors } = useTheme();
    const styles = KeyValueRowStyles(colors);
    const textOptions = useRef({
        ellipsizeMode: 'tail',
        numberOfLines: 1
    }).current;

    return (
        <View style={styles.container}>
            <Text style={styles.labelText} {...textOptions}  >{label}
            </Text>
            <Text style={styles.valueText} {...textOptions} numberOfLines={2}>
                {value}
            </Text>
        </View>
    )
}

KeyValueRow.defaultProps = {
    label: '',
    value: ''
}

export default KeyValueRow

