function isAfterCurrentDate(timeString: string): boolean {
  const currentTime = new Date();
  const compareTime = new Date(timeString);

  return compareTime > currentTime;
}

export default isAfterCurrentDate;
