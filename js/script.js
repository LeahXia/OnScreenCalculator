$(document).ready(function(){

    var inputNum;
    var inputNumArr=[];
    var operaterInp=[];
    var results=0;
    var operaterPressed=false;
    var isScreenCleared=false;

    $(".numbers").click(function(){
      var screenValue = document.getElementById("screen")
      if (operaterPressed  && !isScreenCleared)  {
        screenValue.innerHTML = "";
        operaterPressed = false;
        isScreenCleared = true;
      }
      screenValue.innerHTML = (screenValue.innerHTML === "0") ? $(this).val() : screenValue.innerHTML + $(this).val()
      var input = screenValue.innerHTML
      inputNum = parseFloat(input);
      if(inputNum>999999999) alert("The number you put is too big.")
    });

    $(".operater").click(function(){
      operaterPressed = true;
      isScreenCleared = false;
      inputNumArr.push(inputNum);
      operaterInp.push($(this).val());
    })

    $("#equalTo").click(function(){
      operaterPressed = true;
      isScreenCleared = false;
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
      console.log('length', results.toString().length);
      results = (results.toString().length > 7) ? results.toFixed(6) : results
      document.getElementById("screen").innerHTML= results;
      inputNumArr=[];
      operaterInp=[];
      inputNum=results;
    });

    $("#AC").click(function(){
      inputNumArr=[];
      operaterInp=[];
      results=0;
      document.getElementById("screen").innerHTML="0";
    });

    $(".percent").click(function(){
      document.getElementById("screen").innerHTML = inputNum / 100;
    });
    $("#L").click(function(){
      document.getElementById("screen").innerHTML = "BY LEAH";
    });
});
