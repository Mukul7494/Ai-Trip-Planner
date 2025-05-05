import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  }, []);

  // Optional: add a listener if login can happen elsewhere
  useEffect(() => {
    const handleStorageChange = () => {
      setUser(localStorage.getItem("user"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="p-3 shadow-sm flex items-center justify-between px-5">
      <Link to="/">
        <img src="/logo.svg" alt="logo" />
      </Link>
      <div>{!user && <Button>Sign In</Button>}</div>
    </div>
  );
}
