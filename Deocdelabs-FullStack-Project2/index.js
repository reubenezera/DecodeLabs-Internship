const express = require('express'); //represents the API I'm building
const app = express();
const PORT = 8080;

app.use(express.json())

//adds a GET endpoint to the item endpoint
app.get('/item', (req, res) => {
    res.status(200).send({
        message: 'this is the response for item',
    })
});

app.post('/item/:id', (req, res) => {
    const {id} = req.params;
    const {item} = req.body;

    if (!item) {
        res.status(418).send({
            message: 'item is required',
        })
    }

    res.send({
        message: `you sent "${item}" with the id ${id}`
    })
})

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)