var miEmpresa = new Empresa("empresa1", 60);
var personaTrab = new Persona_Trabajdora("empleado1", "gomez", 60);
miEmpresa.contratar(personaTrab);
console.log(miEmpresa.mostrarEmpresa());
document.write(miEmpresa.mostrarEmpresa());