//This function returns data based on specified ID
const getCryptotById = (id) => {
    return data.find(element => element.id === id)
};

//This function deletes data based
const deleteElementById = (id) => {
     data.splice(data.findIndex(element => element.id === id), 1)
     return data
};