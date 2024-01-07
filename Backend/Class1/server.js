const express= require('express');
const app = express();
app.listen(3000, () => {
    console.log("Server Started at Port 3000");
});

app.get('/', (request, response) => {
    response.send("Hello, jee kaise ho");
})

const bodyParser= require("body-parser");
app.use(bodyParser.json());

app.post('/api/cars', (request, response) => {
        const {name, brand} = request.body;
        console.log(name);
        console.log(brand);
        response.send("Car Submitted Successfully");
})