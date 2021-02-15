//la misma monda que en el app.js pero aqui por si me pierdo

const opciones = {
	id:{
		demand: true,
		alias: 'i'
	},
	nombre:{
		demand: true,
		alias: 'n'
	},
	cedula:{
		demand: true,
		alias: 'x',
	}

}
const argv = require('yargs');
			.command('inscribir', 'matricular', opciones);
			.argv
console.log(argv);


//let estudiante = cursosOf.find(info => info.id == id)
