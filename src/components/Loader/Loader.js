import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Portal } from '~components'
import { shadow } from '~styles'
import { useTheme } from '@react-navigation/native'
import { LoaderStyles } from './styles'


const Loader = ({ isLoading }) => {
    const { colors } = useTheme();
    const styles = LoaderStyles(colors);

    if (!isLoading) {
        return null;
    }

    return (
        <Portal>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <ActivityIndicator animating={true} size="large" color={colors.primary} />
                </View>
            </View>
        </Portal>
    )
}

export default Loader

