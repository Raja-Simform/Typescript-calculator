// Calculator constants
export const ERROR_MESSAGE = 'Error';

// History constants
export const HISTORY_MAX_COUNT = 5;
export const HISTORY_STORAGE_KEY = 'historyKey';
export const DISPLAY_BLOCK = 'block';
export const DISPLAY_NONE = 'none';

// Memory constants
export const MEMORY_STORAGE_KEY = 'memoryKey';
export const MEMORY_BTN_SELECTOR = '.memory-btn';
export const BTN_MC = 'MC';
export const BTN_MR = 'MR';
export const BTN_MPLUS = 'M+';
export const BTN_MMINUS = 'M-';
export const BTN_MS = 'MS';
export const DISABLED_CLASS = 'disabled';

// Mode constants
export const TOGGLE_BTN_SELECTOR = '.toggle-btn';
export const UNIT_SELECTOR = '.unit';
export const BTN_DEGREE = 'degree';
export const BTN_FE = 'F-E';
export const MODE_DEG = 'DEG';
export const MODE_RAD = 'RAD';
export const CUBE_DISPLAY = 'x³';
export const SQUARE_DISPLAY = 'x²';
export const CUBE_ROOT_DISPLAY = '∛x';
export const SQUARE_ROOT_DISPLAY = '√x';

// Dropdown constants
export const TRIGNO_DROPDOWN_ID = 'trigno-myDropdown';
export const FUNC_DROPDOWN_ID = 'func-myDropdown';
export const TRIGNO_DROPBTN_SELECTOR = '.trigno-dropbtn';
export const FUNC_DROPBTN_SELECTOR = '.func-dropbtn';
export const SHOW_TRIGNO_CLASS = 'show-trigno';
export const SHOW_FUNC_CLASS = 'show-func';

// CSS Classes and Selectors
export const CALCULATOR_SELECTOR = '.calculator';
export const HISTORY_PANEL_SELECTOR = '.history-panel';
export const HISTORY_TOGGLE_BTN_SELECTOR = '.history-toggle-btn';
export const CLEAR_HISTORY_BTN_SELECTOR = '.clear-history-btn';
export const HISTORY_LIST_SELECTOR = '.history-list';
export const NO_HISTORY_CLASS = 'no-history';
export const HISTORY_ITEM_CLASS = 'history-item';
export const KEYPAD_SELECTOR = '.keypad';
export const TRIGNO_DROPDOWN_SELECTOR = '.trigno-dropdown';
export const FUNC_DROPDOWN_SELECTOR = '.func-dropdown';

// Key constants
export const ENTER_KEY = 'Enter';
export const BACKSPACE_KEY = 'Backspace';
export const EQUALS_KEY = '=';

// Button values
export const BTN_EQUALS = '=';
export const BTN_BACKSPACE = 'backspace';
export const BTN_2ND = '2nd';
export const BTN_SIN = 'sin';
export const BTN_COS = 'cos';
export const BTN_TAN = 'tan';
export const BTN_CLEAR = 'C';
export const BTN_E = 'e';
export const BTN_FLOOR = 'floor';
export const BTN_CEIL = 'ceil';
export const BTN_LOG = 'log';
export const BTN_LN = 'ln';
export const BTN_ABS = 'abs';
export const BTN_SQUARE = 'square';
export const BTN_SQUAREROOT = 'squareroot';
export const BTN_TENX = '10^x';
export const BTN_XY = 'xy';
export const BTN_INVERSE = 'inverse';
export const BTN_SIGN_CHANGE = '+/-';
export const BTN_FACTORIAL = 'factorial';
export const BTN_PI = 'pi';
export const BTN_EXPONENTIAL = 'exponential';

// Allowed keys set
export const ALLOWED_KEYS = [
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
export const REGEX_NUMBER_END = /(-?\d+(\.\d+)?)$/;
export const REGEX_NUMBER_DECIMAL_END = /(\d+(\.\d+)?)$/;
export const REGEX_POWER_2_OR_3 = /\*\*3$|\*\*2$/;
export const REGEX_SUPERSCRIPT_2_OR_3 = /[²³]$/;
export const REGEX_OPERATOR_END = /[*+\-/^]$/;
export const REGEX_OPERATOR_OR_OPEN_PAREN = /[+\-*/(]$/;

// Math symbols and operations
export const SQUARE_POWER = '**2';
export const CUBE_POWER = '**3';
export const SUPERSCRIPT_2 = '²';
export const SUPERSCRIPT_3 = '³';
export const POWER_10 = '10**';
export const DISPLAY_POWER_10 = '10^';
export const POWER_OPERATOR = '**';
export const DISPLAY_POWER = '^';
export const MATH_PI = 'Math.PI';
export const DISPLAY_PI = 'π';
export const MATH_E = 'Math.E';
export const DISPLAY_E = 'e';
export const SINE_DEG = 'Math.sin((Math.PI/180)*';
export const SINE = 'Math.sin(';
export const DISPLAY_SINE = 'sin(';
export const COSINE_DEG = 'Math.cos((Math.PI/180)*';
export const COSINE = 'Math.cos(';
export const DISPLAY_COSINE = 'cos(';
export const TANGENT_DEG = 'Math.tan((Math.PI/180)*';
export const TANGENT = 'Math.tan(';
export const DISPLAY_TANGENT = 'tan(';
export const FLOOR = 'Math.floor(';
export const DISPLAY_FLOOR = 'floor(';
export const CEIL = 'Math.ceil(';
export const DISPLAY_CEIL = 'ceil(';
export const LOG10 = 'Math.log10(';
export const DISPLAY_LOG = 'log(';
export const LN = 'Math.log(';
export const DISPLAY_LN = 'ln(';
export const ABS = 'Math.abs(';
export const DISPLAY_ABS = 'abs(';
export const CUBE_ROOT = 'Math.cbrt(';
export const DISPLAY_CUBE_ROOT = '∛(';
export const SQUARE_ROOT = 'Math.sqrt(';
export const DISPLAY_SQUARE_ROOT = '√(';
export const EMPTY_STRING = '';
