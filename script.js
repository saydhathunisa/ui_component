

const button = document.getElementById("length");
const input1 = document.getElementById("passwordLength");
const input2 = document.getElementById("Uppercaseletter");
const input3 = document.getElementById("Lowercaseletter");
const input4 = document.getElementById("Includenumbers");
const input5 = document.getElementById("Includesymbols");
button.addEventListener("click", function () {
    console.log({
        Length: parseInt(input1.value),
        Includeuppercaseletter: input2.checked,
        Includelowercaseletter: input3.checked,
        Includenumbers: input4.number,
        includesymbols: input5.checked,
    });
});





// const button = document.getElementById('passwordgenerator');
//const input1 = document.getElementById('passwordLength');
//const input2 = document.getElementById('Uppercaseletter');
//const input3 = document.getElementById('Lowercaseletter');
//const input4 = document.getElementById('Includenumbers');
//const input5 = document.getElementById('Includesymbols');


//button.addEventListener('click', function () {
//  console.log({
//     Length: parseInt(input1.value),
//     Includeuppercaseletter: input2.checked,
//    Includelowercaseletter: input3.checked,
//    Includenumbers: input4.number,
//   includesymbols: input5.checked,
//})
//})
