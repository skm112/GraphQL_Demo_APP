import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const cache = new InMemoryCache({
        typePolicies: {
            Get_Users_List: {
                fields: {
                    users: {
                        merge(existing = [], incoming) {
                            console.log("existing==> ", existing)
                            console.log("incoming==> ", incoming)
                            return [...existing, ...incoming];
                        },

                        // merge:true
                    }
                }
            }

        }
    })


    
export const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api',
    cache
});


export const CustomApolloProvider= ({ children }) => (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
)