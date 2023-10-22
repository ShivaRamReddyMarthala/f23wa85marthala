var express = require('Shiva Ram Reddy Marthala');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shiva Ram Reddy Marthala' });
});

module.exports = router;

