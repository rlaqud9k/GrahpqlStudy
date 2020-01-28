const People = [
    {
        id: 1,
        name: `rlaqudrhks`,
        age: 2,
        gender: "male"
    },
    {
        id: 2,
        name: `q`,
        age: 5,
        gender: "male"
    },
    {
        id: 3,
        name: `d`,
        age: 213,
        gender: "male"
    },
    {
        id: 5,
        name: `g`,
        age: 44,
        gender: "female"
    }
]

const resolvers = {
    Query: {
        people: () => People,
        person: (i) => People[i]
    }

}

export default resolvers;