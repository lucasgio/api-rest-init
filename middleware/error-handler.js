const {response,request, } = require('express');


const errorHandler = (err,req=request,res=response) => {

    console.log( { err });

    res.status(500).json({
        message:`A error has occurred`
    });

}


module.exports = errorHandler;