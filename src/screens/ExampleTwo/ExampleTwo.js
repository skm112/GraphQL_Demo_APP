import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { Custom_Query } from '../../GraphQL/query.gql';

const ExampleTwo= () => {
    const { data, fetchMore } = useQuery(Custom_Query, {
        variables: {
            "idOne": 1,
            "idTwo": 2,
            "options": {
                "paginate": {
                    "page": 1,
                    "limit": 3
                }
            }
        }
    })
    return (<>
        <ScrollView>
            <Text>ExampleTwo</Text>
            <Text>{JSON.stringify(data, null, 4)}</Text>
        </ScrollView>
        <Pressable style={{
            backgroundColor: "#9cb7fb",
            margin: 16,
            paddingHorizontal: 16,
            paddingVertical: 8,
            alignItems: 'center',
            borderRadius: 50,
            alignSelf: 'center'
        }}
            onPress={async () => {
                await fetchMore({
                    variables: {
                        "options": {
                            "paginate": {
                                "page": 2,
                            }
                        }
                    }
                })
            }}
        >
            <Text style={{
                color: '#ffffff',
                letterSpacing: .5,
                fontWeight: 'bold'
            }}>Load More</Text>
        </Pressable>
    </>
    )
}

export default ExampleTwo;