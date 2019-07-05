import apiUrl from "../../../config/api";
import fetchData from "../fetchData";

function getCatalogue() {
  return fetchData(apiUrl);
}

export default getCatalogue;