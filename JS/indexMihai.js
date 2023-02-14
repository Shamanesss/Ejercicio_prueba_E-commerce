const modelbox = document.getElementById('modelbox')

document.onmouseleave = function(){
    setTimeout(function(){
    }, 2000);
    modelbox.style.display = "block"

}

function closemodel() {
  modelbox.style.display = "none"
}