const express = require('express');

const cors = require('cors');
app.use(cors());


app.use(express.json());
const mainRouter = require('./routes/index')
const app = express();

// Your routes and other configurations go here

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.use('/api/v1',mainRouter)
app.listen(3000);