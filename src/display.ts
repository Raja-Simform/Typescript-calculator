/**
 * Interface for the Calculator instance used in Display
 */
interface Calculator {
  resultstr: string;
}

/**
 * Class responsible for rendering calculator display
 */
class Display {
  /** Reference to the calculator instance */
  private calci: Calculator;

  /** DOM element representing the calculator display */
  private display: HTMLElement;

  /**
   * Creates an instance of the Display
   * @param calci - Calculator instance
   */
  constructor(calci: Calculator) {
    this.calci = calci;

    // Use non-null assertion as we expect .result to always exist
    // Alternatively, you could add a null check in the constructor
    this.display = document.querySelector('.result')!;

    // Bind methods to this instance
    this.renderDisplay = this.renderDisplay.bind(this);
  }

  /**
   * Updates the calculator display
   * Shows "0" if no result string is available
   */
  public renderDisplay(): void {
    this.display.textContent = this.calci.resultstr || '0';
  }
}

export default Display;
