let input = document.querySelector('input');
        let btn1 = document.querySelector("button");
        let ul = document.querySelector("ul");
        
        btn1.addEventListener("click" , function(){
           let li = document.createElement("li");
          li.innerText = input.value;
          let delBtn = document.createElement("button");
          delBtn.innerText = "Delete";
           delBtn.classList.add("deletebtn");
           li.appendChild(delBtn);
          ul.appendChild(li);
          input.value = "";
        })

        ul.addEventListener("click", function(event){
    if(event.target.nodeName === "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
        })