import inputsAreValid from './utils/input-are-valid';
import parseInputs from './utils/parse-inputs';

interface AlertService {
  hideErrors(): void;
  handleAdditionError(inputs: string[], numbers: number[]): void;
}

interface ComponentService {
  onClick(callback: () => void): void;
  getInputs(): string[];
  setResult(result: number | string): void;
}

export const run = (alertService: AlertService, componentService: ComponentService): void => {
  alertService.hideErrors();
  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA + numB);
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};

export default run;


