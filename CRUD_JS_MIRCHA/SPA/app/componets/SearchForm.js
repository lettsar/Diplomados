export function SearchForm() {
  const $SearchForm = document.createElement("form");
  const $inputSearch = document.createElement("input");

  $SearchForm.classList.add("Search-form");
  $inputSearch.name="search";
  $inputSearch.type="search";
  $inputSearch.placeholder ="Busqueda"
  
  $SearchForm.appendChild($inputSearch)


  return $SearchForm;
}
