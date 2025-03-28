/**
 * @fileoverview Main calculator module that initializes calculator components
 * @module ScientificCalculator
 */
import History from './historyClass';
import MemoryClass from './memoryClass';
import MathOperations from './mathOperation';
import Display from './display';
import InputHandler from './input';
import Mode from './mode';
import Core from './core';

/**
 * Scientific calculator that coordinates display, input handling, history tracking,
 * memory operations, and calculation functionality
 * @class
 */
class ScientificCalculator {
  /**
   * Default error message
   * @type {string}
   */
  private readonly ERROR: string = 'Error';

  /**
   * String of the current expression to be evaluated
   * @type {string}
   */
  public evalstr: string = '';

  /**
   * String of the current calculation result
   * @type {string}
   */
  public resultstr: string = '';

  /**
   * Manages the calculator display
   * @type {Display}
   */
  public displayManager: Display;

  /**
   * Handles core calculation operations
   * @type {Core}
   */
  public coreCalculator: Core;

  /**
   * Manages calculation history
   * @type {History}
   */
  public History: History;

  /**
   * Handles memory operations (MS, MR, MC, M+, M-)
   * @type {MemoryClass}
   */
  public Memory: MemoryClass;

  /**
   * Provides mathematical operation handlers
   * @type {MathOperations}
   */
  public mathOperations: MathOperations;

  /**
   * Manages calculator modes (DEG/RAD, scientific notation)
   * @type {Mode}
   */
  public modeManager: Mode;

  /**
   * Processes user input from buttons and keyboard
   * @type {InputHandler}
   */
  public inputHandler: InputHandler;

  /**
   * Creates a new scientific calculator instance
   * @constructor
   */
  constructor() {
    // Initialize dependencies, passing `this` as the calculator context
    this.displayManager = new Display(this);
    this.coreCalculator = new Core(this);
    this.History = new History(this);
    this.Memory = new MemoryClass(this);
    this.mathOperations = new MathOperations(this);
    this.modeManager = new Mode(this);
    this.inputHandler = new InputHandler(this);

    // Initialize the display on startup
    this.renderDisplay();
  }

  /**
   * Updates the calculator display with current values
   * @returns {void}
   */
  public renderDisplay(): void {
    this.displayManager.renderDisplay();
  }

  /**
   * Removes the last character from the current expression
   * @returns {void}
   */
  public backspace(): void {
    this.coreCalculator.backspace();
  }

  /**
   * Evaluates the current expression and displays the result
   * @returns {void}
   */
  public equals(): void {
    this.coreCalculator.equals();
  }
}

/**
 * The calculator instance used throughout the application
 * @type {ScientificCalculator}
 */
const calculator: ScientificCalculator = new ScientificCalculator();

export default calculator;
export { ScientificCalculator };
