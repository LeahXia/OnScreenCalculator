$(document).ready(function(){

    var inputNum;
    var inputNumArr=[];
    var operaterInp=[];
    var results=0;
    var operaterPressed=false;
    var didClearScreen=false;

    $(".numbers").click(function(){
        var screenValue = document.getElementById("screen")
        if (operaterPressed && !didClearScreen) {
          screenValue.innerHTML = "";
          operaterPressed = false;
          didClearScreen = true;
        }
        screenValue.innerHTML +=  $(this).val();
        var inputs = screenValue.innerHTML;
        inputNum = parseFloat(inputs);
        if(inputNum>999999999) alert("The number you put is too big.");
    });
<<<<<<< HEAD

    $(".operater").click(function(){
        operaterPressed = true;
        didClearScreen=false;
=======
    
    
        
    $("#add").click(function(){
        document.getElementById("screen").innerHTML= "123";
        inputNumArr.push(inputNum);
        document.getElementById("screen").innerHTML="";
        operaterInp.push("add");
        inputs="";
        console.log(inputNumArr);
    });
    
    $("#minus").click(function(){
        inputNumArr.push(inputNum);
        document.getElementById("screen").innerHTML="";
        operaterInp.push("minus");
        inputs="";
        console.log(inputNumArr);
    });
    
    $("#times").click(function(){
        inputNumArr.push(inputNum);
        document.getElementById("screen").innerHTML="";
        operaterInp.push("times");
        inputs="";
    });
    
    $("#divide").click(function(){
>>>>>>> d3489865f32671704b4aa63224ec137d0c640621
        inputNumArr.push(inputNum);
        var opValue = $(this).val();
        operaterInp.push(opValue);
    })

    $("#equalTo").click(function(){
        operaterPressed=true;
        didClearScreen=false;
        inputNumArr.push(inputNum);
        results = inputNumArr[0];
        var i=0;
        while (i<operaterInp.length){
            switch(operaterInp[i]){
                case "add":
                    results += inputNumArr[i+1];
                    break;
                case "minus":
                    results -= inputNumArr[i+1];
                    break;
                case "times":
                    results *= inputNumArr[i+1];
                    break;
                case "divide":
                    results /= inputNumArr[i+1];
                    break;
             }
                i++;
        }
        results = results.toFixed(6);
        document.getElementById("screen").innerHTML= results;
        inputNumArr=[];
        operaterInp=[];
        inputNum = results
    });

    $("#AC").click(function(){
       inputNumArr=[];
       operaterInp=[];
       results=0;
       document.getElementById("screen").innerHTML="";
    });

    $(".percent").click(function(){
      document.getElementById("screen").innerHTML = inputNum / 100;
    });
    $("#L").click(function(){
      document.getElementById("screen").innerHTML = "BY LEAH";
    });

});
