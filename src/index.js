const express = require('express');
const currenciesRouter = require('./router/currenciesRouter');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(currenciesRouter);
app.listen(PORT, () => console.info('hey hey'));
