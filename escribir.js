const escritura = document.getElementById('escribir')

const maquinaDeEscribir = (text = '', tiempo = 200, etiqueta = '') => {
	let arrayCaracteres = text.split('')
	etiqueta.innerHTML = ''
	let cont = 0
	let escribir = setInterval(function(){
		etiqueta.innerHTML += arrayCaracteres[cont]
        cont++
        if (cont === arrayCaracteres.length) {
            etiqueta.innerHTML = ''
            cont = 0
        }
    }, tiempo)
}

maquinaDeEscribir('Desarrollador Full-Stack y Diseñador Web.    ',100,escritura)