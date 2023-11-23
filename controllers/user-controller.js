const express = require('express');
const axios = require('axios');
const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');


const loginFunc = async (req, res) => {
    const { alias, password } = req.body;
    const user = await knex('users')
        .where({ alias: alias, password: password })

    res.json({
        token: jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
            expiresIn: '24h',
        }),
    });

}











module.exports = {
    loginFunc,
};