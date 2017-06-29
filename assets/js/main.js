$(document).ready(function(){
  $('.new').submit(function () {

    // Agregar tarea
    if ( $('#new').val() !== '' ) {
      var item = $('input').val(),
      input = '<input type="text" value="' + item + '" />',
      edit = '<ol><li class="check fa fa-check"></li><li class="delete fa fa-times"></li></ol>';
      $('.list').append('<li class="item">' + input + edit + '</li>');
    };

    // limpiar input
    $('#new').val('');

    // Check y borrar
    $('#list .list .item ol li').on('click',function(){
      if ( $(this).hasClass('check') ) {
        newEdit = '<ol><li class="delete fa fa-times"></li></ol>';
        $(this).parent('ol').parent('.item').find('input').toggleClass($('.list').append('<div><li class="item">' + input + newEdit + '</li></div>'));
      } else if ( $(this).hasClass('delete') ) {
        $(this).parent('ol').parent('.item').remove();
      }
    });
    return false;

    function borrar(){
      $('.delete').click(function(){
        $(this).parent().remove();
      })
    }

 });
});
