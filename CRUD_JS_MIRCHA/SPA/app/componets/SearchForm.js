export function SearchForm() {
  const d = document;
  const $SearchForm = document.createElement("form");
  const $inputSearch = document.createElement("input");

  $SearchForm.classList.add("Search-form");
  $inputSearch.name = "search";
  $inputSearch.type = "search";
  $inputSearch.placeholder = "Busqueda";
  $inputSearch.autocomplete = "off";

  $SearchForm.appendChild($inputSearch);

  if (location.hash.includes("#/search")) {
    $inputSearch.value = localStorage.getItem("wpSearch");
  }
  d.addEventListener("search", (e) => {
    if (!e.target.matches("input[type='search']")) return false;
    if (!e.target.value) localStorage.removeItem("wpSearch");
  });
  
  d.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) {
      e.preventDefault();
      localStorage.setItem("wpSearch", e.target.search.value);
      location.hash = `#/search?=${e.target.search.value}`;
    }
  });

  return $SearchForm;
}
