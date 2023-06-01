document.addEventListener('DOMContentLoaded', function() {
    var myElement = document.getElementById('main-header');
    myElement.style.borderBottom = "solid 3px #000";
    var myElement1 = document.getElementsByClassName('list-group-item');
    for(var i=0;i<4;i++){
        myElement1[i].style.fontWeight = 'bold';
    }
    var myElement2 = document.getElementsByTagName('li');
    var item = document.querySelectorAll('li');
    item[1].style.color = 'green';
    var item2 = document.querySelector('.list-group-item:nth-child(3)');
    item2.style.visibility = "hidden";
    var item3 = document.querySelectorAll('li:nth-child(odd)');
    for(var i=0;i<item3.length;i++){
        item3[i].style.backgroundColor = 'green';
    }
    // Traversing The DOM
    var itemList = document.querySelector('#items');
    console.log(itemList.parentElement);
    console.log(itemList.lastElementChild);
    console.log(itemList.lastChild);
    console.log(itemList.firstChild);
    console.log(itemList.nextSibling);
    console.log(itemList.nextElementSibling);
    console.log(itemList.previousSibling);
    console.log(itemList.previousElementSibling);

    var newDiv = document.createElement('div');
    console.log(newDiv);
    newDiv.setAttribute('class','divelement');
    var someText = document.createTextNode('hello world');
    newDiv.appendChild(someText);
    var head = document.querySelector('#head');
    var newel = document.createElement('p');
    newel.appendChild(someText);
    head.appendChild(newel);
  });

   