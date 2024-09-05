import { useEffect } from "react";
import { useGetWeatherData, useSearchTokenStore } from "../store";
// import { debounce } from "../utils/debounce";

function SearchBar() {
  const getData = useGetWeatherData();

  const { searchToken, update } = useSearchTokenStore();

  useEffect(() => {
    // console.log(searchToken)
    // debounce(() => getData.execute(), 100)

    //Implementing the setInterval method
    const interval = setInterval(() => {
      getData.execute();
    }, 10000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [searchToken]);

  return (
    <div className="SearchEngine">
      <input
        type="text"
        className="city-search"
        placeholder="enter city name"
        name="query"
        value={searchToken}
        onChange={(e) => update(e.target.value)}
        // onKeyPress={handleKeyPress}
      />
      <button onClick={() => getData.execute()}>
        <i className="fas fa-search" style={{ fontSize: "18px" }}></i>
      </button>
    </div>
  );
}

export default SearchBar;
