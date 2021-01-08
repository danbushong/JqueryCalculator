$(document).ready(function () {

    // Your code here...
    var operatorClicked = false;



    $(".number").on("click", function () {
        if (operatorClicked == false) {
            $("#first-number").text($("#first-number").text()+$(this).text());

        }
        else {
            $("#second-number").text($("#second-number").text()+$(this).text());

        }

    })


    function allOperators(){

        $(".equal").on("click", function () {
            
        }

        


    }


    $(".operator").on("click", function () {
    operatorClicked = true;
    $("#operator").text($(this).text());

    
})
    $(".clear").on("click", function () {
    $("#first-number").text($(this).text());
})


});
