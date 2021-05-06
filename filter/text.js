// alert("asmkmfndksjfds")\
  const serchFun=()=>{ 

let filter = document.getElementById('myInput') .value.toUpperCase();

let myTable = document.getElementById('myTable');
     let tr = myTable.getElementsByTagName('tr');

     for (var i=1; i<tr.length; i++){

          let td =tr[i].getElementsByTagName('td')[1];

          if (td) {
               let textVlaue =td.textContent||td.innerHTML;
         
          if (textVlaue.toUpperCase().indexOf(filter) > -1){
               tr[i].style.display="";
          }else{
               tr[i].style.display = "none";
          }
          
     }

 }
}  


