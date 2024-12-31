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

app.use((req, res) => {
    res.status(404).send({ message: `Route ${req.url} not found.` });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something broke!' });
});


app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));