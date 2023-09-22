
const tab=document.getElementById("sampleTable");

function insert_Row() {
    //Write your code here
    let a=document.createElement("tr");
    a.innerHTML="<td>item1</td><td>item2</td>";
    tab.appendChild(a);
  
}
