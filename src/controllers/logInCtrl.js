const { json, response } = require("express");

const login = (req, res) => {
    res.render('logIn');
}

const verify = async (req, res) => {
    await fetch("http://127.0.0.1:3000/users/login", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    .then(async (response) => {
        var t = await response.json();
        res.setHeader('Set-Cookie', 'token=' + t.token + ";" + 'id=' + t.id);
        res.redirect('/');
    })
    .catch((err) => {
        console.log(err);
    });
}

module.exports = {
    login,
    verify
}