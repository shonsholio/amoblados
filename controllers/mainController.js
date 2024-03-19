const controller = {};
const fs = require('fs');

controller.list = (req,res) => {
  res.render('main');
}

controller.cj = (req,res) => {
  const data = fs.readFileSync('./src/props.json', 'utf8');
  const info = JSON.parse(data);

  info.forEach(element => {
  });
  res.render('ciudad-jardin', {
    data: info
  }); 
}

controller.gr = (req,res) => {
  const data = fs.readFileSync('./src/props.json', 'utf8');
  const info = JSON.parse(data);

  info.forEach(element => {
  });
  res.render('granadillo', {
    data: info
  });
}

module.exports = controller ;