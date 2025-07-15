

/**
 * Renders a list of items to the DOM using a provided template function.
 *
 * @param {Function} templateFn - Function that returns an HTML string for each item
 * @param {HTMLElement} parentElement - The element where the list should be inserted
 * @param {Array} list - Array of data items to render
 * @param {InsertPosition} [position="afterbegin"] - Position to insert the HTML
 * @param {boolean} [clear=false] - Whether to clear the parent element before inserting
 */
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  if (clear) {
    parentElement.innerHTML = "";
  }

  if (!list?.length) return;

  const htmlString = list.map(templateFn).join("");
  parentElement.insertAdjacentHTML(position, htmlString);
}

/**
 * Retrieves data from local storage.
 *
 * @param {string} key - The key to retrieve from local storage
 * @returns {any} The retrieved data
 */
export function getLocalStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(`Error parsing local storage item "${key}":`, error);
    return null;
  }
}

/**
 * Sets data in local storage.
 *
 * @param {string} key - The key to set in local storage
 * @param {any} data - The data to set
 */
export function setLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error setting local storage item "${key}":`, error);
  }
}

/**
 * Retrieves a parameter from the URL query string.
 *
 * @param {string} key - The key to retrieve from the query string
 * @returns {string|null} The retrieved parameter value
 */
export function getParam(key) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
}



