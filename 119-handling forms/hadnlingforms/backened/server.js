import express from 'express';
import cors from 'cors';
import fs from 'fs'; // 1. Import fs module

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    console.log(req.body);

    // 2. Append the form data to a file called 'data.json' or 'data.txt'
    fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err) => {
        if (err) {
            console.log("Error writing file:", err);
            return res.status(500).send("Error saving data");
        }
        res.send("Data saved to file successfully!");
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});