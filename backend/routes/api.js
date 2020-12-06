const express = require('express');
const router = express.Router();
const uuid = require('uuid').v4;
const validUrl = require('valid-url');
const shortCode = require('../middleware/uniqueUrlCode');

function createUuid() {
    return "uuid-" + ((new Date).getTime().toString(16) + Math.floor(1E7 * Math.random()).toString(16));
}

router.get('', function (req, res, next) {
    res.send(global.session);
});

router.get('/:shorterUrl', function (req, res, next) {
    try {
        if (global.session != null && global.session.length > 0) {
            let url = global.session.find(function (o) {
                return o.shorterUrl === req.params.shorterUrl;
            });
            if (url != null && url.id != null) {
                res.send(url);
            } else {
                throw ({ message: "url_not_found" });
            }
        } else {
            throw ({ message: "empty_url_list" });
        }
    } catch (err) {
        next(err);
    }
});

router.post('', function (req, res, next) {
    try {
        let id = createUuid();
        let fullUrl = req.body.fullUrl;
        if (validUrl.isUri(fullUrl)) {
            let shorterUrl = shortCode.generate();
            global.session.push({ id: id, fullUrl: fullUrl, shorterUrl: shorterUrl });
            let arrayLength = global.session.length - 1;
            res.send(global.session[arrayLength]);
        } else {
            throw ({ message: "invalid_url" });
        }
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', function (req, res, next) {
    try {
        if (global.session != null && global.session.length > 0) {
            var index = global.session.findIndex(function (o) {
                return o.id === req.params.id;
            })
            if (index !== -1) {
                global.session.splice(index, 1);
                res.status(204).send()
            } else {
                throw ({ message: "url_not_found" });
            }
        } else {
            throw ({ message: "empty url list" });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;