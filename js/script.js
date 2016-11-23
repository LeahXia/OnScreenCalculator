$(document).ready(function(){
    
    var inputs="";
    var inputNum;
    var inputNumArr=[];
    var operaterInp=[];
    var results=0;
    
    $(".numbers").click(function(){
        
        document.getElementById("screen").innerHTML+=  $(this).val();
        inputs += $(this).val();
        inputNum = parseFloat(inputs);
        if(inputNum>999999999){
        alert("The number you put is too big.")
        }
    });
    
    
        
    $("#add").click(function(){
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
        inputNumArr.push(inputNum);
        document.getElementById("screen").innerHTML="";
        operaterInp.push("divide");
        inputs="";
    });
    
    $("#equalTo").click(function(){
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
        document.getElementById("screen").innerHTML= results;
        inputNumArr=[];
        inputs="";
    });
    
    $("#AC").click(function(){
       inputNumArr=[];
       inputs="";
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