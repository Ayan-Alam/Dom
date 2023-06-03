document.addEventListener('DOMContentLoaded', function() {
   /* var myElement = document.getElementById('main-header');
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
    head.appendChild(newel);*/
    var form = document.getElementById('addForm');
    var itemList = document.getElementById('items');
    var filter = document.getElementById('filter');
    form.addEventListener('submit', addItem);
    itemList.addEventListener('click', removeItem);
    filter.addEventListener('keyup', filterItems);

function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value;
  var newItem2 = document.getElementById('item2').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem2));
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
  let editButton = document.createElement('button');
  editButton.className = 'btn btn-secondary float-right btn-sm mx-3 px-3';
  editButton.appendChild(document.createTextNode('Edit'));
  li.appendChild(editButton);
}


function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var itemName2 = item.firstChild.nextSibling.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
  });

   