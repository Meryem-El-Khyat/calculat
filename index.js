const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let result = false;

const operations = ["%", "*", "/", "-", "+", "="];
let output = "";

// fonction en click
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        // % remplace a /100
        output = eval(output.replace("%", "/100"));
        result = true;
    } else if (btnValue === "AC") {
        output = "";
        result = false;
    } else if (btnValue === "DEL") {
        // bouton en click supprimer
        output = output.toString().slice(0, -1);
        result = false;
    } else if(btnValue === '.'){//pour n'est pas double le point
        if(output.indexOf('.')=== -1){
            output += btnValue
        }
    } else {
        if (result) {
            output = output.toString(); // Utilisez le résultat précédent comme nouvelle entrée
            result = false;
        }
        if (output === "" && operations.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.value));
});




