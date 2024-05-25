import React from "react";

export default function page() {
  return (
    <div>
      <div
        className="hero h-60 sm:h-96"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl sm:text-6xl font-bold">
              Our Projects
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
