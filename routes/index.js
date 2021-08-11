var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World',
    user: 'Charles',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
    messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { heading: 'New Author' })
})

router.post('/new', function(req, res) {
  const newuser = req.body.authorname
  const newtext = req.body.authortext
  messages.push({
    text: newtext,
    user: newuser,
    added: new Date()
  })
  res.redirect('/')
})


module.exports = router;
