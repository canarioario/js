var miEmpresa = new Empresa("BAR LOS PAJARITOS", 60);
var personaTrab1 = new Persona_Trabajdora("juan", "gomez", 59);
var personaTrab2 = new Persona_Trabajdora("paco", "perez", 29);
// var personaTrab3 = new Persona_Trabajdora("jose", "lopez", 61);
var personaTrab4 = new Persona_Trabajdora("julio", "salinas", 47);
var personaTrab5 = new Persona_Trabajdora("gonzalo", "perla", 18);
miEmpresa.contratar(personaTrab1);
miEmpresa.contratar(personaTrab2);
// miEmpresa.contratar(personaTrab3);
miEmpresa.contratar(personaTrab4);
miEmpresa.contratar(personaTrab5);
console.log(miEmpresa.mostrarEmpresa());
document.write(miEmpresa.mostrarEmpresa());