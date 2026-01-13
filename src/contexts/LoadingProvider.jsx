"use client";
import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext(null);

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const setLoading = (loading) => {
    setIsLoading(loading);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}

