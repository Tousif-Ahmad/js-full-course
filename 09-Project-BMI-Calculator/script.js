let form = document.querySelector("form");
// this use case will give you empty
// let height = parseInt(document.querySelector("#height").value);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let results = document.querySelector("#results");

//   height validation
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give valid height ${height}`;
    return

    // weight validation
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
    return
  } 

//   bmi calculation
   const bmi = (weight / ((height * height) / 10000)).toFixed(2);

// category
  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

//   show result
   results.innerHTML = `<span>BMI: ${bmi}</span><br><span>${category}</span>`;
});
