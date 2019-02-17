const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {   title: 'Studio', hh2:'Live intensive', hh3: 'Alex Nik', hh1: 'INTERFACE SOUND DESIGN', time: '30 april с 13:00 до 16:00', place: 'Kyiv' });
});

module.exports = router;
