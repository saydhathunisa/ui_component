
document.addEventListener("click", function () {
    const lengthInput = document.getElementById("length");
    const uppercase = document.getElementById("Uppercaseletter");
    const lowercase = document.getElementById("Lowercaseletter");
    const numbers = document.getElementById("Includenumbers");
    const symbols = document.getElementById("Includesymbols");
    const generateBtn = document.getElementById("generateBtn");
    const passwordDisplay = document.getElementById("password");
    const copyButton = document.getElementById('copy-message')


    function generatePassword() {
        const length = parseInt(lengthInput.value);
        const includeUppercase = uppercase.checked;
        const includeLowercase = lowercase.checked;
        const includeNumbers = numbers.checked;
        const includeSymbols = symbols.checked;

        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        let allChars = "";
        if (includeUppercase) allChars += uppercaseChars;
        if (includeLowercase) allChars += lowercaseChars;
        if (includeNumbers) allChars += numberChars;
        if (includeSymbols) allChars += symbolChars;

        if (allChars === "") {
            alert("Please select at least one character type.");
            return;
        }

        let password = " ";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];

        }

        passwordDisplay.textContent = password;

    }

    copyButton.addEventListener("click", function () {
        const passwordBox = document.getElementById("password");
        const textToCopy = passwordBox.innerText;

        navigator.clipboard.writeText(textToCopy).then(function () {
            alert("copied")
        });
    });

    generateBtn.addEventListener("click", generatePassword);
});
