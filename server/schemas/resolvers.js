
const resolvers = {
    Query: {
        getSingleUser: async (_, args, { user }) => {
            if (user) {
                return User.findOne({
                    _id: user._id
                });
            }
            throw new AuthenticationError("Please log in");
        },
    },

    Mutation: {
        createUser: async (_, { username, email, password }) => {

            const newUser = await User.create({
                username,
                email,
                password
            });

            const token = signToken(newUser);

            return {
                token,
                newUser
            };
        },
        saveBook: async (_, { book }, { user }) => {

            if (user) {
                return await User.findOneAndUpdate(
                    {
                        _id: user._id
                    },
                    {
                        $addToSet: {
                            savedBooks: book
                        }
                    },
                    {
                        new: true,
                        runValidators: true
                    }
                );
            }
            throw new AuthenticationError("Login first to add a book!");
        },
        deleteBook: async (_, { bookId }, { user }) => {

            if (user) {
                return await User.findOneAndUpdate(
                    {
                        _id: user._id
                    },
                    {
                        $pull: {
                            savedBooks: {
                                bookId
                            }
                        }
                    },
                    {
                        new: true
                    }
                );
            }
            throw new AuthenticationError("Login to complete action");
        },

        login: async (_, { email, password }) => {

            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Login Failed");
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError("Login Failed");
            }

            const token = signToken(user);

            return {
                token,
                user
            };
        }
    }
}


module.exports = resolvers;
