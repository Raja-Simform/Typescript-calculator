import {
  HISTORY_MAX_COUNT,
  HISTORY_STORAGE_KEY,
  DISPLAY_BLOCK,
  DISPLAY_NONE,
  CALCULATOR_SELECTOR,
  HISTORY_PANEL_SELECTOR,
  HISTORY_TOGGLE_BTN_SELECTOR,
  CLEAR_HISTORY_BTN_SELECTOR,
  HISTORY_LIST_SELECTOR,
  NO_HISTORY_CLASS,
  HISTORY_ITEM_CLASS,
} from './constants';

/**
 * Interface for a history item
 */
interface HistoryItem {
  expression: string;
  result: string;
}

/**
 * Interface for the Calculator instance used in history
 */
interface Calculator {
  evalstr: string;
  resultstr: string;
  renderDisplay: () => void;
}

/**
 * Class for managing calculator history operations
 */
class History {
  /** Array of history items  */
  private calc_history: HistoryItem[];

  /** Maximum number of history entries */
  private readonly COUNT: number;

  /** Reference to the calculator instance */
  private calci: Calculator;

  /**
   * Creates a history manager instance
   * @param calci - Calculator instance
   */
  constructor(calci: Calculator) {
    this.calc_history = [];
    this.COUNT = HISTORY_MAX_COUNT;
    this.calci = calci;

    // Bind methods to this instance
    this.getHistory = this.getHistory.bind(this);
    this.saveHistoryToStorage = this.saveHistoryToStorage.bind(this);
    this.addToHistory = this.addToHistory.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
    this.toggleHistoryDisplay = this.toggleHistoryDisplay.bind(this);
    this.createHistoryPanel = this.createHistoryPanel.bind(this);
    this.renderHistoryPanel = this.renderHistoryPanel.bind(this);

    // Set up click event to close history
    document.addEventListener('click', (event: MouseEvent) => {
      const calculatorContainer = document.querySelector(CALCULATOR_SELECTOR);
      const historyPanel = document.querySelector(HISTORY_PANEL_SELECTOR);
      if (
        historyPanel &&
        (historyPanel as HTMLElement).style.display === DISPLAY_BLOCK
      ) {
        if (
          calculatorContainer &&
          !calculatorContainer.contains(event.target as Node)
        ) {
          (historyPanel as HTMLElement).style.display = DISPLAY_NONE;
        }
      }
    });

    // Set up history toggle button
    const historyBtn = document.querySelector(HISTORY_TOGGLE_BTN_SELECTOR);
    if (historyBtn) {
      historyBtn.addEventListener('click', this.toggleHistoryDisplay);
    }

    // Set up clear history button
    const clearHistoryBtn = document.querySelector(CLEAR_HISTORY_BTN_SELECTOR);
    if (clearHistoryBtn) {
      clearHistoryBtn.addEventListener('click', this.clearHistory);
    }

    // Load history from local storage on initialization
    this.getHistory();
  }

  /**
   * Retrieves history from local storage
   */
  private getHistory() {
    const savedHistory = localStorage.getItem(HISTORY_STORAGE_KEY);
    this.calc_history = savedHistory ? JSON.parse(savedHistory) : [];
  }

  /**
   * Saves current history to local storage
   */
  private saveHistoryToStorage() {
    localStorage.setItem(
      HISTORY_STORAGE_KEY,
      JSON.stringify(this.calc_history),
    );
  }

  /**
   * Adds a new calculation to history
   * @param expression - The calculation expression
   * @param result - The calculated result
   */
  public addToHistory(expression: string, result: number | string){
    this.calc_history.unshift({
      expression,
      result: result.toString(),
    });
    // Trim history to maximum allowed length
    if (this.calc_history.length > this.COUNT) {
      this.calc_history = this.calc_history.slice(0, this.COUNT);
    }
    this.saveHistoryToStorage();
  }

  /**
   * Clears all history items
   */
  public clearHistory(){
    this.calc_history = [];
    this.saveHistoryToStorage();
    const historyPanel = document.querySelector(HISTORY_PANEL_SELECTOR);
    if (
      historyPanel &&
      (historyPanel as HTMLElement).style.display !== DISPLAY_NONE
    ) {
      this.renderHistoryPanel();
    }
  }

  /**
   * Toggles history panel
   */
  public toggleHistoryDisplay(){
    const historyPanel = document.querySelector(HISTORY_PANEL_SELECTOR);
    console.log('hello');
    if (historyPanel) {
      const panel = historyPanel as HTMLElement;
      if (panel.style.display === DISPLAY_NONE) {
        panel.style.display = DISPLAY_BLOCK;
        this.renderHistoryPanel();
      } else {
        panel.style.display = DISPLAY_NONE;
      }
    }
  }

  /**
   * Creates the history panel
   */
  public createHistoryPanel(){
    const panel = document.createElement('div');
    panel.className = HISTORY_PANEL_SELECTOR.substring(1);
    const calculatorContainer = document.querySelector(CALCULATOR_SELECTOR);
    if (calculatorContainer) {
      calculatorContainer.appendChild(panel);
      this.renderHistoryPanel();
    }
  }

  /**
   * Renders the history panel
   */
  public renderHistoryPanel(){
    const panel = document.querySelector(HISTORY_PANEL_SELECTOR);
    if (!panel) return;

    const historyList = panel.querySelector(HISTORY_LIST_SELECTOR);
    if (!historyList) return;

    historyList.innerHTML = '';

    // Show placeholder if history is empty
    if (this.calc_history.length === 0) {
      historyList.innerHTML = `<p class="${NO_HISTORY_CLASS}">No calculations yet</p>`;
      return;
    }

    // Create and append history items
    this.calc_history.forEach((item) => {
      const listItem = document.createElement('div');
      listItem.className = HISTORY_ITEM_CLASS;
      listItem.textContent = `${item.expression} = ${item.result}`;

      // Allow clicking on history item to restore that result
      listItem.addEventListener('click', () => {
        this.calci.evalstr = item.result;
        this.calci.resultstr = item.result;
        this.calci.renderDisplay();

        const panel = document.querySelector(
          HISTORY_PANEL_SELECTOR,
        ) as HTMLElement;
        if (panel) {
          panel.style.display = DISPLAY_NONE;
        }
      });
      historyList.appendChild(listItem);
    });
  }
}

export default History;
