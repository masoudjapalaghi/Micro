import { NameContextProvider } from "shared-context_shared-library";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const ShowData = React.lazy(() => import("app2/ShowData"));
const SearchBar = React.lazy(() => import("app3/SearchBar"));

const App = () => {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the URL of the API you want to fetch
    const apiUrl = `https://6242faeed126926d0c5a2a36.mockapi.io/Bornadel/lists?name=${filterName}`;
    setLoading(true);
    // setData([]);

    // Use the fetch function to make the API call
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, [filterName]); // Empty dependency array to run this effect only once
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="main">
      <div>
        <NameContextProvider.Provider
          value={{
            data,
            filterName,
            setFilterName,
          }}
        >
          <div className="header">
            <React.Suspense fallback="Loading Name">
              <SearchBar />
            </React.Suspense>
            <h2>Main shell(fetch data)</h2>
          </div>
          <React.Suspense fallback="Loading Name">
            <ShowData />
          </React.Suspense>
        </NameContextProvider.Provider>
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            align-items: self-end;
            justify-content: center;

            padding: 60px 0;
          }
          .header h2 {
            flex: 1;
            text-align: right;

            text-align: start;
            font-size: 72px;
            color: #1a7772;
            background-image: -webkit-linear-gradient(
              0deg,
              #1a7772 38%,
              #9ffdc5 92%,
              #4dea11 77%
            );
            background-clip: text;
            -webkit-background-clip: text;
            text-fill-color: transparent;
            -webkit-text-fill-color: transparent;
          }
          .main {
            max-width: 100vw;
            // height: 50vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #2b4162;
            background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
          }
        `}
      </style>
    </div>
  );
};

export default App;
