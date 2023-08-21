import React, { useState } from 'react'
import { useQuery, useLazyQuery, gql, useMutation } from '@apollo/client'

const QUERY_ALL_RECIPES = gql`
    query GetRecipes {
        recipes {
            id
            name
            nationality
            portions
        }
    }
`

const QUERY_ALL_DRINKS = gql`
    query GetDrinks {
        drinks {
            name
        }
    }
`

const GET_DRINK_BY_NAME = gql`
    query Drink($name: String!) {
        drink(name: $name) {
            name
            alcoholic
        }
    }
`

const CREATE_RECIPE_MUTATION = gql`
    mutation CreateRecipe($input: CreateRecipeInput!) {
        createRecipe(input: $input) {
            name
            id
            portions
        }
    }
`

const DisplayData = () => {
    const [drinkSearched, setDrinkSearched] = useState("");

    // Create recipe states
    const [name, setName] = useState("");
    const [nationality, setNationality] = useState("");
    const [portions, setPortions] = useState(0);

    const { error, data, loading, refetch } = useQuery(QUERY_ALL_RECIPES);
    const { data: drinkData } = useQuery(QUERY_ALL_DRINKS);
    const [fetchDrink, {data: drinkSearchData }] = useLazyQuery(GET_DRINK_BY_NAME);
    const [createRecipe] = useMutation(CREATE_RECIPE_MUTATION);

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        console.log(error);
    }

    return (
        <div>
            <div>
                <input 
                    type='text' 
                    placeholder='name' 
                    onChange={(e) => {setName(e.target.value);}}/>
                <input 
                    type='text' 
                    placeholder='nationality' 
                    onChange={(e) => {setNationality(e.target.value.toUpperCase());}}/>
                <input 
                    type='number' 
                    placeholder='portions' 
                    onChange={(e) => {setPortions(e.target.value);}}/>
                <button 
                    onClick={() => {
                        createRecipe({
                            variables: {
                                input: {name, nationality, portions: Number(portions)}
                            }
                        });
                        refetch();
                    }}>
                    Create Recipe
                </button>
            </div>
            {data && data.recipes.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <h1>Name: {recipe.name}</h1>
                        <h1>Nationality: {recipe.nationality}</h1>
                        <h1>Portions: {recipe.portions}</h1>
                        <br/>
                    </div>
                )
            })}
            {drinkData && drinkData.drinks.map((drink) => {
                return (
                    <div key={drink.id}>
                        <h1>Name: {drink.name}</h1>
                        <br/>
                    </div>
                )
            })}

            <div>
                <input 
                    type='text' 
                    placeholder='Search for a drink...' 
                    onChange={(e) => {setDrinkSearched(e.target.value);}}>
                </input>
                <button 
                    onClick={() => {
                        fetchDrink({
                            variables: {
                                name: drinkSearched,
                            },
                        });
                    }}
                >
                    Fetch data
                </button>
                <div>
                    {drinkSearchData && 
                        <div>
                            <h1>Drink: {drinkSearchData.drink.name}</h1>
                            <h1>Alcoholic?: {drinkSearchData.drink.alcoholic? "Yes": "No"}</h1>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default DisplayData