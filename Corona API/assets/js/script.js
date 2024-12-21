const btn = document.querySelector(".btn");
const inputElement = document.querySelector(".inputElement");

btn.addEventListener("click", getData);
function handleDataRequest() {
    getData();
}

btn.addEventListener("click", handleDataRequest);


function getData() {
    const country = inputElement.value.trim(); // Get the country from input
    if (!country) {
        document.querySelector(".errorMessage").innerHTML =
            "Please enter a valid country.";
        return;
    }

    // Fetch COVID-19 statistics
    fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Update the DOM with the fetched data
            document.querySelector(".activeCases").innerHTML = data.active;
            document.querySelector(".newCases").innerHTML = data.todayCases;
            document.querySelector(".recoveredCases").innerHTML = data.recovered;
            document.querySelector(".totalCases").innerHTML = data.cases;
            document.querySelector(".totalDeaths").innerHTML = data.deaths;
            document.querySelector(".totalTests").innerHTML = data.tests;
            document.querySelector(".errorMessage").innerHTML = ""; 
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            document.querySelector(".errorMessage").innerHTML =
                "Failed to fetch data. Please check the country name or try again later.";
        });
}

