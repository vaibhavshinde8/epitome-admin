import { useState } from "react";
import { LogOut, Search } from "lucide-react";
import React from "react";


const PropertyList = () => {
    const [search, setSearch] = useState("");
    const [properties, setProperties] = useState([
        { id: 1, name: "Signature Global Twin Tower DXP1", price: "₹ 4.86 - 8 Cr", image: "https://imagizer.imageshack.com/img923/1432/GlUzq4.png", selected: false },
        { id: 2, name: "Signature Global Twin Tower DXP2", price: "₹ 4.86 - 8 Cr", image: "https://imagizer.imageshack.com/img923/1432/GlUzq4.png", selected: false },
        { id: 3, name: "Signature Global Twin Tower DXP", price: "₹ 4.86 - 8 Cr", image: "https://imagizer.imageshack.com/img923/1432/GlUzq4.png", selected: false },
        { id: 4, name: "Signature Global Twin Tower DXP1", price: "₹ 4.86 - 8 Cr", image: "https://imagizer.imageshack.com/img923/1432/GlUzq4.png", selected: false },
        { id: 5, name: "Signature Global Twin Tower DXP2", price: "₹ 4.86 - 8 Cr", image: "https://imagizer.imageshack.com/img923/1432/GlUzq4.png", selected: false },
        { id: 6, name: "Signature Global Twin Tower DXP", price: "₹ 4.86 - 8 Cr", image: "https://imagizer.imageshack.com/img923/1432/GlUzq4.png", selected: false },
        { id: 7, name: "Signature Global Twin Tower DXP1", price: "₹ 4.86 - 8 Cr", image: "https://imagizer.imageshack.com/img923/1432/GlUzq4.png", selected: false },
        { id: 8, name: "Signature Global Twin Tower DXP2", price: "₹ 4.86 - 8 Cr", image: "https://imagizer.imageshack.com/img923/1432/GlUzq4.png", selected: false },
        { id: 9, name: "Signature Global Twin Tower DXP", price: "₹ 4.86 - 8 Cr", image: "https://imagizer.imageshack.com/img923/1432/GlUzq4.png", selected: false }
    ]);
    const [selectAll, setSelectAll] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    // Handle select all checkbox
    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setProperties(properties.map(property => ({ ...property, selected: newSelectAll })));
    };

    // Handle individual property selection
    const handleSelectProperty = (id) => {
        const updatedProperties = properties.map(property =>
            property.id === id ? { ...property, selected: !property.selected } : property
        );
        setProperties(updatedProperties);

        // Check if all properties are selected
        const allSelected = updatedProperties.every(property => property.selected);
        setSelectAll(allSelected);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-semibold">Properties</h2>
                    <button className="text-blue-600 underline">New Enquiry</button>
                </div>

                {/* Search and Filter */}
                <div className="flex items-center gap-4 bg-white p-4 shadow-md rounded-lg">
                    <div className="relative">
                        {/* Filter Button */}
                        <button
                            className="px-4 py-2 cursor-pointer text-[#043268] border border-[#043268] rounded flex items-center gap-2"
                            onClick={() => setShowFilter(!showFilter)}
                        >
                            Filter
                            <img src="https://imagizer.imageshack.com/img924/4538/Bqzbay.png" className="w-6 h-6" alt="" />
                        </button>

                        {/* Filter Dropdown */}
                        {showFilter && (
                            <div className="absolute z-50 top-12 left-0 w-60 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
                                <h3 className="text-lg font-semibold mb-2">Filter Options</h3>

                                <label className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    Price Range
                                </label>

                                <label className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    Location
                                </label>

                                <label className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    Bedrooms
                                </label>

                                <button
                                    className="mt-2 cursor-pointer w-full bg-[#043268] text-white rounded-lg py-2"
                                    onClick={() => setShowFilter(false)}
                                >
                                    Apply Filters
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center border border-blue-900 rounded-full w-full max-w-lg overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full h-12 px-4 py-2 text-gray-700 focus:outline-none"
                        />
                        <button className="bg-blue-900 cursor-pointer text-white py-2 px-8 mr-1 rounded-full">
                            Search
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <label htmlFor="selectAll">Select All</label>
                        <input
                            type="checkbox"
                            id="selectAll"
                            className="w-4 h-4"
                            checked={selectAll}
                            onChange={handleSelectAll}
                        />
                    </div>
                    <button className="border border-[#043268] cursor-pointer text-[#043268] px-4 py-2 rounded">Edit</button>
                </div>

                {/* Property Cards */}
                <div className="grid grid-cols-3 gap-6 mt-6">
                    {properties.map((property) => (
                        <div key={property.id} className="p-4 shadow-lg rounded-lg bg-white relative">
                            <input
                                type="checkbox"
                                className="absolute top-4 left-4 w-5 h-5"
                                checked={property.selected}
                                onChange={() => handleSelectProperty(property.id)}
                            />
                            <img src={property.image} alt={property.name} className="w-full h-60 object-cover rounded-md" />
                            <div className="mt-4">
                                <h3 className="text-xl font-normal">{property.name}</h3>
                                <p className="text-[#043268] font-semibold">{property.price}</p>
                                <button className="mt-4 w-full bg-[#043268] cursor-pointer text-white rounded-lg py-2">
                                    Edit Property Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default PropertyList;
