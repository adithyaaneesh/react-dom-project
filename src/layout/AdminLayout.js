import React from "react";
import { Outlet } from "react-router-dom";
// import Dashboard from "../components/Dashboard";

const AdminLayout = () => {
    return (
        <div style={{ display: "flex" }}>
        {/* <Dashboard /> sidebar + topbar */}
        <main style={{ flex: 1, padding: "20px" }}>
            <Outlet /> {/* nested admin pages */}
        </main>
        </div>
    );
}
export default AdminLayout;