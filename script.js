function loadAllTodos(){

    fetch("http://localhost:8080/todos").then(response => response.json())
        .then(function (data) {
            console.log(data);
            document.getElementById("todos").innerHTML = data;
        }).catch(function (err){
            console.warn("Someting went wrong.", err);
        })
}

loadAllTodos();