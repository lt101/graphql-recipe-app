const RecipeList = [
    {
        id: 1,
        name: "Taco",
        nationality: "MEXICO",
        portions: 4,
        components: [
            {
                id:5,
                name: "Salsa",
                portions: 4,
                nationality: "MEXICO"
            }
        ]
    },
    {
        id: 2,
        name: "Sushi",
        nationality: "JAPAN",
        portions: 10,
    },
    {
        id: 3,
        name: "Greek salad",
        nationality: "GREECE",
        portions: 3,
    },
    {
        id: 4,
        name: "Pizza",
        nationality: "ITALY",
        portions: 1,
        components: [
            {
                id:6,
                name: "Tomato sauce",
                portions: 8,
                nationality: "ITALY"
            }
        ]
    },
]

const DrinkList = [
    {
        id: 1,
        name: "Apple juice",
        alcoholic: false
    },
    {
        id: 2,
        name: "Beer",
        alcoholic: true
    },
    {
        id: 3,
        name: "Water",
        alcoholic: false
    },
    {
        id: 4,
        name: "Milk",
        alcoholic: false
    },
]

module.exports = { RecipeList, DrinkList }