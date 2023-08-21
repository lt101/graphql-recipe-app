const { gql } = require('apollo-server')

const typeDefs = gql`
    type Recipe {
        id: ID!
        name: String!
        nationality: Nationality!
        portions: Int!
        components: [Recipe]
        pairings: [Drink]
    }

    type Drink {
        id: ID!
        name: String!
        alcoholic: Boolean!
    }

    type Query {
        recipes: [Recipe!]!
        recipe(id: ID!): Recipe
        drinks: [Drink!]!
        drink(name: String!): Drink!
    }

    input CreateRecipeInput {
        name: String!
        nationality: Nationality
        portions: Int!
    }

    input UpdateRecipeNameInput {
        id: ID!
        newName: String!
    }

    type Mutation {
        createRecipe(input: CreateRecipeInput!): Recipe
        updateRecipeName(input: UpdateRecipeNameInput!): Recipe
        deleteRecipe(id: ID!): Recipe
    }
    
    enum Nationality {
        MEXICO
        GREECE
        JAPAN
        ITALY
        CHINA
    }

`;

module.exports = { typeDefs }

