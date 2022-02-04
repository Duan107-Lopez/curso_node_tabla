
const {create_multiplication_file} = require('./helpers/multiplicar');

const argv = require('./config/yargs');

// const[,,table = 'table = 3',limit = 'limit = 10'] = process.argv;
// const [,result_table] = table.split('=');
// const[,result_limit] = limit.split('=');


create_multiplication_file(argv['table'] ,argv['limit'], argv['show'])
.then(file => console.log(file))
.catch(err => console.log(err));
