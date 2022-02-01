// import {getFlag} from './primeiro';// pode importar assim também
const getFlagValue =  require('./getFlag');//fazendo processo de trazer o modulo criado


console.log(`oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)