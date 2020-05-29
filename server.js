var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//Require the handlebars express package
var handlebars = require('express-handlebars');
var bcrypt = require('bcryptjs');
const passport = require('passport');
const session = require('express-session');

const { isAuth } = require('./middleware/isAuth');
require('./middleware/passport')(passport);

const Contact = require('./models/Contact');
const User = require('./models/User');

app.use(express.static('public'));

app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    })
);

app.use(passport.initialize());
app.use(passport.session());
//We Use body Parser to structure the request into a format that is simple to use
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//use app.set to tell express to use handlebars as our view engine
app.set('view engine', 'hbs');
//Pass some additional information to handlebars to that is can find our layouts folder, and allow
//us to use the .hbs extension for our files.
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
}))

app.get('/login', (req, res) => { //links the login page to the server
    try {
        res.render('login', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/chartheart', (req, res) => { //links the chart page to the server
    try {
        res.render('chartheart', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/chartpower', (req, res) => { //links the chart page to the server
    try {
        res.render('chartpower', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/chartspeed', (req, res) => { //links the chart page to the server
    try {
        res.render('chartspeed', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/chartsteps', (req, res) => { //links the chart page to the server
    try {
        res.render('chartsteps', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/contents', (req, res) => { //links the contents page to the server
    try {
        res.render('contents', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/heart', (req, res) => { //links the heart page to the server
    try {
        res.render('heart', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/heartload', (req, res) => { //links the heart loader to the server
    try {
        res.render('heartload', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/index', (req, res) => { //links the index page to the server
    try {
        res.render('index', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/info', (req, res) => { //links the info page to the server
    try {
        res.render('info', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/infoloader', (req, res) => { //links the infomation loader to the server
    try {
        res.render('infoloader', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/loader', (req, res) => { //links the loading page to the server
    try {
        res.render('loader', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/loader2', (req, res) => {
    try {
        res.render('loader2', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/logoutloader', (req, res) => { //links the logout loading screen to the server
    try {
        res.render('logoutloader', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/power', (req, res) => { //links the power page to the server
    try {
        res.render('power', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/powerload', (req, res) => {
    try {
        res.render('powerload', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/prevheart', (req, res) => { //links the previous chart page to the server
    try {
        res.render('prevheart', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/prevpower', (req, res) => { //links the previous chart page to the server
    try {
        res.render('prevpower', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/prevspeed', (req, res) => { //links the previous chart page to the server
    try {
        res.render('prevspeed', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/prevsteps', (req, res) => { //links the previous chart page to the server
    try {
        res.render('prevsteps', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/speed', (req, res) => { //links the speed page to the server
    try {
        res.render('speed', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/speedload', (req, res) => {
    try {
        res.render('speedload', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/steps', (req, res) => { //links the steps page to the server
    try {
        res.render('steps', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})


app.get('/loader', (req, res) => {
    try {
        res.render('loader', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/loader2', (req, res) => {
    try {
        res.render('loader2', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/infoloader', (req, res) => {
    try {
        res.render('infoloader', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/logoutloader', (req, res) => {
    try {
        res.render('logoutloader', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/loader', (req, res) => {
    try {
        res.render('loader', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/stepsload', (req, res) => {
    try {
        res.render('stepsload', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/heartload', (req, res) => {
    try {
        res.render('heartload', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/speedload', (req, res) => {
    try {
        res.render('speedload', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/powerload', (req, res) => {
    try {
        res.render('powerload', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/incorrectlogin', (req, res) => {
    try {
        res.render('incorrectlogin', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/incorrectloader', (req, res) => {
    try {
        res.render('incorrectloader', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.get('/loginloader', (req, res) => {
    try {
        res.render('loginloader', { layout: 'main' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

//Dashboard view
app.get('/dashboard', isAuth, (req, res) => {
    try {
        Contact.find({ user: req.user.id }).lean()
            .exec((err, contacts) => {
                if (contacts.length) {
                    res.render('dashboard', { layout: 'main', contacts: contacts, contactsExist: true, username: req.user.username });
                } else {
                    res.render('dashboard', { layout: 'main', contacts: contacts, contactsExist: false });
                }
            });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

});

app.get('/signout', (req, res) => {
    //Logs the logged in user out and redirects to the sign in page
    req.logout();
    res.redirect('/views/login');
})

//POST Signup
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        //If user exists stop the process and render login view with userExist true
        if (user) {
            return res.status(400).render('login', { layout: 'main', userExist: true });
        }
        //If user does not exist, then continue
        user = new User({
            username,
            password
        });
        //Salt Generation
        const salt = await bcrypt.genSalt(10);
        //Password Encryption using password and salt
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        res.status(200).render('login', { layout: 'main', userDoesNotExist: true });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

app.post('/signin', (req, res, next) => {
    try {
        passport.authenticate('local', {
            successRedirect: '/loader', //sends the user here when they are successful in signing in
            failureRedirect: '/loginloader' //sends the user here when they are unsuccessful in signing in
        })(req, res, next)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

app.post('/addContact', (req, res) => {
    //Uses destructuring to extract name, email and number from the req
    const { name, email, number } = req.body;
    try {
        let contact = new Contact({
            user: req.user.id,
            name,
            email,
            number
        });

        contact.save()
        res.redirect('/dashboard?contactSaved');
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

mongoose.connect('mongodb://localhost:27017/handlebars', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => {
        console.log('connected to DB')//Upon Successful connection, we are using a Javasctipt .then block here to give us a message in in our console
    })
    .catch((err) => {
        console.log('Not Connected to DB : ' + err);//Upon unuccessful connection, we are using a Javasctipt .catch block here to give us a message in in our console with err displayed so that we can see what the issue is.
    });

//Listening for requests on port 3000
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
