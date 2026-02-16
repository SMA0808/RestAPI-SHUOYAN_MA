console.log("test it");

// RapidAPI key for Urban Dictionary
var key = "f8dea3837dmshda897bac49d9d2ep12221ejsn6ad156a77bef";

// Fetch definition from API and display on page
async function getDefinition() {
    var term = document.getElementById("termInput").value;
    if (!term) return;
    document.getElementById("definition").textContent = "Loading...";

    var url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + encodeURIComponent(term);

    var response = await fetch(url, {
        headers: {
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
            "x-rapidapi-key": key
        }
    });
    var jsonResponse = await response.json();
    console.log("valid json response:", jsonResponse);

    if (jsonResponse.list && jsonResponse.list[0]) {
        document.getElementById("definition").textContent = jsonResponse.list[0].definition;
    } else {
        document.getElementById("definition").textContent = "--";
    }
}
