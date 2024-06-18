import { StyleSheet, Text, View, Pressable, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { useQuery, NetworkStatus, useMutation } from '@apollo/client'
import { Users_List, Delete_User, Update_User } from '../../GraphQL/query.gql'
import { useTheme } from '@react-navigation/native'
import { Header, Loader, KeyValueRow } from '../../components'
import { shadow } from '~styles'
import { ExampleThreeStyles } from './styles'




const ExampleThree = () => {
  const { colors } = useTheme();
  const { data, fetchMore, refetch, loading, networkStatus } = useQuery(Users_List, {
    variables: {
      "options": {
        "paginate": {
          "page": 1,
          "limit": 3
        }
      }
    },
    notifyOnNetworkStatusChange: true
  })
  const [updateUser, { data: updateResponse, loading: updateLoading, reset: updateReset }] = useMutation(Update_User);
  const [deleteUser, { data: deleteResponse, loading: deleteLoading, reset }] = useMutation(Delete_User, {
    refetchQueries: [{ query: Users_List }]


  })
  const styles = ExampleThreeStyles(colors);

  if (loading && networkStatus === NetworkStatus.loading) return <Loader isLoading={true} />;


  const keyExtractor = (item, index) => `index-${index}-id-${item.id}`
  const onUpdate = (id) => {
    updateReset();
    updateUser({
      variables: {
        id,
        input: {
          name: "Updated Name"
        }
      },
      onCompleted(data) {
        if (data?.updateUser) {
          alert('User updated successfully')
        }
      },

    })
  }
  const onDelete = (id) => {
    reset();
    deleteUser({
      variables: {
        id
      },
      onCompleted(data) {
        if (data?.deleteUser) {
          alert('User deleted successfully')
        }
      },

    })
  }
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[styles.itemContainer, shadow]}
      >
        <Text style={styles.itemText}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {`${item.id}. ${item.name}`}
        </Text>
        <KeyValueRow
          label="Email"
          value={item.email}
        />
        <KeyValueRow
          label="Username"
          value={item.username}
        />
        <KeyValueRow
          label="Phone"
          value={item.phone}
        />
        <KeyValueRow
          label="Website"
          value={item.website}
        />
        <KeyValueRow
          label="Company"
          value={item.company.name}
        />
        <KeyValueRow
          label="Street"
          value={item.address.street}
        />
        <KeyValueRow
          label="Suite"
          value={item.address.suite}
        />
        <KeyValueRow
          label="City"
          value={item.address.city}
        />
        <KeyValueRow
          label="Zipcode"
          value={item.address.zipcode}
        />
        <KeyValueRow
          label="Geo Coordinates"
          value={`${item.address.geo.lat}, ${item.address.geo.lng}`}
        />
        <View style={styles.itemBtnContainer}>
          <Pressable style={[styles.btn, styles.updateBtn]} onPress={() => onUpdate(item.id)}>
            <Text style={styles.deleteBtnText}>Update Name</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.deleteBtn]} onPress={() => onDelete(item.id)}>
            <Text style={styles.deleteBtnText}>Delete</Text>
          </Pressable>
        </View>
      </View>
    )
  }

  const separator = () => <View style={styles.separator} />;
  const onRefresh = () => {
    refetch({
      options: {
        paginate: {
          limit: 3,
          page: 1
        }
      }
    })
  }

  const nextPage = () => {
    if (data?.users?.links?.next) {
      const { page, limit } = data.users.links.next

      fetchMore({
        variables: {
          options: {
            paginate: {
              page, limit
            }
          }
        },
        updateQuery: (prev, { fetchMoreResult, variables }) => {
          if (!fetchMoreResult) {
            return prev
          }
          return {
            users: {
              "_typename": "UsersPage",
              data: [
                ...prev.users.data, ...fetchMoreResult.users.data
              ],
              links: fetchMoreResult.users.links,
              meta: fetchMoreResult.users.meta
            }
          }
        }
      })
    }
  }

  return (<>
    <Header title="Example 3" />
    {deleteLoading || updateLoading ? <Loader isLoading={true} /> : null}
    <FlatList
      data={data.users.data ?? []}
      contentContainerStyle={{ paddingVertical: 16 }}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={separator}
      renderItem={renderItem}
      onEndReachedThreshold={0.2}
      onEndReached={nextPage}
      onRefresh={onRefresh}
      refreshing={loading && networkStatus == NetworkStatus.refetch}
    />
  </>
  )
}

export default ExampleThree
