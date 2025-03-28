/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Import type for the calculator to improve type safety
 */
import { ScientificCalculator } from './utility';

import {
  MEMORY_STORAGE_KEY,
  MEMORY_BTN_SELECTOR,
  BTN_MC,
  BTN_MR,
  BTN_MPLUS,
  BTN_MMINUS,
  BTN_MS,
  DISABLED_CLASS,
  ERROR_MESSAGE,
} from './constants';

/**
 * @class MemoryClass
 * @description Manages calculator memory operations
 */
class MemoryClass {
  /**
   * Reference to the main calculator instance
   */
  private calci: ScientificCalculator;

  /**
   * Current memory value
   */
  private memory: number | null;

  /**
   * @constructor
   * @param {ScientificCalculator} calci - Calculator instance
   */
  constructor(calci: ScientificCalculator) {
    this.calci = calci;
    this.memory = null;

    // Bind methods to preserve 'this' context
    this.getMemory = this.getMemory.bind(this);
    this.setMemory = this.setMemory.bind(this);
    this.updateMemoryButtons = this.updateMemoryButtons.bind(this);
    this.memoryhandler = this.memoryhandler.bind(this);

    this.getMemory();
    this.updateMemoryButtons();

    const memoryButtonContainer = document.querySelector(MEMORY_BTN_SELECTOR);
    if (memoryButtonContainer) {
      memoryButtonContainer.addEventListener('click', this.memoryhandler);
    }
  }

  /**
   * @method getMemory
   * @description Retrieves memory value from local storage
   * @returns {void}
   */
  private getMemory(): void {
    const savedMemory = localStorage.getItem(MEMORY_STORAGE_KEY);
    this.memory = savedMemory ? parseFloat(savedMemory) : null;
  }

  /**
   * @method setMemory
   * @description Saves current memory value to local storage
   * @returns {void}
   */
  private setMemory(): void {
    if (this.memory !== null) {
      localStorage.setItem(MEMORY_STORAGE_KEY, this.memory.toString());
    } else {
      localStorage.removeItem(MEMORY_STORAGE_KEY);
    }
  }

  /**
   * @method updateMemoryButtons
   * @description Updates the state of memory-related buttons
   * @returns {void}
   */
  private updateMemoryButtons(): void {
    const hasMemory = this.memory !== null;

    const mcButton = document.querySelector(
      `[value="${BTN_MC}"]`,
    ) as HTMLButtonElement | null;
    const mrButton = document.querySelector(
      `[value="${BTN_MR}"]`,
    ) as HTMLButtonElement | null;

    if (mcButton) {
      mcButton.disabled = !hasMemory;
      mcButton.classList.toggle(DISABLED_CLASS, !hasMemory);
    }

    if (mrButton) {
      mrButton.disabled = !hasMemory;
      mrButton.classList.toggle(DISABLED_CLASS, !hasMemory);
    }
  }

  /**
   * @method memoryhandler
   * @description Event handler for memory operation button clicks
   * @param {Event} e - Click event object
   * @returns {void}
   */
  private memoryhandler(e: Event): void {
    const button = (e.target as Element).closest(
      'button',
    ) as HTMLButtonElement | null;

    if (!button || button.disabled) return;

    const action = button.textContent?.trim() ?? '';
    let currentValue = 0;

    try {
      if (this.calci.evalstr && this.calci.evalstr !== ERROR_MESSAGE) {
        currentValue = parseFloat(eval(this.calci.evalstr));
      }
    } catch (error) {
      return;
    }

    switch (action) {
      case BTN_MC:
        this.memory = null;
        break;
      case BTN_MR:
        if (this.memory !== null) {
          this.calci.evalstr = this.memory.toString();
          this.calci.resultstr = this.calci.evalstr;
        }
        break;
      case BTN_MPLUS:
        this.memory =
          this.memory === null ? currentValue : this.memory + currentValue;
        break;
      case BTN_MMINUS:
        this.memory =
          this.memory === null ? -currentValue : this.memory - currentValue;
        break;
      case BTN_MS:
        this.memory = currentValue;
        break;
    }

    this.setMemory();
    this.updateMemoryButtons();
    this.calci.renderDisplay();
  }

  /**
   * Getter for current memory value
   * @returns {number | null} Current memory value
   */
  public getMemoryValue(): number | null {
    return this.memory;
  }
}

export default MemoryClass;
