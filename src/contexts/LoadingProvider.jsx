"use client";
import React, { createContext, useContext, useState, useRef, useCallback } from "react";

const LoadingContext = createContext(null);

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);

  const setLoading = (loading) => {
    setIsLoading(loading);
  };

  const registerAudio = useCallback((element) => {
    audioRef.current = element;
  }, []);

  const playAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading, registerAudio, playAudio }}>
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

