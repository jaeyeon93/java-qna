// String.prototype.format = function() {
//   var args = arguments;
//   return this.replace(/{(\d+)}/g, function(match, number) {
//     return typeof args[number] != 'undefined'
//         ? args[number]
//         : match
//         ;
//   });
// };


$(".answer-write input[type=submit]").click(addAnswer);

function addAnswer(e) {
    // 서버로 바로 데이터가 들어가는것을 막는다.
    e.preventDefault();
    console.log("click me");

    var queryString = $(".answer-write").serialize();
    console.log("query : " + queryString);

    var url = $(".answer-write").attr("action");
    console.log("url : " + url);
    // action에 있는 url을 가져온다.

    $.ajax({
        type : 'post',
        url : url,
        data : queryString,
        dataType : 'json',
        error : onError,
        success : onSuccess()});
}

function onError() {
    
}

function onSuccess(data, status) {
    console.log(data);
}