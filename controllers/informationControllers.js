const {response, request } = require('express');

/**
 * Display all resource on json format
 *
 * @param req
 * @param res
 */


const getInformation = (req = request, res = response,next) => {
    try {
        const { q,api_key } = req.query;
        res.json({
            "msg": 'Hello, we are online,GET method',
            q,
            api_key
        });

    }catch (err) {
        next(err);
    }
}



module.exports = {
    getInformation,

}