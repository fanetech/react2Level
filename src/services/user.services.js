import data from '../fr.json'
const getAllUser = () => {
    return data.user
}
const getUser = (uid) => {
    return data.user.find(user => user.id === uid)
}

export const userService = {
    getAllUser,
    getUser
}