// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    //node app crear -d "Pasear al perro"
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;
        //node app listar
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=======Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================'.green);
        }
        break;
        //node app crear -d "Pasear al perro"
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');
}