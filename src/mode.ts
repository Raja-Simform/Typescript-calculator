/**
 * Import type for the calculator to improve type safety
 */
import { ScientificCalculator } from './utility';

import {
  TOGGLE_BTN_SELECTOR,
  UNIT_SELECTOR,
  BTN_DEGREE,
  BTN_FE,
  MODE_DEG,
  MODE_RAD,
  CUBE_DISPLAY,
  SQUARE_DISPLAY,
  CUBE_ROOT_DISPLAY,
  SQUARE_ROOT_DISPLAY,
  BTN_SQUARE,
  BTN_SQUAREROOT,
} from './constants';

/**
 * @class Mode
 * @description Manages calculator mode states
 */
class Mode {
  /**
   * Reference to the main calculator instance
   */
  private calci: ScientificCalculator;

  /**
   * Flag to track secondary function mode
   */
  private secondbtn: boolean;

  /**
   * Flag to track degree/radian mode
   */
  private deg: boolean;

  /**
   * @constructor
   * @param {ScientificCalculator} calci - Calculator instance
   */
  constructor(calci: ScientificCalculator) {
    this.calci = calci;
    this.secondbtn = false;
    this.deg = true;

    // Bind methods to preserve 'this' context
    this.degbtnHandler = this.degbtnHandler.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.degree = this.degree.bind(this);

    this.initEventListeners();
  }

  /**
   * @method initEventListeners
   * @description Sets up event listeners
   */
  private initEventListeners(){
    const toggleBtn = document.querySelector(TOGGLE_BTN_SELECTOR);
    if (toggleBtn) {
      toggleBtn.addEventListener('click', this.degbtnHandler);
    }
  }

  /**
   * @method changeMode
   * @description Toggles between primary and secondary function modes
   */
  public changeMode(){
    this.secondbtn = !this.secondbtn;

    const squareBtn = document.querySelector(`[value='${BTN_SQUARE}']`);
    if (squareBtn) {
      squareBtn.textContent = this.secondbtn ? CUBE_DISPLAY : SQUARE_DISPLAY;
    }

    const squareRootBtn = document.querySelector(`[value='${BTN_SQUAREROOT}']`);
    if (squareRootBtn) {
      squareRootBtn.textContent = this.secondbtn
        ? CUBE_ROOT_DISPLAY
        : SQUARE_ROOT_DISPLAY;
    }
  }

  /**
   * @method degree
   * @description Toggles between degree (DEG) and radian (RAD) modes
   */
  public degree(){
    this.deg = !this.deg;

    const unitDisplay = document.querySelector(UNIT_SELECTOR);
    if (unitDisplay) {
      unitDisplay.textContent = this.deg ? MODE_DEG : MODE_RAD;
    }

    // Only re-render if there's a valid number in the expression
    if (this.calci.evalstr && !isNaN(Number(this.calci.evalstr))) {
      this.calci.renderDisplay();
    }
  }

  /**
   * @method degbtnHandler
   * @description Event handler for degree/FE button clicks
   * @param {Event} e - Click event object
   */
  public degbtnHandler(e: Event){
    const currentKey = (e.target as HTMLButtonElement)
      ?.closest('button')
      ?.getAttribute('value');

    switch (currentKey) {
      case BTN_DEGREE:
        this.degree();
        break;
      case BTN_FE:
        this.calci.mathOperations.expi();
        break;
      default:
        break;
    }
  }

  /**
   * Getter for current degree mode
   */
  public isDegreeMode(){
    return this.deg;
  }

  /**
   * Getter for secondary button mode
   */
  public isSecondMode(){
    return this.secondbtn;
  }
}

export default Mode;
