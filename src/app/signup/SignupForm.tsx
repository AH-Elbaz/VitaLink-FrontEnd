"use client";
import { useState } from "react";
import { useAuth } from "@/app/features/auth/hooks/useAuth";
import Link from "next/link";
import { Listbox } from "@headlessui/react";
import type { User } from "@/app/models";

export default function SignupForm() {
  const { signup, loading, error } = useAuth();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    bloodType: "",
    targetSport: "",
    weight: "",
    fatPercentage: "",
  });

  const [formError, setFormError] = useState("");

  const validBloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const sports = ["Running", "Football"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleListboxChange = (name: "bloodType" | "targetSport", value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName.trim() || !form.lastName.trim()) {
      setFormError("Please enter your full name");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }
    if (!form.birthDate) {
      setFormError("Please select your birth date");
      return;
    }
    if (!validBloodTypes.includes(form.bloodType)) {
      setFormError("Please select a valid blood type");
      return;
    }
    if (!form.weight || parseFloat(form.weight) <= 0) {
      setFormError("Please enter a valid weight");
      return;
    }
    if (!form.fatPercentage || parseFloat(form.fatPercentage) < 0) {
      setFormError("Please enter a valid body fat percentage");
      return;
    }
    if (!form.targetSport) {
      setFormError("Please select your target sport");
      return;
    }

    setFormError("");

    const formattedData: User = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      password: form.password,
      birthDate: new Date(form.birthDate).toISOString(),
      weight: parseFloat(form.weight),
      bodyFatPercentage: parseFloat(form.fatPercentage),
      bloodType: form.bloodType,
      targetSport: form.targetSport,
    };

    signup(formattedData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/images/signup-bg.jpg')] bg-cover bg-center">
      <div className="relative shadow-lg rounded-2xl border-2 border-[var(--neon-blue)] w-[90%] sm:w-[420px] h-[600px] text-white p-6 backdrop-blur-[6px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00FFFF] scrollbar-track-transparent">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-[var(--neon-blue)] drop-shadow-[0_0_6px_var(--neon-blue)]">
            Sign Up
          </h2>
          <p className="text-gray-300 text-sm mt-1">
            Join <span className="text-[var(--neon-blue)] font-semibold">VitaLink</span> - Discover your body's inner data.
          </p>
          <div className="w-full h-[2px] bg-gradient-to-r from-[var(--button-gradient-start)] to-[var(--button-gradient-end)] mt-3 rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* First Name */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="firstName" className="text-sm font-semibold text-[var(--neon-blue)]">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="p-2 rounded-md border border-[var(--neon-blue)] bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--neon-blue)] outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="lastName" className="text-sm font-semibold text-[var(--neon-blue)]">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="p-2 rounded-md border border-[var(--neon-blue)] bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--neon-blue)] outline-none"
            />
          </div>

          {/* Password & Confirm Password */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm font-semibold text-[var(--neon-blue)]">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="p-2 rounded-md border border-[var(--neon-blue)] bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--neon-blue)] outline-none"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="confirmPassword" className="text-sm font-semibold text-[var(--neon-blue)]">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="p-2 rounded-md border border-[var(--neon-blue)] bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--neon-blue)] outline-none"
            />
          </div>

          {/* Birth Date */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="birthDate" className="text-sm text-[var(--neon-blue)] font-semibold">
              Birth Date
            </label>
            <input
              id="birthDate"
              type="date"
              name="birthDate"
              value={form.birthDate}
              onChange={handleChange}
              className="p-2 rounded-md border border-[var(--neon-blue)] text-white bg-transparent focus:ring-2 focus:ring-[var(--neon-blue)] outline-none cursor-pointer"
            />
          </div>

          {/* Blood Type */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm text-[var(--neon-blue)] font-semibold">Blood Type</label>
            <Listbox value={form.bloodType} onChange={(value) => handleListboxChange("bloodType", value)}>
              <div className="relative">
                <Listbox.Button className="p-2 w-full rounded-md border border-[var(--neon-blue)] bg-transparent text-white text-left cursor-pointer focus:ring-2 focus:ring-[var(--neon-blue)]">
                  {form.bloodType || "Select your blood type"}
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full bg-gray-800 rounded-md shadow-lg z-10 max-h-60 overflow-auto">
                  {validBloodTypes.map((type) => (
                    <Listbox.Option
                      key={type}
                      value={type}
                      className={({ active }) =>
                        `cursor-pointer select-none p-2 ${active ? "bg-[var(--neon-blue)] text-black" : "text-white"}`
                      }
                    >
                      {type}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Target Sport */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm text-[var(--neon-blue)] font-semibold">Target Sport</label>
            <Listbox value={form.targetSport} onChange={(value) => handleListboxChange("targetSport", value)}>
              <div className="relative">
                <Listbox.Button className="p-2 w-full rounded-md border border-[var(--neon-blue)] bg-transparent text-white text-left cursor-pointer focus:ring-2 focus:ring-[var(--neon-blue)]">
                  {form.targetSport || "Select your sport"}
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full bg-gray-800 rounded-md shadow-lg z-10 max-h-60 overflow-auto">
                  {sports.map((sport) => (
                    <Listbox.Option
                      key={sport}
                      value={sport}
                      className={({ active }) =>
                        `cursor-pointer select-none p-2 ${active ? "bg-[var(--neon-blue)] text-black" : "text-white"}`
                      }
                    >
                      {sport}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Weight & Fat Percentage */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="weight" className="text-sm text-[var(--neon-blue)] font-semibold">
              Weight (kg)
            </label>
            <input
              id="weight"
              name="weight"
              type="number"
              value={form.weight}
              onChange={handleChange}
              placeholder="Enter your weight"
              className="p-2 rounded-md border border-[var(--neon-blue)] bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--neon-blue)] outline-none"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="fatPercentage" className="text-sm text-[var(--neon-blue)] font-semibold">
              Body Fat (%)
            </label>
            <input
              id="fatPercentage"
              name="fatPercentage"
              type="number"
              value={form.fatPercentage}
              onChange={handleChange}
              placeholder="Enter your body fat %"
              className="p-2 rounded-md border border-[var(--neon-blue)] bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--neon-blue)] outline-none"
            />
          </div>

          <button
            disabled={loading}
            className="w-full py-2 mt-3 rounded-md font-semibold text-black bg-gradient-to-r from-[var(--button-gradient-start)] to-[var(--button-gradient-end)] hover:shadow-[0_0_12px_var(--neon-blue)] transition duration-300 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <p className="text-gray-300 text-center text-sm mt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-[var(--neon-blue)] hover:text-[var(--button-gradient-start)] transition">
              Log In
            </Link>
          </p>

          {/* Error Messages */}
          {formError && (
            <p className="text-red-400 text-sm text-center rounded-md py-1">{formError}</p>
          )}
          {error && (
            <p className="text-red-400 text-sm text-center rounded-md py-1">The user already exists</p>
          )}
        </form>
      </div>
    </div>
  );
}
