const parseInputs = (...input: string[]): number[] => {
  return input.map((str: string) => parseInt(str));
};

export default parseInputs;

