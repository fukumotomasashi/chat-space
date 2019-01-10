$(function (){
  $('#new_massage').on('submit', function(){
    var text = $('#massage_boby').val();
    var image = $('#masage_image').val();
    var formDate = new FormDate(this);
    var href = window.location.href

    $.ajax({
      url: 'href',
      type: 'post',
      date: formDate,
      dateType: 'json',
      processDate: false,
      contentDate: false
    })
  });
});
