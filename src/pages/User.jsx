import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import React from "react";
const users = new Array(10).fill({
    name: "Aisha Aremu",
    email: "femi@gmail.com",
    phone: "08133768472",
    license: "View / Pdf",
    propertyNumber: "#2252525",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
});

const User = () => {
    const [search, setSearch] = useState("");
    const [selectedUsers, setSelectedUsers] = useState([]);

    const toggleSelectAll = () => {
        if (selectedUsers.length === users.length) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(users.map((_, index) => index));
        }
    };

    const toggleSelectUser = (index) => {
        if (selectedUsers.includes(index)) {
            setSelectedUsers(selectedUsers.filter((i) => i !== index));
        } else {
            setSelectedUsers([...selectedUsers, index]);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}


            {/* Main Content */}
            <main className="flex-1 p-6">
                <h2 className="text-3xl font-semibold">User & Agent Management</h2>

                {/* Search and Buttons */}
                <div className="flex justify-between items-center my-4">
                    <div>
                        <button className="px-4 py-2 text-[#043268] bg-white border border-[#043268] rounded">User</button>
                        <button className="px-4 py-2  ml-2 rounded">Agent</button>
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
                    <div className="flex gap-2">
                        <button className="bg-blue-100 px-6 py-2 rounded-lg text-[#043268] font-semibold">Add +</button>
                        <button className="border px-6 py-2 border border-[#043268] text-[#043268] rounded-lg">Edit ✎</button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-4"><input type="checkbox" onChange={toggleSelectAll} checked={selectedUsers.length === users.length} /></th>
                                <th className="p-4 text-[#043268]">Name</th>
                                <th className="p-4 text-[#043268]">Email Address</th>
                                <th className="p-4 text-[#043268]">Phone</th>
                                <th className="p-4 text-[#043268]">License</th>
                                <th className="p-4 text-[#043268]">Property Number</th>
                                <th className="p-4 text-[#043268]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="border-t">
                                    <td className="p-4">
                                        <input
                                            type="checkbox"
                                            checked={selectedUsers.includes(index)}
                                            onChange={() => toggleSelectUser(index)}
                                        />
                                    </td>
                                    <td className="p-4 flex items-center gap-2">
                                        <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                                        {user.name}
                                    </td>
                                    <td className="p-4">{user.email}</td>
                                    <td className="p-4">{user.phone}</td>
                                    <td className="p-4 text-blue-600 cursor-pointer">{user.license}</td>
                                    <td className="p-4">{user.propertyNumber}</td>
                                    <td className="p-4 flex gap-2 text-red-500">
                                        <FaEdit className="cursor-pointer text-gray-600" />
                                        <FaTrash className="cursor-pointer" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default User;
