const User = require('./model')
const { sign } = require("../../services/jwt");

const create = async ({ body }, res, next) => {
    try {
        const user = await User.create(body);
        res.status(201).json({
            user: user.view(),
            token: sign(user)
        })
    } catch (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
            return res.status(409).json({
                message: 'Email or username already registered'
            })
        }
        next(err); //next wywalic albo nie 
    }

};

const index = async ({ query }, res, next) => {
    let users = await User.find();
    // Staramy się NIGDY nie zwracac danych bezposrednio z bazy (bez filtracji pól), choc hasla za zaszyfrowane,
    // ich upubliczenienie to powazna luka bezpieczenstwa!
    users = users.map(user => user.view()); //schema method
    res.json(users);
};

const showMe = async (req, res, next) => {
    let { user } = req;       // w req znajduje sie tylko ID uzytkownika dolaczone przez middleware,
    // jesli potrzebujemy wiecej danych (email, username) mozemy je pobrac, albo w kontrolerze albo w middlewarze
    //res.json(user);
    try {
        const myUser = await User.findById(user.id);
        //myUser = myUser.map(user => user.view()); //filtracja
        res.json(myUser.view());
    } catch (err) {
        res.send(err.message);
    }
};

const deleteDB = async (req, res) => {
    const { id } = req.params;

    await User.findByIdAndDelete(id, (err, doc) => {
        if (err) return res.status(400).json({ error: err.message });
        if (!doc) return res.status(404).end();

        res.status(204).end();
    });
};

const login = async (req, res, next) => {
    const user = req.user;
    const token = sign(user);

    return res.json({
        user: user.view(),
        token
    })
};

module.exports = { create, deleteDB, login, index, showMe }


    // const user = new User({
    //     username: require.body.username,
    //     email: req.body.email,
    //     password: req.body.password
    // }); i hashowanie robic w routach lub pre w mongo 

