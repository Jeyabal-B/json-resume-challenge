fetch("data.json")
.then(function(response){
    return response.json();
})
.then(function(info){
    let placeholder = document.querySelector("#title");
    let out = '${info.title}';
    
    placeholder.innerHTML = out;
})