const fs = require('fs');
const colors = require('colors');


const createTable = (table , limit)=>{
    console.log('**********************');
    console.log(`*    Tabla del ${table}     *`);
    console.log('**********************');

    let result_table = [];
    let salida = '';

    for (let index = 1; index <= limit; index++) {

        let result = table * index;
        let multiplication = `${table} x ${index}`;
    
        salida += `${multiplication} = ${result} ${index !=limit ? '\n':''}`;
        let objectFinal = {
        }

        objectFinal[multiplication] = result
        result_table.push(objectFinal);
    }
    
    fs.writeFileSync(`Tabla_${table}.txt`, salida);
    console.log(result_table);
    console.log(salida);
    console.log(`Se creo correctamente el archivo de la tabla del ${table}`);

}

const create_multiplication_file = async( table, limit,show)=>{
    try{

        let result_table = [];
        let salida = '';
    
        for (let index = 1; index <= limit; index++) {
            let result = table * index;
            let multiplication = `${table} x ${index}`;
        
            salida += `${multiplication} = ${result} ${index !=limit ? '\n':''}`;
            let objectFinal = {
            }
    
            objectFinal[multiplication] = result
            result_table.push(objectFinal);
        }

        if(show){
            console.log('**********************'.rainbow);
            console.log(`*    Tabla del ${table}     *`);
            console.log('**********************'.rainbow);
            console.log(salida);
        }

        fs.writeFileSync(`./files/Tabla_${table}.txt`, salida);
        fs.writeFileSync(`./files/Tabla_arreglo${table}.txt`, JSON.stringify(result_table));

        return `Se creo correctamente el archivo de la tabla del ${table}`;

    }catch(err ){
        console.log(err);
        process.exit()
    }
}

module.exports = {
    createTable,
    create_multiplication_file
}