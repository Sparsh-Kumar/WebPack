export default class ComponentService {
  private numberOneInput: HTMLInputElement | null;
  private numberTwoInput: HTMLInputElement | null;
  private addValuesButton: HTMLButtonElement | null;
  private resultDiv: HTMLDivElement | null;

  constructor() {
    this.numberOneInput = document.getElementById("numberOne") as HTMLInputElement;
    this.numberTwoInput = document.getElementById("numberTwo") as HTMLInputElement;
    this.addValuesButton = document.getElementById("addValues") as HTMLButtonElement;
    this.resultDiv = document.getElementById("result") as HTMLDivElement;
  }

  public getInputs(): string[] {
    return [
      this.numberOneInput && this.numberOneInput.value ? this.numberOneInput.value: '',
      this.numberTwoInput && this.numberTwoInput.value ? this.numberTwoInput.value: '',
    ];
  }

  public setResult(str: string): void {
    if (this.resultDiv) {
      this.resultDiv.innerText = str;
    }
  }

  public onClick(cb: () => void): void {
    if (this.addValuesButton) {
      this.addValuesButton.addEventListener("click", cb);
    }
  }
}
