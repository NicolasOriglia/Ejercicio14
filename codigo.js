class Estudiante {
    materias = ['HTML', 'CSS', 'Javascript'];
    constructor(nombre){
        this.nombre = nombre;
    }

    obtenDatos(){
        let nombreAlumno = this.nombre;
        let asignaturas = this.materias;

        return{ nombreAlumno, asignaturas }
    }
}

const newEstudiante = new Estudiante('Nicolas');
console.log(newEstudiante);
console.log(newEstudiante.obtenDatos());