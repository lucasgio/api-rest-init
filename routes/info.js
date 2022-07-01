const { Router } = require('express');
const { getInformation } = require("../controllers/informationControllers");


const route = Router();


route.get('/', getInformation );



module.exports = route;
