import { CATALOG_URL } from "../../../config/api";
import fetchData from "../fetchData";

function getCatalogue() {
  return fetchData(CATALOG_URL);
}

export default getCatalogue;