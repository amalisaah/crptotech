//Test Case
const data = [{
    id: 1019,
    name: 'Stephen',
    age: 24
},
{
    id: 2019,
    name: 'Saah',
    age: 25
},
{
    id: 1231,
    name: "Liz",
    age: 21
}
]; 



//This function returns data based on specified ID
const getCryptotById = (id) => {
    return data.find(element =>element.id = id)
};

//This function deletes data based
const deleteElementById = (id) => {
    return data.pop(data.findIndex(element => element.id !== id))
};
