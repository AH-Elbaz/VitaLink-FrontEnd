"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default function DashboardPage() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      try {
        const decoded = jwtDecode<any>(token);
        const extractedName =
          decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] ||
          "User";
        setName(extractedName);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Welcome, {name || "User"} 👋 ادعيلنا يوساب يطلع داتا
      </h1>
 
    </div>
  );
}
