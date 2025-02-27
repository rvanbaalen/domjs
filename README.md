[&larr; See my other Open Source projects](https://robinvanbaalen.nl)

# @rvanbaalen/domjs
![NPM Downloads](https://img.shields.io/npm/d18m/%40rvanbaalen%2Fdomjs)
![GitHub License](https://img.shields.io/github/license/rvanbaalen/domjs)
![NPM Version](https://img.shields.io/npm/v/%40rvanbaalen%2Fdomjs)

Zero-dependency core DOM manipulation utilities in vanilla JavaScript.

## Description

@rvanbaalen/domjs is a lightweight library that provides essential DOM manipulation functions without any additional dependencies. It is designed to be simple and minimal, making common DOM operations both intuitive and efficient.

## Installation

Install the package via npm:

```bash
npm install @rvanbaalen/domjs
```

## Usage

Import the functions into your project as needed. The library exports the following utilities:

- **`$`**: A function to select the first DOM element that matches a given selector.
- **`$$`**: A function to select all DOM elements that match a given selector.
- **`domPrepend`**: Inserts HTML content at the beginning of a specified element.
- **`domAppend`**: Inserts HTML content at the end of a specified element.
- **`domBefore`**: Inserts HTML content immediately before a specified element.
- **`domAfter`**: Inserts HTML content immediately after a specified element.

### Selecting Elements

#### Single Element Selection

Use the `$` function to select the first element that matches the selector.

```javascript
import { $ } from '@rvanbaalen/domjs';

const element = $('#myElement'); // Selects the first element with ID "myElement"
```

#### Multiple Elements Selection

Use the `$$` function to select all elements that match the selector.

```javascript
import { $$ } from '@rvanbaalen/domjs';

const elements = $$('.myClass'); // Selects all elements with the class "myClass"
```

### DOM Manipulation

#### Prepending HTML

Insert HTML content at the beginning of an element using `domPrepend`.

```javascript
import { domPrepend } from '@rvanbaalen/domjs';

const container = $('#container');
const htmlSnippet = '<p>Prepended content</p>';
domPrepend({ context: container, tpl: htmlSnippet });
```

#### Appending HTML

Insert HTML content at the end of an element using `domAppend`.

```javascript
import { domAppend } from '@rvanbaalen/domjs';

const container = $('#container');
const htmlSnippet = '<p>Appended content</p>';
domAppend({ context: container, tpl: htmlSnippet });
```

#### Inserting HTML Before an Element

Insert HTML content immediately before an element using `domBefore`.

```javascript
import { domBefore } from '@rvanbaalen/domjs';

const element = $('#element');
const htmlSnippet = '<p>Content before element</p>';
domBefore({ context: element, tpl: htmlSnippet });
```

#### Inserting HTML After an Element

Insert HTML content immediately after an element using `domAfter`.

```javascript
import { domAfter } from '@rvanbaalen/domjs';

const element = $('#element');
const htmlSnippet = '<p>Content after element</p>';
domAfter({ context: element, tpl: htmlSnippet });
```

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

## License

Distributed under the MIT License. See the [LICENSE](LICENSE) file for more information.
