const argv = require('yargs')
    .option('t',{
        alias:'table',
        type:'number',
        demandOption:true,
        describe:'El numero base de la tabla'

    })
    .option('l',{
        alias:'limit',
        type:'number',
        demandOption:true,
        describe:'El numero de veces a multiplicar'
    })
    .option('s',{
        alias:'show',
        type:'boolean',
        describe:'mostrar la tabla que se genero',
        default: false
    })
    .check((argvs,options)=>{
        if(isNaN(argvs.t)){
            throw Object.assign('Table debe ser un numero');
        }

        if(isNaN(argvs.l)){
            throw Object.assign('Limit debe ser un numero');
        }
        if(typeof argvs.s != "boolean"){
            throw Object.assign('show debe ser booleano');
        }

        return true;
    })
    .argv;


module.exports =argv;
