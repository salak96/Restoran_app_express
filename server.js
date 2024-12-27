const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models/index');
db.sequelize.sync();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRoutes);


app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));