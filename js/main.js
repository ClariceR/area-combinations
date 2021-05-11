const areaValue = document.querySelector("#area-value");
const setMin = document.querySelector("#min-value");
const setStep = document.querySelector("#step-value");
const calculateButton = document.querySelector("#calc-btn");
const combinationsList = document.querySelector(".comb-list");

// Area Combinations Calculator
function areaCombinations(area, setMin = 1, setStep = 1) {
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
    const area = areaValue.value;
    // const setMin = setMin.value;
    // const setStep = setStep.value;
    const combArray = areaCombinations(area);
    const strCombArray = formatCombinations(combArray);
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
    areaValue.value = '';
    setMin.value = '';
    setStep.value = '';
}