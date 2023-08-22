const inputsAreValid = (...input: number[]): boolean => {
  return input.every((num: number) => typeof num === "number" && !isNaN(num));
};

export default inputsAreValid;


