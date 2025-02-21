import { LogOut } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const menuItems = [
        { name: "Dashboard", icon: "https://imagizer.imageshack.com/img922/3395/lIwXN4.png", path: "/" },
        { name: "Property", icon: "https://imagizer.imageshack.com/img924/7654/dSV01X.png", path: "/property" },
        { name: "User", icon: "https://imagizer.imageshack.com/img922/8913/5Slupr.png", path: "/user" },
        { name: "Transactions", icon: "https://imagizer.imageshack.com/img922/190/9eoPX2.png", path: "/transactions" },
        { name: "Reviews", icon: "https://imagizer.imageshack.com/img924/331/oe2y8s.png", path: "/reviews" },
    ];

    return (
        <aside className="w-64 md:h-[640px] bg-[#043268] ml-6 my-6 text-white flex flex-col justify-between  rounded-[10px] p-4">
            <div>
                <div className="bg-white mt-8 p-2 rounded-lg">
                    <img src="https://imagizer.imageshack.com/img922/1659/zgvZBe.png" alt="Logo" className="mx-auto" />
                </div>
                <nav className="mt-6 space-y-4 text-lg ">
                    {menuItems.map((item, index) => (
                        <Link to={item.path} key={index} className="flex items-center space-x-2 w-full px-4 py-2 rounded hover:bg-blue-700">
                            <img src={item.icon} alt={item.name} className="w-6 h-6" />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </nav>
            </div>
            <button className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded text-orange-400 hover:bg-orange-600 hover:text-white">
                <LogOut size={16} /> Log Out
            </button>
        </aside>
    );
};

export default Sidebar;
