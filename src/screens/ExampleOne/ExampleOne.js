import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POST } from '../../GraphQL/query.gql'

const ExampleOne = () => {
    const { data, loading } = useQuery(GET_POST);

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
    return (
        <View>
            <Text>ExampleOne</Text>
            <Text>{JSON.stringify(data.post, null, 4)}</Text>
        </View>
    )
}

export default ExampleOne