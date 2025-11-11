import React from 'react'

function FilterSort(filter, handleFilterChange, sort, handleSortChange) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6 px-4 md:px-16 bg-white w-full">
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <h2 className="text-xl font-bold">
            Filter <span className="text-red-700">+</span>
          </h2>

          <div className="flex items-center gap-3">
            <label className="font-semibold">From:</label>
            <input
              type="number"
              name="from"
              value={filter.from}
              onChange={handleFilterChange}
              placeholder="₦0"
              className="border border-gray-400 rounded-md px-3 py-2 w-28 focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="font-semibold">To:</label>
            <input
              type="number"
              name="to"
              value={filter.to}
              onChange={handleFilterChange}
              placeholder="₦60,000"
              className="border border-gray-400 rounded-md px-3 py-2 w-28 focus:ring-2 focus:ring-black outline-none"
            />
          </div>
        </div>

        {/* Sort Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <h2 className="text-xl font-bold">
            Sort <span className="text-red-700">+</span>
          </h2>
          <select
            value={sort}
            onChange={handleSortChange}
            className="border border-gray-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-black outline-none"
          >
            <option value="lowToHigh">Price: Low → High</option>
            <option value="highToLow">Price: High → Low</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
  )
}

export default FilterSort