// Copyright (c) Han Verstraete 2020. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

"use strict"

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

async function init() {
    app.use(bodyParser.json());
    app.use(bodyParser.raw());
    app.use(bodyParser.text({ type : "text/*" }));
    app.disable('x-powered-by');
    
    app.use('/', express.static("function/public"), function (req, res) {
        res.send(JSON.stringify(req.body))
    })

    const port = process.env.http_port || 3000;

    app.listen(port, () => {
        console.log(`cr-express-service-static, listening on port: ${port}`)
    }); 
}

init()