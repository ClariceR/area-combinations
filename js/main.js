const area = document.querySelector("#area-value");
const setMin = document.querySelector("#min-value");
const setStep = document.querySelector("#step-value");
const calculateButton = document.querySelector("#calc-btn");
const combinationsList = document.querySelector(".comb-list");

// Area Combinations Calculator
function areaCombinations(area, setMin, setStep) {
  let allCombinations = [];
  let combination = [];
  for (let i = setMin; i <= area; i += setStep) {
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
  return (number = Number(parseFloat(number).toFixed(2)));
}

// Format the array's areas into strings separated by 'x'
function formatCombinations(nestedArray) {
  let formatedArray = [];
  for (let array of nestedArray) {
    formatedArray.push(array.join(" x "));
  }
  return formatedArray;
}

// Click event for button
calculateButton.addEventListener("click", () => {
  addCard();
  // clearInput();
});

// Filter out sizes smaller than the min
const filterOutTooSmall = (allCombinations, setMin) => {
  filteredCombinations = [];
  for (let combination of allCombinations) {
    let index = allCombinations.indexOf(combination);
    console.log("index:" + index);
    if (combination[1] >= setMin) {
      filteredCombinations.push(combination);
      console.log("I need to be removed:" + allCombinations[index]);
    }
  }
  console.log(filteredCombinations);

  return filteredCombinations;
};

// refactoring addCard
const addCard = () => {
  combinationsList.innerHTML = "";
  let areaValue = parseFloat(area.value);
  let setMinValue = parseFloat(setMin.value);
  let setStepValue = parseFloat(setStep.value);
  const combArray = areaCombinations(areaValue, setMinValue, setStepValue);
  const filteredArray = filterOutTooSmall(combArray, setMinValue);
  const strCombArray = formatCombinations(filteredArray);
  createCard(strCombArray);
  combinationsList.classList.remove("hide");
};

// create card
const createCard = (strCombArray) => {
  for (let pair of strCombArray) {
    let cardStage = document.createElement("div");
    cardStage.classList.add("col");
    cardStage.classList.add("s5");
    // cardStage.classList.add("m5");

    const dimensions = pair.split(" x ");

    // Calculate stage size
    // Multiply dimensions to get better results

    cardStage.innerHTML = `
            <p>${pair}</p>
            <div class="card blue-grey darken-1"
              style="width: ${dimensions[1] * 10}px; height: ${
      dimensions[0] * 10
    }px;">
              <div class="card-content white-text center">
              </div>
            </div>`;
    combinationsList.append(cardStage);
  }
};

// clear and reset form
const clearInput = () => {
  area.value = "";
  setMin.value = 1;
  setStep.value = 1;
};
