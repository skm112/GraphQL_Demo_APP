import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { HeaderStyles } from './styles';

/**
 * @param {string} title
 * @return {JSX.Element}
 */
const Header = ({ title }) => {
    const { colors } = useTheme();
  
    const styles = HeaderStyles(colors);
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

Header.defaultProps = {
    title: ''
}

export default Header;

