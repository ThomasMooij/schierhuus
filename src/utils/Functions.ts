"use client";

import { useEffect } from 'react';

export const slice = (str: string, num: number) => {
    return str.length > num ? str.slice(0, num) + "..." : str;
};

export const ScrollToReservation = () => {
  useEffect(() => {
    if (window.location.hash === '#reservation') {
      const reservePage = document.getElementById('reservation');
      if (reservePage) {
        setTimeout(() => {
          reservePage.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return null;
};
