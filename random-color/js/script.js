const getColor = () => {
    // Function to generate Hex-code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode)
}
// event on click
document.getElementById("btn").addEventListener("click", getColor);

// initial call when page loaded
getColor();