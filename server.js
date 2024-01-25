require('dotenv').config();
const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine');
const methodOverride = require('method-override');
const PORT = 3000;
const mongoConfig = require('./config/mongoConfig');
const captainsRoutes = require('./routes/captainsRoutes');

app.use(express.static('public'));
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/logs', captainsRoutes);

app.get('/', (req, res) => {
    res.send('<a href="/logs">Go to /logs</a>');
});

app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
    mongoConfig();
    
});