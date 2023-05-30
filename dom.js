document.addEventListener('DOMContentLoaded', function() {
    var myElement = document.getElementById('main-header');
    myElement.style.borderBottom = "solid 3px #000";
    var myElement1 = document.getElementsByClassName('list-group-item');
    for(var i=0;i<4;i++){
        myElement1[i].style.fontWeight = 'bold';
        myElement1[i].style.color = 'green';
    }
  });

   