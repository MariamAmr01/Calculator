
function append(val)
{  
    var answer=document.getElementById("answer").innerHTML;
    answer.value+=val;
    if (val=="=") 
    { 
      if (answer==" ") {return " ";}
      else return eval(answer);
    }
    else
    {
    return val;
    }
}


function clearAll()
{  
    return " ";
}
