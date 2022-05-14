function newItem(){
  // adding new list item to the list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert ('you must put something here!');
  } else {
    $('#list').append(li);
  }
  //crossing an item out from the list of items
  //toggle class function
  function crossOut() {
    li.toggleClass('strike');
  }
  // event to toggle strike on and off
  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });
  // adding delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  // event to delete a list item
  crossOutButton.on('click', deleteListItem);
  //adding delete class to remove display with class
  function deleteListItem() {
    li.addClass('delete')
  }
  // making items rearrangeable
  $('#lsit').sortable();
}
