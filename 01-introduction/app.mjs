import express from "express";

import connectToDatabase from "./helpers.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hi there!</h2>");
});

await connectToDatabase();

app.listen(3000);

//  To build at command line
//  $ sudo docker build .

//  To run on port 3000 of localhost
//  $ sudo docker run -p 3000:3000 77837ce97af1

//  To stop the application from running
//  $ sudo docker stop relaxed_robinson
