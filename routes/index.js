// routes
const auth = require('./routes/auth');
app.use('/auth', auth);
// routes
const index = require('./routes/index');
const auth = require('./routes/auth');
const session = require('express-session');
const layouts = require('express-ejs-layouts');

app.use('/', index);
app.use('/auth', auth);
app.use(layouts);
app.set('layout', 'layouts/main.ejs');
app.set("layout extractStyles", true)

const express = require('express');
const router = express.Router();

// enabling session
app.use(session({
    secret: 'some_secret_key',
    cookie: {}
  }));
  
router.get('/', async (req, res) => {
    // check user session
    if (!req.session.user) {
        res.redirect('/auth/login');
    } else {
    res.send('ok');
    }});

module.exports = router;
