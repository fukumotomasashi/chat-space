$(function (){
  function buildHTML(message){
          var html = (message.image !== null)?
          `<ul class="content-messages">
            <li class="content-message">
              <p>
                ${ message.name }
                <span class="content-message__created-time">${ message.created_at }</span>
              </p>
              <p class="content-message__text">
                ${ message.boby }
              </p>
              <img class="massage-image" src="${ message.image }" alt="${ message.image }">
            </li>
          </ul>`
          :
          `<ul class="content-messages">
            <li class="content-message">
              <p>
                ${ message.name }
                <span class="content-message__created-time">${ message.created_at }</span>
              </p>
              <p class="content-message__text">
                ${ message.boby }
              </p>`;
        return html
    }
  $('#new_massage').on('submit', function(e){
    e.preventDefault();
    $('.content-body').animate({scrollTop: $('.content-body')[0].scrollHeight}, 'fast');
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
      $('#massage_boby').val('');
      $('#massage_image').val('');
      $(".message-btn").prop("disabled", false);
    })
    .fail(function(){
      alert('error');
    })
  });
});
