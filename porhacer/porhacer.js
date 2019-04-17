const fs = require('fs')
const colors = require('colors')
let listadoPorHacer = [];
const guardardb = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar')
    })
};

const cargarBD = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {
    cargarBD()
    let poHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(poHacer)
    guardardb()
    return poHacer
}


const getListado = () => {
    cargarBD()
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarBD()
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    })
    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardardb()
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    cargarBD()
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion != descripcion
    })
    if (listadoPorHacer.length === nuevoListado.length) {
        return false
    } else {
        listadoPorHacer = nuevoListado
        guardardb()
        return true
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}