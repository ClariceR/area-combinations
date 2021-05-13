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
        if (isDecimal(area, height)) {
            width = limitDecimalPlaces(width);
        }
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
        return number = Number(parseFloat(number).toFixed(2));
}

// Format the array's areas into strings separated by 'x'
function formatCombinations(nestedArray) {
    let formatedArray = [];
    for (let array of nestedArray) {
        formatedArray.push(array.join(' x '));
    }
    return formatedArray;
}

// Click event for button
calculateButton.addEventListener("click", () => {
    addCard();
    clearInput();
})


// Filter out sizes smaller than the min
const filterOutTooSmall = (allCombinations, setMin) => {
    filteredCombinations = []
    for (let combination of allCombinations) {
        let index = allCombinations.indexOf(combination);
        console.log('index:' + index)
        if (combination[1] >= setMin) {
            filteredCombinations.push(combination);
            console.log("I need to be removed:" + allCombinations[index]);
        }
    }
    console.log(filteredCombinations);
 
    return filteredCombinations;
}

// add card
const addCard = () => {
    combinationsList.innerHTML = '';
    let areaValue = parseFloat(area.value);
    let setMinValue = parseFloat(setMin.value);
    let setStepValue = parseFloat(setStep.value);
    const combArray = areaCombinations(areaValue, setMinValue, setStepValue);
    const filteredArray = filterOutTooSmall(combArray, setMinValue);
    const strCombArray = formatCombinations(filteredArray);
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

