"use client";
export default function TimeNow() {
  const currentDate = new Date();
  const utcDate = currentDate.toISOString().slice(5, 10);
  const utcTime = currentDate.toISOString().slice(11, 19);
  return <>{`Now: ${utcDate} ${utcTime} UTC`}</>;
}
