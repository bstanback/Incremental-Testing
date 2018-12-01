/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'; // 'enforce syntax use' makes code run well?


// [START app]
//required variables
const express = require('express');
const app = express();
var port = 8080 //const port = process.env.PORT || 8080;

var path = require('path');
//var js_scripts = require(__dirname+'/public/scripts/game.js');

//app.use(express.static(__dirname+'/public'))
app.use('/public', express.static(__dirname + '/public'));
//app.use(express.static(__dirname+'/public/scripts'));

//var html = require(__dirname +"/index.html")

//Routing. Show html page
app.get('/', function (req, res) {
  // '/' any page ending with '/' gets routed to the function
  // req = request for the page, res = the response
  res.status(200).sendFile(__dirname + '/new_index.html');

});

// Start the server
app.listen(port, function() {
  console.log(`App listening on port ${port}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
