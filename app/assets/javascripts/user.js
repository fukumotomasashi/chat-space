$(function() {
  var addUserList = $('#user-search-result')
  var removeUserList = $('#remove-user-list')
  function appendAddUserList (user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
                </div>`
    addUserList.append(html);
  }

  function appendNoAddUserList(){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">一致するユーザーはいません</p>`
    addUserList.append(html);
  }

  function appendRemoveUserList(user){
    var html = `<div class='chat-group-user clearfix js-chat-member' id=${ user.id }>
                  <input name='group[user_ids][]' type='hidden' value=${ user.id }>
                  <p class='chat-group-user__name'>${ user.name }</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
    removeUserList.append(html);
  }


  $("#user-search-field").on("keyup", function() {
    var input = $(this).val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: {keyword: input},
      dataType: 'json'
    })

    .done(function(users) {
      $("#user-search-result").empty();
        if (users.length !== 0) {
          users.forEach(function(user) {
          appendAddUserList(user);
          });
      }
      else {
        appendNoAddUserList()
      }
    })
    .fail(function() {
      alert("通信に失敗しました")
    })
  });

  $(document).on("click", ".user-search-add", function(){
    $(this).parent().hide();
      var user = {
        id: $(this).attr('data-user-id'),
        name: $(this).attr('data-user-name')
      }
      appendRemoveUserList(user)
  });

  $(document).on("click", ".user-search-remove", function() {
    $(this).parent().remove();
  });
});
