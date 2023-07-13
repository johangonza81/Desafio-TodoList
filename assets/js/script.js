


const arregloNew =[
    { id:1, nombreTareas:"sacar al perro",id2:false},
    { id:2, nombreTareas:"ir al banco",id2:false},
    { id:3, nombreTareas:"salir con los niños",id2:false}
];




function agregarObjeto(){
const datoIngreso = document.getElementById("input1");
const DATOINGRESO2 = datoIngreso.value.trim();
const numeroAleatorio = Math.floor(Math.random() * 1001);



if (DATOINGRESO2 === "" ) {
    alert("Ingrese un valor valido ");
    datoIngreso.value = "";
    datoIngreso.focus();
}else if  (!isNaN(DATOINGRESO2) ) {
    alert("Formato numerico no es permitido ");
    datoIngreso.value = "";
    datoIngreso.focus();   
}else{   
const objeto = { 
id: numeroAleatorio,
nombreTareas: DATOINGRESO2, 
id2 : false
};
    
arregloNew.push(objeto);
datoIngreso.value = "";
actualizaTareas();
contadorDeTareas();
datoIngreso.focus(); 

}

}

function eliminarObjeto(index) {
    arregloNew.splice(index, 1);
    actualizaTareas();
    contadorDeTareas();   
};


function toggleid2(index) {
   arregloNew[index].id2 =! arregloNew[index].id2;
   contadorDeTareas();
};




function contadorDeTareas() {
    const cantidadTarea = document.getElementById('dato1'); 
    const tareaRealizada = document.getElementById('dato2');

    const contador= arregloNew.length;
    const tareasHechas = arregloNew.filter(task => task.id2).length;

    cantidadTarea.textContent = contador;
    tareaRealizada.textContent = tareasHechas;
};


function mostrarArreglo(task, index) {
   return`
        <tr>
            <td>${task.id}</td>
            <td>${task.nombreTareas}</td>
            <td>
                <input type="checkbox" ${task.id2 ? 'checked' : ''} onchange="toggleid2(${index})">
            </td>
            <td>
                <button onclick="eliminarObjeto(${index})">Eliminar</button>
            </td>
        </tr>
    `;
}

function actualizaTareas() {
    const resultado1 = document.getElementById("dato4");
    resultado1.innerHTML = '';
    arregloNew.forEach((task, index) => {
        const muestraRow = mostrarArreglo(task, index);
        resultado1.innerHTML += muestraRow;
    });
}



window.onload = () => {
    actualizaTareas();
    contadorDeTareas();
};



        