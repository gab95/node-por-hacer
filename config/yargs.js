const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
}



const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'elimina una tarea ya registrada', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}