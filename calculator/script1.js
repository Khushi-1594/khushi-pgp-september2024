const inputE = document.getElementById('calculator-screen');
const buttons = document.querySelectorAll('button');
let internalValue= '';

function validString(str){
    if((str.charAt(0) === '-' || (str.charAt(0)>= "0" && str.charAt(0) <= "9")) && (str.charAt(str.length-1)>='0' && str.charAt(str.length-1)<='9')){
        return true
    }
    else{
        return false
    }
} 

for (let button of buttons) {
    button.addEventListener('click', function (e) {
        const text = e.target.innerText;

        if (text === 'RESET') {
            inputE.value = '';
            internalValue= '';
        } 
        else if (text === '=') {
            try {
                if(validString(internalValue)){
                    let result = eval(internalValue);

                    if(result % 1 !== 0){
                        result = result.toFixed(3);
                    }
                    inputE.value= result;
                    internalValue = result;
                }
                else{
                    throw new Error('Invalid input')
                }
            } catch {
                inputE.value = 'Error';
                internalValue= '';
            }
        } 
        else if (text === 'DEL') {
            inputE.value = inputE.value.slice(0, -1);
        } 
        else {
            if(text === 'X'){
                internalValue += '*';
                inputE.value += 'X';
            }
            else{
                inputE.value += text;
                internalValue += text;
            }
        }   
    });
}
