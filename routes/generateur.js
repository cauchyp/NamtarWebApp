var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

function getEffectsCountDB(effect_list){

  var db = new sqlite3.Database('spellGenerator.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
  
  var effect_count;
  db.all("SELECT count(*) FROM marque;", function (err, rows) {
    console.log('getnumber_of_distinct_Effects done');
    effect_count = rows;
  });

  // close the database connection
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
  return effect_count;
}

function getEffectListFromDB(effect_list){

  var db = new sqlite3.Database('spellGenerator.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
  
  db.all("SELECT * FROM marque;", function (err, rows) {
    console.log('getEffectListFromDB done');
    effect_list=rows;
  });

  // close the database connection
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
  return effect_list;
}

function generateRandomSkill(){

  var skill = {
    nom: undefined,
    type: undefined,
    effets:[],
    cout:undefined
  };

  var min=1;
  var max=5;
  var number_of_distinct_Effects = Math.floor(Math.random()*(max - min)) + min;

  var effect_list=[];
  var max_number_effect=getEffectsCountDB();

  for (i = 0; i<=number_of_distinct_Effects; i++){
    var min = 1
    var max = max_number_effect
    var effect_id =  Math.floor(Math.random()*(max - min)) + min;
    effect_list.push(effect_id);
  };

  getEffectListFromDB(effect_list);

  return effect_list;
};

router.get('/', function(req, res){
  res.render('generateur', { skill: "AJAX is great!"});
});
router.post('/', function(req, res){
  res.render('generateur', {skill: generateRandomSkill()});
});

module.exports = router;