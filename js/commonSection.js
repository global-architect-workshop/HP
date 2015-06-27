function writeHeader(){
    alert("a")
    $.ajax({
        url: "../common/header.html",
        dataType: "html",
        cache: false,
        success: function(data, textStatus){
        alert("a")
        },
        error: function(xhr, textStatus, errorThrown){
           alert("b")

           // エラー処理
        }
    });
}
function writeHeader(){
    $.ajax({
        url: "../common/header.html",
        dataType: "html",
        cache: false,
        success: function(data, textStatus){
           
        },
        error: function(xhr, textStatus, errorThrown){
           // エラー処理
        }
    });
}