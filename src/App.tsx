import { useEffect, useState } from 'react'
import './App.css'

import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import { useGetWeatherData } from './store';

// 39e5af8477da8f284c04dec133475953

function App() {
  const [query, setQuery] = useState("");


  const { loading, success, error, data } = useGetWeatherData();


  return (
    <div className="App">

      {/* SearchEngine component */}
      <SearchBar />

      {loading && (
        <>
          <br />
          <br />
          <h4>Searching..</h4>
        </>
      )}

      {error && (
        <>
          <br />
          <br />
          <span className="error-message">
            <span style={{ fontFamily: "font" }}>
              Sorry city not found, please try again.
            </span>
          </span>
        </>
      )}
      

      {success && data && data.condition && (
        // Forecast component
        <Forecast weather={data} />
      )}
    </div>
  );
}

export default App
