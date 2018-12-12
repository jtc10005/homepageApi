var express = require('express')
  , router = express.Router()

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });  
})


router.get('/test', function(req, res) {
  // res.send('Atest endpoint')
  res.json({ message: 'API Running' });  
})

module.exports = router