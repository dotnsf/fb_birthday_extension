var birthday_msg = 'ハッピーハッピーバースデー♪';

$(function(){
 $("#events_birthday_view div:eq(0) ul li ._42ef ._6a ._6b:eq(1) div div:eq(1) textarea").each(function(){
  var textarea = $(this);
  textarea.val( birthday_msg );
 });
});
