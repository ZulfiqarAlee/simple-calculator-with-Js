function btnData(e){
    let textInput = document.getElementById("textInput")
    let oldvalue = textInput.value;
    let lengthOfOldvalue = oldvalue.length;
    let lastChr= oldvalue[lengthOfOldvalue-1]
    let oprSymble=["=","-","/","*","."]
    if(oprSymble.includes(e)){
        if(oprSymble.includes(lastChr)){
            let removeLast = oldvalue.slice(0, -1)
            textInput.value=removeLast+e;

        }else{
    textInput.value =oldvalue+e;

        }
    }else{
        textInput.value =oldvalue+e;

    }
    
}
function equalBtn(){
    let textInput = document.getElementById("textInput")
    let oldvalue= eval(textInput.value);
    textInput.value= oldvalue;
}
 function clearAllBtn(){
    let textInput = document.getElementById("textInput");
    textInput.value = ''
 }
 function deletData(){
    let textInput = document.getElementById("textInput");
    textInput.value = textInput.value.substring(0, textInput.value.length -1)

 }