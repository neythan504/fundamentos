const fs = require ("fs");
const argv = require('yargs')
const express = require('express')
const app = express()
//melisimo, pille estos son los cursos, 3 pa no enredarme.
let cursosOf =[
	          {
		            nombre: 'Lenguages',
		            id: 001,
		            precio: 4000,
		            duracion: 32
	          },
	                {
	                 	nombre: 'Estadistica',
		                 id: 002,
		                 precio: 200000,
		                 duracion: 64
	                 },
	                     {
		                    nombre: 'practica vocal',
		                    id: 3,
		                    precio: 250000,
		                    duracion: 56
                    	},
];
// mostrar cursos, con un intervalo de 2 sg usando "setTimeout"
   function mostrarCursos(){
     var contador=1;
       for (let i=0; i<cursosOf.length; i++){
	      contador=contador+1;
		setTimeout( () => {
			console.log(`name:  ${cursosOf[i].nombre} id:  ${cursosOf[i].id} Costo:  ${cursosOf[i].precio}  y tiene una duracion de:  ${cursosOf[i].duracion}  horas.`);
		}, 2000*contador);
}
}
// inscripcion datos personales
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
 
//incripcion del estudiante (si el id esta incorrecto debe mostrar los cursos disponibles)

			.command('inscribir', 'matricular', opciones)
			.argv;
function inscribirCurso(){
	if (argv.id == 1 || argv.id == 2 || argv.id == 3 ){
		let texto = ` estudiante ${argv.nombre} con el numero de  documento  ${argv.cedula}  matriculado en el curso ${cursosOf[argv.id-1].nombre} con un costo de${cursosOf[argv.id-1].precio}`;
		//fs.writeFile('inscripcionCurso.txt' , texto, (err) => {
		//if(err) throw (err);
		console.log('has sido escrito con exito ');
	//});
	}else {
		console.log('Erro, Id de curso incorrecto');
		mostrarCursos();
	}
}

inscribirCurso();
app.get("/",function(req,res){ res.send(texto)
})
app.listen(3000)

//let estudiante = cursosOf.find(info => info.id == id)

