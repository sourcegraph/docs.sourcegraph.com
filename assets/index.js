//Index.js
// Docs site JS code

// Toggle search dropdown on button click
// Accepts the ID for the dropdown to toggle
function toggleDropdown(dropdownName) {
	const dropdown = document.getElementById(dropdownName);
	dropdown.classList.toggle("show");
}

// Listen for click outside search form to close dropdowns
document.addEventListener("click", (e) => {
	// Consts for dropdown areas (dropdown and button)
	const searchDropdownArea = document.getElementById("search-form");
	const versionDropdownArea = document.getElementById("version-form");

	// Const for navbar
	const navArea = document.getElementById("globalNav");

	// Consts for the actual dropdown element
	const searchDropdown = document.getElementById("searchDropdown");
	const versionDropdown = document.getElementById("versionDropdown");

	// Const for navbar checkbox
	const navState = document.getElementById("nav-state")

	let targetElement = e.target;

	do {
		if (targetElement == searchDropdownArea) {
			// If clicked area is in search dropdown remove all other dropdowns
			versionDropdown.classList.remove("show");
			return;
		} else if (targetElement == versionDropdownArea) {
			// If clicked area is in version dropdown remove all other dropdowns
			searchDropdown.classList.remove("show");
			return;
		} else if (targetElement == navArea) {
			// Because this is ran after the other two check it is okay to close all dropdowns
			// even through they are contained in nav.
			versionDropdown.classList.remove("show");
			searchDropdown.classList.remove("show");
			return;
		}
		targetElement = targetElement.parentNode;
	} while (targetElement);
	// If clicked area is outside all dropdowns remove all other dropdowns
	versionDropdown.classList.remove("show");
	searchDropdown.classList.remove("show");

	// Close dropdown on mobile
	navState.checked = false;

});

// Search provider
function searchDocsWithProvider(searchProvider) {
	if (searchProvider === "google") {
		location.href = 'https://www.google.com/search?ie=UTF-8&q=site%3Adocs.sourcegraph.com+ '+encodeURIComponent(document.getElementById('search').value);
		return false;
	} else if (searchProvider === "duckduckgo") {
		location.href = 'https://www.duckduckgo.com/site%3Adocs.sourcegraph.com '+encodeURIComponent(document.getElementById('search').value);
		return false;
	} else if (searchProvider === "sourcegraph") {
		location.href = 'https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph+file:doc/+file:%5C.md%24+'+encodeURIComponent(document.getElementById('search').value);
		return false;

	} else {
		console.error("searchProvider not valid")
	}

}
