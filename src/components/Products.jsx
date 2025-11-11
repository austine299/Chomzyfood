import { useState } from "react";
import { Link } from "react-router-dom";
import FilterSort from "./FilterSort";
import Shop from "./Shop";

function Products({ onFilterChange, onSortChange }) {
  const [filter, setFilter] = useState({ from: "", to: "" });
  const [sort, setSort] = useState("lowToHigh");

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilter = { ...filter, [name]: value };
    setFilter(updatedFilter);
    onFilterChange?.(updatedFilter);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSort(value);
    onSortChange?.(value);
  };

  return (
    <section
      id="collection"
      className="flex flex-col items-center justify-center w-full sm:pl-24 sm:pr-24 pt-32"
    >
      <FilterSort
        filter={filter}
        handleFilterChange={handleFilterChange}
        sort={sort}
        handleSortChange={handleSortChange}
      />
      <Shop/>
      <div className="flex justify-end w-full">
        <Link
          to="/product"
          className="rounded-md hover:bg-slate-700 bg-slate-500 text-white font-bold pl-5 pr-5 pt-2 pb-2"
        >
          view all <i className="ri-arrow-right-long-line"></i>
        </Link>
      </div>
    </section>
  );
}

export default Products;
