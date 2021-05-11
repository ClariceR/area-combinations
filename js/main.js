

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