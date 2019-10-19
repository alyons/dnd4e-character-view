const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const path = require('path');
const auth = require('./auth');

const PORT = process.env.PORT || 8080;
const DIST_DIR = path.join(__dirname, 'dist');
const HTML_FILE = path.join(DIST_DIR, 'index.js');

const app = express();

auth(passport);

// Initialize Middleware
app.use(express.static(DIST_DIR));

app.use(passport.initialize());

app.use(cookieSession({
    name: 'session',
    keys: ['ThisIsABadPassword']
}));

// Define Routes

app.get('/', (req, res) => {
    if (req.session.token) {
        res.cookie('token', req.session.token);
        res.json({
            status: 'session cookie set'
        });
    } else {
        res.cookie('token', '');
        res.json({
            status: 'session cookie not set'
        });
    }
});

app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    req.session.token = req.user.token;
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE);
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
