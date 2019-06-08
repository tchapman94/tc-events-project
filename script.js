var btnContainer = document.getElementById('button-container');

btnContainer.addEventListener('click', function(event) {
  var target = event.target;
  var tag = target.tagName;
  var bg = document.body.style.backgroundColor;
  var id = event.target.id;
  if (tag === 'BUTTON') {
    if (bg === id) {
      document.body.style.backgroundColor = 'white';
    } else{
      document.body.style.backgroundColor = id;
    }
    

   
    // delete option
    //document.querySelector('#colors > option[value=' + id + ']').remove();
    // delete button
    //event.target.remove();
  }
});

var colorSelect = document.getElementById('colors');

for (var i = 0; i < colors.length; i++) {
  var newOption = document.createElement('option');
  newOption.innerText = colors[i];
  newOption.value = colors[i];
  newOption.classList.add(colors[i])
  colorSelect.appendChild(newOption);

}

// colorSelect.addEventListener('change', function() {
//   document.body.style.backgroundColor = colorSelect.value;
// });
var addNewBtn = document.getElementById('add-new-btn')

addNewBtn.addEventListener('click', function(event){
  if(colorSelect.value){
    var createBtn = document.createElement('button');
    createBtn.innerText = colorSelect.value;
    createBtn.id = colorSelect.value
    btnContainer.appendChild(createBtn)
    
  }
})
var removeBtn = document.getElementById('remove-btn')

removeBtn.addEventListener('click',function(event){
  var bg = document.body.style.backgroundColor;
  if(bg && bg !== 'white'){
  document.getElementById(bg).remove();
  document.querySelector('option.'+bg).remove();
  document.body.style.backgroundColor = 'white';
 }
})