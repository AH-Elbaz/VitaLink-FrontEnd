"use client";
import Image from "next/image";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <Image
        src="/images/login.png"
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />
      <LoginForm />
    </div>
  );
}
