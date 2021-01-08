$(document).ready(function () {

    // Your code here...
    var operatorClicked = false;
    var calc = false; 

    function done(){
        $("#first-number").text("");
        $("#second-number").text("");
        $("#operator").text("");
        $("#result").text("");
        operatorClicked = false;
        calc = false;
    }

    $(".number").on("click", function () {
        if (calc == true){
            done()
        }
        if (operatorClicked == false) {
            $("#first-number").text($("#first-number").text() + $(this).text());

        }
        else {
            $("#second-number").text($("#second-number").text() + $(this).text());

        }

    })




    $(".equal").on("click", function () {
        var fn = parseInt($("#first-number").text());
        var sn = parseInt($("#second-number").text());
        var operator = $('#operator').text();
        calc = true;
        var math_it_up = {
            '+': function (fn, sn) { return fn + sn },
            '-': function (fn, sn) { return fn - sn },
            'x': function (fn, sn) { return fn * sn },
            '/': function (fn, sn) { return fn / sn },
            '^': function (fn, sn) { return Math.pow(fn,sn) }

        };
        console.log( math_it_up[operator](fn,sn));
        $("#result").text(math_it_up[operator](fn,sn))

    })







    $(".operator").on("click", function () {
        operatorClicked = true;
        $("#operator").text($(this).text());


    })
    $(".clear").on("click", function () {
     done();
    })


});
