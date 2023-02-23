const myModalTitle = document.getElementById('staticBackdropLabel');
const myModalBody = document.getElementById('body');
const trabajo4 = document.getElementById('trabajo4');
const trabajo3 = document.getElementById('trabajo3');
const trabajo2 = document.getElementById('trabajo2');
const trabajo1 = document.getElementById('trabajo1');

trabajo4.addEventListener('click', () => {
	myModalTitle.innerHTML = 'Programador FreeLancer';
	myModalBody.innerHTML = `
        <div>
            <p>Empresa: Programador FreeLancer</p>
            <p>Ingreso: 01/10/2022</p>
            <p>Egreso: Actualidad</p>
            <p>Puesto: Programador FreeLancer Full Stack</p>
            <p>Tareas: Desarrollo y mantenimiento de sitios web tanto para uso comercial como personal</p>
        </div>
    `;
});

trabajo3.addEventListener('click', () => {
	myModalTitle.innerHTML = 'Pedidos Ya';
	myModalBody.innerHTML = `
        <div>
			<p>Empresa: Pedidos Ya</p>
			<p>Ingreso: 13/09/2019</p>
			<p>Egreso: 13/09/2022</p>
			<p>Puesto: Repartidor cadete</p>
			<p>Tareas: Reparto y cadeteria</p>
        </div>
    `;
});

trabajo2.addEventListener('click', () => {
	myModalTitle.innerHTML = 'PIXEL';
	myModalBody.innerHTML = `
        <div>
			<p>Empresa: PIXEL</p>
			<p>Ingreso: 01/01/2017</p>
			<p>Egreso: 01/01/2019</p>
			<p>Puesto: Chofer</p>
			<p>Tareas: Servicio de traslado de pacientes bajo tratamiento crónico</p>
			<p>Referencia: Frank 3517678363</p>
        </div>
    `;
});

trabajo1.addEventListener('click', () => {
	myModalTitle.innerHTML = 'Turquesa';
	myModalBody.innerHTML = `
        <div>
			<p>Empresa: Turquesa</p>
			<p>Ingreso: 01/05/2014</p>
			<p>Egreso: 31/12/2016</p>
			<p>Puesto: Encargado, Vendedor</p>
			<p>Tareas: Encargado, ventas, atención al público, cierre de 
			caja y cuentas bancarias</p>
			<p>Referencia: Walter 3515092248</p>
        </div>
    `;
});
