import express from 'express'
import fs from "fs";

const app = new express();
app.use(express.static('./build'))

app.get("/", (req, res) => {
    fs.createReadStream("./src/index.html").pipe(res)
});

app.listen(3000)
