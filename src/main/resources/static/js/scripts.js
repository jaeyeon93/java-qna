$(".answer-write input[type=submit]").click(addAnswer);

function addAnswer(e) {
    // e는 클릭이 발생한 이벤트 정보가 들어가있다.
    e.preventDefault();
    console.log("addClick");

    var queryString = $(".answer-write").serialize();
    console.log("query is " + queryString);

    var url = $(".answer-write").attr("action");
    console.log("url is " + url);

    $.ajax({
        type : 'post',
        url : url,
        data : queryString,
        dataType : 'json',
        error : onError,
        success : onSuccess});
}

function onError() {
    console.log("error");
}

function onSuccess(data, status) {
    // data는 answer데이터
    console.log("success");
    console.log(data);
    var answerTemplate = $("#answerTemplate").html();
    var template = answerTemplate.format(data.writer.userId, data.formattedCreateDate, data.contents, data.id, data.id);
    $(".qna-comment-slipp-articles").prepend(template);
}

String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
    });
};