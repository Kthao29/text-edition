const express = require('express');
const app = express();

// deploy to port 3000
const PORT = process.env.PORT || 3000;


app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
