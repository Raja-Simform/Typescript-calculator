// Calculator constants
export const ERROR_MESSAGE: string = 'Error';

// History constants
export const HISTORY_MAX_COUNT: number = 5;
export const HISTORY_STORAGE_KEY: string = 'historyKey';
export const DISPLAY_BLOCK: string = 'block';
export const DISPLAY_NONE: string = 'none';

// Memory constants
export const MEMORY_STORAGE_KEY: string = 'memoryKey';
export const MEMORY_BTN_SELECTOR: string = '.memory-btn';
export const BTN_MC: string = 'MC';
export const BTN_MR: string = 'MR';
export const BTN_MPLUS: string = 'M+';
export const BTN_MMINUS: string = 'M-';
export const BTN_MS: string = 'MS';
export const DISABLED_CLASS: string = 'disabled';

// Mode constants
export const TOGGLE_BTN_SELECTOR: string = '.toggle-btn';
export const UNIT_SELECTOR: string = '.unit';
export const BTN_DEGREE: string = 'degree';
export const BTN_FE: string = 'F-E';
export const MODE_DEG: string = 'DEG';
export const MODE_RAD: string = 'RAD';
export const CUBE_DISPLAY: string = 'x³';
export const SQUARE_DISPLAY: string = 'x²';
export const CUBE_ROOT_DISPLAY: string = '∛x';
export const SQUARE_ROOT_DISPLAY: string = '√x';

// Dropdown constants
export const TRIGNO_DROPDOWN_ID: string = 'trigno-myDropdown';
export const FUNC_DROPDOWN_ID: string = 'func-myDropdown';
export const TRIGNO_DROPBTN_SELECTOR: string = '.trigno-dropbtn';
export const FUNC_DROPBTN_SELECTOR: string = '.func-dropbtn';
export const SHOW_TRIGNO_CLASS: string = 'show-trigno';
export const SHOW_FUNC_CLASS: string = 'show-func';

// CSS Classes and Selectors
export const CALCULATOR_SELECTOR: string = '.calculator';
export const HISTORY_PANEL_SELECTOR: string = '.history-panel';
export const HISTORY_TOGGLE_BTN_SELECTOR: string = '.history-toggle-btn';
export const CLEAR_HISTORY_BTN_SELECTOR: string = '.clear-history-btn';
export const HISTORY_LIST_SELECTOR: string = '.history-list';
export const NO_HISTORY_CLASS: string = 'no-history';
export const HISTORY_ITEM_CLASS: string = 'history-item';
export const KEYPAD_SELECTOR: string = '.keypad';
export const TRIGNO_DROPDOWN_SELECTOR: string = '.trigno-dropdown';
export const FUNC_DROPDOWN_SELECTOR: string = '.func-dropdown';

// Key constants
export const ENTER_KEY: string = 'Enter';
export const BACKSPACE_KEY: string = 'Backspace';
export const EQUALS_KEY: string = '=';

// Button values
export const BTN_EQUALS: string = '=';
export const BTN_BACKSPACE: string = 'backspace';
export const BTN_2ND: string = '2nd';
export const BTN_SIN: string = 'sin';
export const BTN_COS: string = 'cos';
export const BTN_TAN: string = 'tan';
export const BTN_CLEAR: string = 'C';
export const BTN_E: string = 'e';
export const BTN_FLOOR: string = 'floor';
export const BTN_CEIL: string = 'ceil';
export const BTN_LOG: string = 'log';
export const BTN_LN: string = 'ln';
export const BTN_ABS: string = 'abs';
export const BTN_SQUARE: string = 'square';
export const BTN_SQUAREROOT: string = 'squareroot';
export const BTN_TENX: string = '10^x';
export const BTN_XY: string = 'xy';
export const BTN_INVERSE: string = 'inverse';
export const BTN_SIGN_CHANGE: string = '+/-';
export const BTN_FACTORIAL: string = 'factorial';
export const BTN_PI: string = 'pi';
export const BTN_EXPONENTIAL: string = 'exponential';

// Allowed keys set
export const ALLOWED_KEYS: string[] = [
  'Enter',
  'Backspace',
  '(',
  ')',
  '*',
  '-',
  '+',
  '/',
  '.',
  '=',
];

// Regex constants
export const REGEX_NUMBER_END: RegExp = /(-?\d+(\.\d+)?)$/;
export const REGEX_NUMBER_DECIMAL_END: RegExp = /(\d+(\.\d+)?)$/;
export const REGEX_POWER_2_OR_3: RegExp = /\*\*3$|\*\*2$/;
export const REGEX_SUPERSCRIPT_2_OR_3: RegExp = /[²³]$/;
export const REGEX_OPERATOR_END: RegExp = /[*+\-/^]$/;
export const REGEX_OPERATOR_OR_OPEN_PAREN: RegExp = /[+\-*/(]$/;//check it

// Math symbols and operations
export const SQUARE_POWER: string = '**2';
export const CUBE_POWER: string = '**3';
export const SUPERSCRIPT_2: string = '²';
export const SUPERSCRIPT_3: string = '³';
export const POWER_10: string = '10**';
export const DISPLAY_POWER_10: string = '10^';
export const POWER_OPERATOR: string = '**';
export const DISPLAY_POWER: string = '^';
export const MATH_PI: string = 'Math.PI';
export const DISPLAY_PI: string = 'π';
export const MATH_E: string = 'Math.E';
export const DISPLAY_E: string = 'e';
export const SINE_DEG: string = 'Math.sin((Math.PI/180)*';
export const SINE: string = 'Math.sin(';
export const DISPLAY_SINE: string = 'sin(';
export const COSINE_DEG: string = 'Math.cos((Math.PI/180)*';
export const COSINE: string = 'Math.cos(';
export const DISPLAY_COSINE: string = 'cos(';
export const TANGENT_DEG: string = 'Math.tan((Math.PI/180)*';
export const TANGENT: string = 'Math.tan(';
export const DISPLAY_TANGENT: string = 'tan(';
export const FLOOR: string = 'Math.floor(';
export const DISPLAY_FLOOR: string = 'floor(';
export const CEIL: string = 'Math.ceil(';
export const DISPLAY_CEIL: string = 'ceil(';
export const LOG10: string = 'Math.log10(';
export const DISPLAY_LOG: string = 'log(';
export const LN: string = 'Math.log(';
export const DISPLAY_LN: string = 'ln(';
export const ABS: string = 'Math.abs(';
export const DISPLAY_ABS: string = 'abs(';
export const CUBE_ROOT: string = 'Math.cbrt(';
export const DISPLAY_CUBE_ROOT: string = '∛(';
export const SQUARE_ROOT: string = 'Math.sqrt(';
export const DISPLAY_SQUARE_ROOT: string = '√(';
export const EMPTY_STRING: string = '';
