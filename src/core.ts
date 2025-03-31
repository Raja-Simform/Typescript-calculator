/* eslint-disable @typescript-eslint/no-unused-vars */
import { ERROR_MESSAGE } from './constants';


/**
 * type for the History  used in calculator
 */
type History = {
  addToHistory: (expression: string, result: number) => void;
};

/**
 * Interface for the Calculator instance used in Core
 */
interface Calculator {
  evalstr: string;
  resultstr: string;
  History: History;
  renderDisplay: () => void;
}

/**
 * Class for handling core calculator operations
 */
class Core {
  /** Reference to the calculator instance */
  private calci: Calculator;

  /** Error message to display when calculations fail */
  private ERROR: string;

  /**
   * Creates an instance of Core
   * @param calci - Calculator instance
   */
  constructor(calci: Calculator) {
    this.calci = calci;

    this.ERROR = ERROR_MESSAGE;

    // Bind methods to this instance
    this.equals = this.equals.bind(this);
    this.backspace = this.backspace.bind(this);
  }

  /**
   * Evaluates the current expression
   * Adds the calculation to history if successful
   */
  public equals(){
    if (this.calci.evalstr === this.ERROR || this.calci.evalstr === '') {
      return;
    }
    try {
      const expressionToShow = this.calci.resultstr;
      let result = eval(this.calci.evalstr);
      result = Number(result.toFixed(3));
      this.calci.History.addToHistory(expressionToShow, result);
      this.calci.evalstr = result.toString();
      this.calci.resultstr = this.calci.evalstr;
    } catch (error) {
      this.calci.evalstr = this.ERROR;
      this.calci.resultstr =this.ERROR;
    } finally {
      this.calci.renderDisplay();
    }
  }

  /**
   * Removes the last character from the current expression
   * Handles special cases like exponents with multiple characters
   */
  public backspace(){
    if (!this.calci.evalstr) {
      return;
    }
    if (this.calci.evalstr === this.ERROR) {
      this.clearCalc();
      return;
    }
    if (this.calci.evalstr.endsWith('**')) {
      this.calci.evalstr = this.calci.evalstr.slice(0, -2);
      this.calci.resultstr = this.calci.resultstr.slice(0, -1);
    } else if (
      this.calci.evalstr.endsWith('**2') ||
      this.calci.evalstr.endsWith('**3')
    ) {
      this.calci.evalstr = this.calci.evalstr.slice(0, -3);
      this.calci.resultstr = this.calci.resultstr.slice(0, -1);
    } else {
      this.calci.evalstr = this.calci.evalstr.slice(0, -1);
      this.calci.resultstr = this.calci.resultstr.slice(0, -1);
    }
    this.calci.renderDisplay();
  }

  /**
   * Clears the calculator's current expression and result
   */
  public clearCalc(){
    this.calci.evalstr = '';
    this.calci.resultstr = '';
    this.calci.renderDisplay();
  }
}

export default Core;
