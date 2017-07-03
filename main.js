    function getInfoKeyword(item,deferreds) {
        return $.get(item)
    .done( function( data ) {
            data = item + " : " + data + ";";
            showResult(data);
        })
    .fail( function (data){
            deferreds.forEach(function(item,index){
                item.abort();
            });
    });
    }

    function showResult(msg) {
        $(".result").append("<p>" + msg + "</p>");
    }

    function showError(msg) {
        $(".error").html(msg);
    }

    var items = [
        "https://luong-phuc-mulodo.github.io/asynchronous-jquery-example.github.io/test_1.html",
        "https://luong-phuc-mulodo.github.io/asynchronous-jquery-example.github.io/test_2.html",
        "https://luong-phuc-mulodo.github.io/asynchronous-jquery-example.github.io/test_3.html"
    ];


    var deferreds = [];
    items.forEach(function(item,index){
        deferreds.push(getInfoKeyword(item,deferreds));
    });

    $.when.apply($, deferreds)
      .fail(function(data){
        showError("Data error");
      })
      .done(function(data) {
        showError("Successful");
      });
