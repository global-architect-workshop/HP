$(function() {
  $.ajax({
         url: "http://" + window.location.hostname + "/common/header.html",
         dataType: "html",
         cache: false,
         success: function(data, textStatus){
            $('#header').html(data);
         },
         error: function(xhr, textStatus, errorThrown){
            // エラー処理
            alert("ヘッダー情報が取得できませんでした。");
         }
    });
  
  $.ajax({
         url: "http://" + window.location.hostname + "/common/footer.html",
         dataType: "html",
         cache: false,
         success: function(data, textStatus){
            $('#footer').html(data);
         },
         error: function(xhr, textStatus, errorThrown){
            // エラー処理
            alert("フッター情報が取得できませんでした。");
         }
    });
  
});