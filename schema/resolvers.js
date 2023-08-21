const { RecipeList, DrinkList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    Query: {
        recipes: () => {
            return RecipeList;
        },
        recipe: (parent, args) => {
            const id = args.id;
            const recipe = _.find(RecipeList, { id: Number(id) });
            return recipe;
        },
        drinks: () => {
            return DrinkList;
        },
        drink: (parent, args) => {
            const name = args.name;
            const drink = _.find(DrinkList, { name });
            return drink;
        }
    },
    Recipe: {
        pairings: () => {
            return _.filter(DrinkList, (drink) => !drink.alcoholic)
        }
    },
    Mutation: {
        createRecipe: (parent, args) => {
            const recipe = args.input;
            const lastId = RecipeList[RecipeList.length-1].id;
            recipe.id = lastId + 1;
            RecipeList.push(recipe);
            return recipe;
        },
        updateRecipeName: (parent, args) => {
            const {id, newName} = args.input;
            let recipeUpdated;
            RecipeList.forEach((recipe) => {
                if (recipe.id === Number(id)) {
                    recipe.name = newName;
                    recipeUpdated = recipe; 
                }
            })
            return recipeUpdated;
        },
        deleteRecipe: (parent, args) => {
            const id = args.id;
            _.remove(RecipeList, (recipe) => recipe.id === Number(id));
            return null;
        }
    }
}

module.exports = { resolvers };