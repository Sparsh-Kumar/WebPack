import inputsAreValid from "./utils/input-are-valid";

export default class AlertService {
  private errorBox: HTMLElement | null;

  constructor() {
    this.errorBox = document.getElementById("error");
  }

  public handleAdditionError(inputs: string[], numbers: number[]) {
    const fullMessage: string = inputs.reduce((message: string, str: string, index: number) => {
      if (inputsAreValid(numbers[index])) {
        return message + "";
      } else {
        return message + `${str} is not a number. `;
      }
    }, "Please enter two valid numbers! ");

    if (this.errorBox) {
      this.errorBox.classList.remove("invisible");
      this.errorBox.innerText = fullMessage;
    }
  }

  public hideErrors() {
    if (this.errorBox) {
      this.errorBox.classList.add("invisible");
    }
  }
}

