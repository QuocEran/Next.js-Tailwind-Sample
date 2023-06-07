function getDaysFromCurrentDate(timeString: string): number {
  const currentTime = new Date();
  const compareTime = new Date(timeString);

  // Calculate the difference in milliseconds
  const timeDiff = compareTime.getTime() - currentTime.getTime();

  // Convert milliseconds to days
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return Math.max(0, daysDiff);
}

export default getDaysFromCurrentDate;
