

$(document).ready(function() {

  $('.store-btn').on('click', function(event){
    let titleValue = $('.input-field-title').val();
    let contentValue = $('.input-field-body').val();
    storage[titleValue] = contentValue;
    localStorage.setItem('storage', storage);
    //localStorage.setItem('contentValue', storage);

  });

  $('.get-btn').on('click', function(event){
    //console.log(localStorage.getItem('hrext'));
    let titleValue = localStorage.getItem('titleValue');
    let contentValue = localStorage.getItem('contentValue');

    $('.debug').html(`<p>${titleValue} ${contentValue}</p>`);

  });

  $('.delete-btn').on('click', function(event){
    // TODO add in a confirm
    // throw up .confirm window
    // capture result
    // test boolean to delete or not
    localStorage.removeItem('titleValue');
    localStorage.removeItem('contentValue');
    $('.debug').html(`<p>Items deleted</p>`);

  });
});
