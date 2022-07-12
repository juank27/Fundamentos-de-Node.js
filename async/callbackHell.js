function hola(nombre, miCallback) {
	setTimeout(function () {
		console.log('Hola, ' + nombre);
		miCallback(nombre);
	}, 1500);
}
function hablar(callbackHablar) {
	setTimeout(() => {
		console.log('Hablando...');
		callbackHablar();
	}, 1000);
}

function adios(nombre, otroCallback) {
	setTimeout(function () {
		console.log('Adios', nombre);
		otroCallback();
	}, 1000);
}
function conversacion(nombre, veces,callback) {
	if (veces > 0) {
		hablar(() => {
			conversacion(nombre, veces - 1, callback);
		});
	} else {
		adios(nombre, callback);
	}
}

// --
console.log('Iniciando proceso...');
hola('carlos',(nombre)=>{
	conversacion(nombre, 3, () => {
		console.log('Terminando proceso...');
	});
});

/*
console.log('Iniciando proceso...');
hola('Carlos', function (nombre) {
	hablar(()=>{
		hablar(()=>{
			adios(nombre, () => {
				console.log('Terminando proceso...');
			});
		});
	} );
});
*/