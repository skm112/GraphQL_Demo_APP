import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Platform, Pressable } from 'react-native'
import React from 'react'
import { Header, Loader, InputField } from '../../components'
import { shadow } from '~styles'
import { useTheme } from '@react-navigation/native'
import { useDebouncedInput } from '../../hooks/useDebouncedInput';
import { useMutation, NetworkStatus, gql } from '@apollo/client';
import { Users_List, Create_User } from '../../GraphQL/query.gql'


const ExampleFour = () => {
    const { colors } = useTheme();
    const styles = ExampleFourStyles(colors);
    const name = useDebouncedInput('');
    const username = useDebouncedInput('');
    const email = useDebouncedInput('');
    const phone = useDebouncedInput('');
    const website = useDebouncedInput('');
    const company = useDebouncedInput('');
    const [saveUser, { data, loading, reset }] = useMutation(Create_User, {
        // refetchQueries: [{ query: Users_List }]
        update(
            cache,
            {
                data: { createUser }
            }
        ) {

            cache.modify({
                fields: {
                    users(existingUsers = []) {
                        const newUserRef = cache.writeFragment({
                            data: createUser,
                            fragment: gql`
                      fragment NewUser on User {
                        id
                        name
                        username
                        email
                        phone
                        website
                        company {
                            name
                        }
                      }
                    `
                        });
                        return {
                            ...existingUsers,
                            data: [...existingUsers.data, newUserRef]
                        }
                    }
                }
            });
        }
    })

    const onSave = () => {
        if (loading) return;
        reset()
        const obj = {
            name: name.value,
            username: username.value,
            email: email.value,
            phone: phone.value,
            website: website.value,
            company: {
                name: company.value
            }
        }
        saveUser({
            variables: {
                input: obj
            },
            onCompleted(data, clientOptions) {
                name.clear();
                username.clear();
                email.clear();
                phone.clear();
                website.clear();
                company.clear();
                alert('Saved successfully')
            },

        })



    }

    return (<>
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <ScrollView keyboardDismissMode='on-drag' keyboardShouldPersistTaps="handled">
                <Header title="Example 4" />
                {loading ? <Loader isLoading={true} /> : null}
                <InputField label="Name" {...name.options} />
                <InputField label="Username" {...username.options} />
                <InputField label="Email" keyboardType="email-address" {...email.options} />
                <InputField label="Phone" keyboardType="phone-pad" {...phone.options} />
                <InputField label="Website" {...website.options} />
                <InputField label="Company" {...company.options} />
            </ScrollView>
        </KeyboardAvoidingView>
        <Pressable style={styles.button} onPress={onSave}>
            <Text style={styles.buttonText}>
                Save
            </Text>
        </Pressable>
    </>
    )
}

export default ExampleFour

const ExampleFourStyles = (colors) => StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        marginHorizontal: 8,
        marginTop: 24,
    },
    buttonText: {
        color: colors.textOne,
        fontSize: 16

    }
})