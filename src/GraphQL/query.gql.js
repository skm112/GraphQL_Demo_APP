import { gql } from '@apollo/client';

export const Delete_User = gql`
    mutation (
    $id: ID!
    ) {
    deleteUser(id: $id)
    }
`
export const Update_User = gql`
   mutation UpdateUser (
    $id: ID!,
    $input: UpdateUserInput!
    ) {
        updateUser(id: $id, input: $input) {
            id
            name
        }
    }
`
export const Create_User = gql`
    mutation($input: CreateUserInput!) {
    createUser(input: $input) {
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
    }
`

export const Get_User = gql`
    query User_Query($id: ID!){
     User(id:$id) {
        id
        name
        username
        email
        address {
            street
            suite
            city
            zipcode
            geo {
            lat
            lng
            }
        }
        phone
        website
        company {
            name
            catchPhrase
            bs
        }
    }
    }
`

export const Users_List = gql`
    query Get_Users_List($options: PageQueryOptions) {
    users(options: $options) {
        data {
        id
        name
        username
        email
        address {
            street
            suite
            city
            zipcode
            geo {
            lat
            lng
            }
        }
        phone
        website
        company {
            name
            catchPhrase
            bs
        }
        }
        links {
        first {
            page
            limit
        }
        prev {
            page
            limit
        }
        next {
            page
            limit
        }
        last {
            page
            limit
        }
        }
        meta {
        totalCount
        }
    }
    }
`

export const Custom_Query = gql`
    query UserComparison($idOne: ID!, $idTwo: ID!, $options: PageQueryOptions) {
        leftComparison: user(id: $idOne) {
        ...comparisonFields
        }
        rightComparison: user(id: $idTwo) {
        ...comparisonFields
        }
    }
    
    fragment comparisonFields on User {
        name
        email
        phone
        company{
            name
        }
        posts(options: $options) {
        data {
            id
            title
            body
        }
        }
    }
`

export const GET_POST = gql`
    query {
    post(id: 1) {
        id
        title
        body
        user {
            id 
            name
        }
    }
    }
`