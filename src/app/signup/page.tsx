"use client";
import SignupForm from "@/app/signup/SignupForm";
import Image from "next/image";
export default function SignupPage() {
  return (
  <div className="relative flex items-center justify-center h-screen">
        <Image
          src="/images/signup.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
        <SignupForm />
  </div>
  );
}
