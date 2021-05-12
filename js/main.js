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
        combination.push(width);
        allCombinations.push(combination);
        combination = [];
    }
    return allCombinations;
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
    combinationsList.innerHTML = '';
    let areaValue = parseFloat(area.value);
    let setMinValue = parseFloat(setMin.value);
    let setStepValue = parseFloat(setStep.value);
    const combArray = areaCombinations(areaValue, setMinValue, setStepValue);
    console.log(combArray);
    const strCombArray = formatCombinations(combArray);
    console.log(strCombArray);
    for (let pair of strCombArray) {
        let li = document.createElement('li');
        li.innerText = pair;
        combinationsList.appendChild(li);
    }
    combinationsList.classList.remove('hide');
    clearInput();
})

// clear and reset form
const clearInput = () => {
    areaValue = '';
    setMinValue = 1;
    setStepValue = 1;
}