document.querySelector('#button-show').addEventListener('click', traerDatos);
console.log("hola");

function traerDatos(){

    const imprimir = new XMLHttpRequest();
    imprimir.open('GET', 'rutina.json', true);
    imprimir.send();
    imprimir.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let myTable = document.getElementById('myTable');
            myTable.innerHTML = '';

            for(let i of datos){
                myTable.innerHTML += `
                    <tr class="gris">
                    <td>${i.dia1}</td>
                    <td>${i.ejercicio}</td>
                    <td>${i.series}</td>
                    <td>${i.repeticiones}</td>
                    </tr>
                    
                `
            }
        }
    }
}