const resultElement = document.querySelector('#result');
document.querySelector('.createVariable').addEventListener('click', createVariable);
document.querySelector(".addTen").addEventListener("click", addTen);
document.querySelector(".differences").addEventListener("click", differences);
document.querySelector(".divide").addEventListener("click", divide);
document.querySelector(".jumanji").addEventListener("click", jumanji);
document.querySelector(".zebra").addEventListener("click", zebra);

function createVariable() {
    // Hide all other sections and show task1 section
    hideAll();
    document.querySelector('.createVariable__cont').classList.toggle('hidden');

    // Create a variable and console log the value
    let variableName = document.querySelector('#createVariable__name--input');
    let variableValue = document.querySelector('#createVariable__value--input');

    document.querySelector("#createVariable__btn").addEventListener("click", () => {
        resultElement.classList.remove('hidden');
        resultElement.innerHTML = `The variable ${variableName.value} = ${variableValue.value}`;
    });
}

function addTen() {
    // Hide all other sections and show task1 section
    hideAll();
    document.querySelector(".addTen__cont").classList.toggle("hidden");

    document.querySelector("#addTen__btn").addEventListener("click", () => {
        const inputValue = document.querySelector("#addTen__value--input");
        const parsedValue = parseInt(inputValue.value);

        // Test input for valid number of
        if (isNaN(parsedValue)) {
            alert("Please enter an integer");
            inputValue.value = "";
            inputValue.focus();
        } else {
            resultElement.classList.remove("hidden");
            // Create a variable, add 10 to it, and alert the value
            resultElement.innerHTML = `10 + ${parsedValue} = ${
                parsedValue + 10
            }`;
        }
    });
}

function differences() {
    // Hide all other sections and show task1 section
    hideAll();
    document.querySelector(".differences__cont").classList.toggle("hidden");

    document.querySelector("#differences__btn").addEventListener("click", () => {
        const values = document.querySelector('#differences__name--input');
        let valueArr = values.value.split(" ").map((num) => parseInt(num));

        if (valueArr.length <= 4) {
            let test = valueArr.map((num) => isNaN(num) ? 'NaN' : num);
            if (test.indexOf('NaN') === -1) {
                // Create a function that subtracts 4 numbers and alerts the difference
                resultElement.classList.remove("hidden");
                resultElement.innerHTML =
                    `The difference of:\n
                    ${valueArr[0]} - ${valueArr[1]} - ${valueArr[2]} - ${valueArr[3]}
                    = ${valueArr.reduce((total, b)  => (total - b))}`;
            } else {
                alert('Please only enter integers');
            }
        } else {
            alert('Please only enter 4 numbers separated by a space');
        }
    });
}

function divide() {
    // Hide all other sections and show task1 section
    hideAll();
    document.querySelector(".divide__cont").classList.toggle("hidden");

    document.querySelector("#divide__btn").addEventListener("click", () => {
        const values = document.querySelector('#divide__name--input');
        let valueArr = values.value.split(" ").map((num) => parseInt(num));

        if (valueArr.length <= 2) {
            let test = valueArr.map((num) => isNaN(num) ? 'NaN' : num);
            if (test.indexOf('NaN') === -1) {
                // Create a function that returns the remainder of two numbers
                resultElement.classList.remove("hidden");
                resultElement.innerHTML =
                    `The remainder of:\n
                    ${valueArr[0]} % ${valueArr[1]}
                    = ${valueArr[0] % valueArr[1]}`;
            } else {
                alert('Please only enter integers');
            }
        } else {
            alert('Please only enter 2 numbers separated by a space');
        }
    });
}

function jumanji() {
    // Hide all other sections and show task1 section
    hideAll();
    document.querySelector(".jumanji__cont").classList.toggle("hidden");

    document.querySelector("#jumanji__btn").addEventListener("click", () => {
        const values = document.querySelector("#jumanji__name--input");
        let valueArr = values.value.split(" ").map((num) => parseInt(num));

        if (valueArr.length <= 2) {
            let test = valueArr.map((num) => (isNaN(num) ? "NaN" : num));
            if (test.indexOf("NaN") === -1) {
                resultElement.classList.remove("hidden");
                resultElement.innerHTML = `${
                    valueArr[0] + valueArr[1] > 50
                        ? "Jumanji"
                        : valueArr[0] + valueArr[1]
                }`;
            } else {
                alert("Please only enter integers");
            }
        } else {
            alert("Please only enter 2 numbers separated by a space");
        }
    });
}

function zebra() {
    // Hide all other sections and show task1 section
    hideAll();
    document.querySelector(".zebra__cont").classList.toggle("hidden");

    document.querySelector("#zebra__btn").addEventListener("click", () => {
        const values = document.querySelector("#zebra__name--input");
        let valueArr = values.value.split(" ").map((num) => parseInt(num));

        if (valueArr.length <= 3) {
            let test = valueArr.map((num) => (isNaN(num) ? "NaN" : num));
            if (test.indexOf("NaN") === -1) {
                resultElement.classList.remove("hidden");
                if ((valueArr[0] * valueArr[1] * valueArr[2]) % 3 === 0) {
                    resultElement.innerHTML = "ZEBRA";
                } else {
                    resultElement.innerHTML =
                        `${valueArr[0]} * ${valueArr[1]} * ${valueArr[2]} % 3 =
                        ${valueArr[0] * valueArr[1] * valueArr[2] % 3}`;
                }
            } else {
                alert("Please only enter integers");
            }
        } else {
            alert("Please only enter 3 numbers separated by a space");
        }
    });
}

function hideAll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden'));
    document.querySelector('.inputFunctions').classList.remove('hidden');
    resultElement.classList.add('hidden');
    clearAll();
}

function clearAll() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = "");
    resultElement.innerHTML = "";
}

hideAll();
clearAll();