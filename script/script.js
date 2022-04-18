function addValue(){
    var a = parseInt(document.getElementById("input_a").value, 10);
    var b = parseInt(document.getElementById("input_b").value, 10);

    var text = (a+b).toString();

    document.mycalculator.output.value = text;
}


function mulValue(){
    var a = parseInt(document.getElementById("input_a").value, 10);
    var b = parseInt(document.getElementById("input_b").value, 10);

    var text = (a*b).toString();
    document.mycalculator.output.value = text;
}

function divValue(){
    var a = parseInt(document.getElementById("input_a").value, 10);
    var b = parseInt(document.getElementById("input_b").value, 10);

    var text = (a/b).toString();
    document.mycalculator.output.value = text;
}
