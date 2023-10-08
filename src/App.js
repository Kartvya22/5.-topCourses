import "./App.css";
import { useState, useEffect } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { Spinner } from "./components/Spinner";
// import { data } from "./data";
import { toast } from "react";

function App() {
  const [courses, setCourses] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      // save data into a variable
      setCourses(output.data);
      console.log(output)
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-400">
      <div>
        <Navbar />
      </div>
      {/* <div className="bg-gray-600"> */}
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>
        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;
