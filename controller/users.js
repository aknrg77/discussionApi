
const login = (req,res) => {
    res.send("login");
}

const signup = (req,res) => {
    console.log("Hello Route1");
}

module.exports = {
    login,
    signup
}

