// src/components/Layout.jsx
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

export default function Layout() {
  return (
    <>
      <Header />
      <Toaster />
      <main className="p-4">
        <Outlet /> {/* This is where nested routes will render */}
      </main>
    </>
  );
}
