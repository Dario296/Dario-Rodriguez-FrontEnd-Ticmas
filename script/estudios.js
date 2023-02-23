const myModalTitle = document.getElementById('staticBackdropLabel');
const myModalBody = document.getElementById('body');
const secundaria = document.getElementById('secundaria');
const curso1 = document.getElementById('curso1');
const curso2 = document.getElementById('curso2');
const curso3 = document.getElementById('curso3');
const curso4 = document.getElementById('curso4');
const curso5 = document.getElementById('curso5');
const curso6 = document.getElementById('curso6');

secundaria.addEventListener('click', () => {
	myModalTitle.innerHTML = 'Escuela Secundaria';
	myModalBody.innerHTML = `
        <div>
            <h2>Escuela Secundaria IPET N°1 Presidente Roca</h2>
            <div>
                <p>Titulo: Tecnico electronico nivel medio</p>
                <p>Estado: Finalizado en 2013</p>
                <p>Promedio: 7,33</p>
            </div>
        </div>
    `;
});

curso1.addEventListener('click', () => {
	myModalTitle.innerHTML = 'Curso AES';
	myModalBody.innerHTML = `
        <div>
            <h2>Curso AES Diseño Web</h2>
            <div>
                <p>Titulo: Diseño Web</p>
                <p>Estado: Finalizado en 2011</p>
                <p>Promedio: 7,8</p>
            </div>
        </div>
    `;
});

curso2.addEventListener('click', () => {
	myModalTitle.innerHTML = 'Curso AES';
	myModalBody.innerHTML = `
        <div>
            <h2>Curso AES Reparacion mantenimiento y actualizacion de pc</h2>
            <div>
                <p>Titulo: Reparacion mantenimiento y actualizacion de pc</p>
                <p>Estado: Finalizado en 2014</p>
                <p>Promedio: 8,57</p>
            </div>
        </div>
    `;
});

curso3.addEventListener('click', () => {
	myModalTitle.innerHTML = 'Curso Coderhouse';
	myModalBody.innerHTML = `
        <div>
            <h2>Curso Coderhouse Desarrollo web</h2>
            <div>
                <p>Titulo: Desarrollo web</p>
                <p>Estado: Finalizado en 2022</p>
                <p>Promedio: 10</p>
            </div>
        </div>
    `;
});

curso4.addEventListener('click', () => {
	myModalTitle.innerHTML = 'Curso Coderhouse';
	myModalBody.innerHTML = `
        <div>
            <h2>Curso Coderhouse JavaScript</h2>
            <div>
                <p>Titulo: JavaScript</p>
                <p>Estado: Finalizado en 2022</p>
                <p>Promedio: 10</p>
            </div>
        </div>
    `;
});

curso5.addEventListener('click', () => {
	myModalTitle.innerHTML = 'Curso Coderhouse';
	myModalBody.innerHTML = `
        <div>
            <h2>Curso Coderhouse React</h2>
            <div>
                <p>Titulo: React</p>
                <p>Estado: Finalizado en 2022</p>
                <p>Promedio: 9</p>
            </div>
        </div>
    `;
});

curso6.addEventListener('click', () => {
	myModalTitle.innerHTML = 'Curso Coderhouse';
	myModalBody.innerHTML = `
        <div>
            <h2>Curso Coderhouse Backend</h2>
            <div>
                <p>Titulo: Backend</p>
                <p>Estado: Finalizado en 2023</p>
                <p>Promedio: 10</p>
            </div>
        </div>
    `;
});
