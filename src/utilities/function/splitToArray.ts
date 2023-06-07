const splitToArray = (input: string | undefined) => {
  if (!input) {
    return [];
  }
  const arr = String(input).trim().split("\n");
  if (arr.length === 1 && arr[0] == "null") {
    return [];
  }

  return arr;
};

export default splitToArray;
