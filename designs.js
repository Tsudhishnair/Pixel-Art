document.getElementById("sizePicker").addEventListener("submit",function makeGrid(e) {
 
    e.preventDefault();
    let table=document.getElementById("pixelCanvas");
    let height=document.getElementById("inputHeight").value;
    let width=document.getElementById("inputWidth").value;
    table.innerHTML = "";
    height.innerHTML = "";
    width.innerHTML ="";
    for(let i=0;i<height;i++)
    {
      let tr=document.createElement("tr");
      for(let j=0;j<width;j++)
      {
        let td=document.createElement("td");
        td.addEventListener('click',function c(event){
            let color= document.getElementById("colorPicker").value;
            event.target.style.backgroundColor=color;
        });
        tr.appendChild(td);
      }
      table.appendChild(tr);
    } 
  });
                                                    
  