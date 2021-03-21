let elementUl = document.getElementById("ul")
let elementBtn = document.getElementById("btn")
let elementInp = document.getElementById("inp")
let elementError = document.getElementById("error")

elementBtn.addEventListener("click", anadirTareas)
function anadirTareas() {
    if (elementInp.value === "") {
        elementError.innerHTML = "Your task cannot be empty"
        return
    } else {
        elementError.innerHTML = ""
        let newEl = document.createElement("li")
        newContent = document.createTextNode(elementInp.value);
        newEl.appendChild(newContent);
        document.body.insertBefore(newEl, elementUl);
        elementInp.value = ""
        elementInp.focus()
        let list = document.getElementBy("Click");
        list.removeChild();
        newEl.addEventListener("click")
        
    }
    
}

elementInp.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        anadirTareas()
    }
})

