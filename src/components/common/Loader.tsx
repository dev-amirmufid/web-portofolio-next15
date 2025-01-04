"use client";

import React, { useEffect, useState } from "react";

export const Loader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading && (
      <div className="page-loader">
        <div className="loader"></div>
        <div className="shadow"></div>
      </div>
    )
  );
};
