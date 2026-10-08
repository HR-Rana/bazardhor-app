"use client";

import React, { useEffect, useState } from "react";

interface BanglaDateProps {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

export default function BanglaDate() {
  const [date, setDate] = useState();
  useEffect(() => {
    const date = new Date();
    const banglaDate = new Intl.DateTimeFormat("bn-BD", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

    setDate(banglaDate);
  }, []);

  return <span>{date}</span>;
}
