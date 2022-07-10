//creando una funcion asincrona
function soyAsincrona() {
	setTimeout(() => {
		console.log('Estoy siendo asincrona');
	}, 1000);
}
console.log('Iniciando Proceso');
soyAsincrona();
console.log('Terminando Proceso');

//haciendo uso de callback
function soyAsincrona2(callback) {
	setTimeout(() => {
		console.log('Estoy siendo asincrona');
		callback();
	}, 1000);
}
console.log('Iniciando Proceso');
soyAsincrona2(() => {
	console.log('Terminando Proceso');
});

// --------------------------------------------------------------
function hola(nombre, callback) {
	setTimeout(() => {
		console.log('Hola, ' + nombre);
		callback(nombre);
	}, 1000);
}

function adios(name, callback) {
	setTimeout(() => {
		console.log('Adios, ' + name);
		callback();
	}, 1000);
}
console.log('Iniciando proceso...');
hola('Carlos', (nombre) => {
	adios(nombre, () => {
		console.log('Terminando proceso...');
	});
});
//Manera incorrecta de realizar una funcion asincrona
hola('Carlos', () => {});
adios('Carlos', () => {});