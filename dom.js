document.addEventListener('DOMContentLoaded', function() {
    var myElement = document.getElementById('main-header');
    myElement.style.borderBottom = "solid 3px #000";
    var myElement1 = document.getElementsByClassName('list-group-item');
    for(var i=0;i<4;i++){
        myElement1[i].style.fontWeight = 'bold';
    }
    var myElement2 = document.getElementsByTagName('li');
    myElement2[4].style.backgroundColor = "grey"; 
    var item = document.querySelectorAll('li');
    item[1].style.color = 'green';
    var item2 = document.querySelector('.list-group-item:nth-child(3)');
    item2.style.visibility = "hidden";
    var item3 = document.querySelectorAll('li:nth-child(odd)');
    for(var i=0;i<item3.length;i++){
        item3[i].style.backgroundColor = 'green';
    }
  });

   