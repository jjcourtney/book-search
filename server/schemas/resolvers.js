// import middleware
const { authMiddleware } = require('../utils/auth');

const {
    createUser,
    getSingleUser,
    saveBook,
    deleteBook,
    login,
} = require('../controllers/user-controller');

const resolvers = {
    Query: {
        getSingleUser,

    },
    Mutation: {
        createUser,
        saveBook,
        deleteBook,
        login,
    },
};

module.exports = resolvers;
