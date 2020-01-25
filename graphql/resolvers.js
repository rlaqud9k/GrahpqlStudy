const byeong = {
    name: `rlaqudrhks`,
    age: 42,
    gender: "male"
};

const resolvers = {
    Query : {
        person : () => byeong
    }

}

export default resolvers;