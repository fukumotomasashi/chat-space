$(function (){
  function buildHTML(message){
          var image = `${message.image}` != "null" ? `<img class="massage-image" src="${ message.image }">` : ``;
          var html =
          `<ul class="content-messages">
            <li class="content-message">
              <p>
                ${ message.name }
                <span class="content-message__created-time">${ message.created_at }</span>
              </p>
              <p class="content-message__text">
                ${ message.boby } <br>` + image + `
              </p>
            </li>
          </ul>`;
        return html
    }
  $('#new_massage').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.content-body').append(html);
      $('.content-body').animate({scrollTop: $('.content-body')[0].scrollHeight}, 'fast');
    })
    .fail(function(date){
      alert('error');
    })
    .always(function(data){
      $('#massage_boby').val('');
      $('#massage_image').val('');
      $(".message-btn").prop("disabled", false);
    })
  });
});
