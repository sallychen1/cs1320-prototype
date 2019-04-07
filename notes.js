

 $('#bold').on('click', function() {
    document.execCommand('bold', false, null);
 });
 
 $('#italic').on('click', function() {
    document.execCommand('italic', false, null);
 });
 
 $('#underline').on('click', function() {
    document.execCommand('underline', false, null);
 });
 
 $('#align-left').on('click', function() {
    document.execCommand('justifyLeft', false, null);
 });
 
 $('#align-center').on('click', function() {
    document.execCommand('justifyCenter', false, null);
 });
 
 $('#align-right').on('click', function() {
    document.execCommand('justifyRight', false, null);
 });
 
 $('#list-ul').on('click', function() {
    document.execCommand('insertUnorderedList', false, null);
 });
 
 $('#list-ol').on('click', function() {
    document.execCommand('insertOrderedList', false, null);
 });
 
 $('#fonts').on('change', function() {
    var font = $(this).val();
    document.execCommand('fontName', false, font);
 });
 
 $('#size').on('change', function() {
    var size = $(this).val();
    $('.editor').css('fontSize', size + 'px');
 });
 
 let am = 0;
 function changeColor() {
     if (am == 0) {
         document.body.style.background = "linear-gradient(to bottom, #020111 10%,#3a3a52 100%)";
         am = 1;
     } else {
         document.body.style.background = "linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%)";
         am = 0;
     }
     
  }
 

  function download(filename, text) {
   var element = document.createElement('a');
   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
   element.setAttribute('download', filename);

   element.style.display = 'none';
   document.body.appendChild(element);

   element.click();

   document.body.removeChild(element);
}

document.getElementById("downloadbtn").addEventListener("click", function(){
   var text = document.getElementsByClassName("editor").value;
   var filename = "notes.txt";
   
   download(filename, text);
}, false);
