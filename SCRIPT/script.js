// let arreglo = ["","","",""];

// function allowDrop (ev){
//     ev.preventDefault();
// }

// function drag (ev){
//     ev.dataTranfer.setData("text",ev.target.id);
// }
// function drop(ev){
//     if(arreglo[parseInt(ev.target.id)]==""){
//         var data = ev.dataTranfer.getData ("text");
//         arreglo[parseInt(ev.target.id)]= data;
//         ev.target.appendChild(document.getElementById(data));
//     }
// }
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}