// Assuming 'data' is an array of search results received from the backend API
const searchResultsDiv = document.getElementById('search-results');

// Clear any previous search results
searchResultsDiv.innerHTML = '';

// Loop through each search result and create HTML elements to display them
data.forEach(result => {
    // Create a new <div> element to contain each search result
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('search-result'); // Optionally, you can add a CSS class for styling

    // Create HTML elements to display information about the search result
    const titleElement = document.createElement('h3');
    titleElement.textContent = result.title; // Assuming each search result has a 'title' property
    resultDiv.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = result.description; // Assuming each search result has a 'description' property
    resultDiv.appendChild(descriptionElement);

    // Append the new <div> element containing the search result to the searchResultsDiv
    searchResultsDiv.appendChild(resultDiv);
});
