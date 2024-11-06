function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById("entrybutton");
  function text()
  {
    var textbox = document.getElementById("entryinput");
    document.getElementById("textoutput").innerHTML = textbox.value;
    alert("Jianfeng Xue: " + textbox.value);
  }
  button.addEventListener("click", text);
}
window.addEventListener('load', init);
