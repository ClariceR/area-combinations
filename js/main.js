const area = document.querySelector("#area-value");
const setMin = document.querySelector("#min-value");
const setStep = document.querySelector("#step-value");
const calculateButton = document.querySelector("#calc-btn");
const combinationsList = document.querySelector(".comb-list");

// Area Combinations Calculator
function areaCombinations(area, setMin, setStep) {
    let allCombinations = [];
    let combination = [];
    for (let i = setMin; i <= area; i+=setStep) {
        height = i;
        combination.push(height);
        let width = area / height;
        console.log(width);
        if (isDecimal(area, height)) {
            width = limitDecimalPlaces(width);
        }
        console.log(width);
        combination.push(width);
        allCombinations.push(combination);
        combination = [];
    }
    return allCombinations;
}

// Check if number is decimal
function isDecimal(area, height) {
    return area % height !== 0;
}

// Deals with decimal numbers
function limitDecimalPlaces(number) {
        return number = parseFloat(number).toFixed(2);
}

// Format the array's areas into strings separated by 'x'
function formatCombinations(nestedArray) {
    let formatedArray = [];
    for (let array of nestedArray) {
        formatedArray.push(array.join(' x '));
    }
    return formatedArray;
}

// Click event for button - working!
calculateButton.addEventListener("click", () => {
    addCard();
    clearInput();
})

// add card
const addCard = () => {
    combinationsList.innerHTML = '';
    let areaValue = parseFloat(area.value);
    let setMinValue = parseFloat(setMin.value);
    let setStepValue = parseFloat(setStep.value);
    const combArray = areaCombinations(areaValue, setMinValue, setStepValue);
    const strCombArray = formatCombinations(combArray);
    for (let pair of strCombArray) {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add("col");
        cardDiv.classList.add("s6");
        cardDiv.classList.add("m5");
        cardDiv.innerHTML = `
            <div class="card blue-grey darken-1">
              <div class="card-content white-text center">
                <p>${pair}</p>
              </div>
            </div>`;
        combinationsList.append(cardDiv);
    }
    combinationsList.classList.remove('hide')
}

// clear and reset form
const clearInput = () => {
    area.value = '';
    setMin.value = 1;
    setStep.value = 1;
}

//add pairs to list
// const addPairs = () => {
//     combinationsList.innerHTML = '';
//     let areaValue = parseFloat(area.value);
//     let setMinValue = parseFloat(setMin.value);
//     let setStepValue = parseFloat(setStep.value);
//     const combArray = areaCombinations(areaValue, setMinValue, setStepValue);
//     const strCombArray = formatCombinations(combArray);
//     for (let pair of strCombArray) {
//         let li = document.createElement('li');
//         li.innerText = pair;
//         combinationsList.appendChild(li);
//     }
//     combinationsList.classList.remove('hide');
// }

