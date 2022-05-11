const MissionCommander = require('./app/missionCommander')

const juan = new MissionCommander('Juan')
const pedro = new MissionCommander('Pedro')
const saul = new MissionCommander('Saul')

console.log(juan.name, pedro.name, saul.name)