/**
 * Selects a single element from the DOM.
 * @param {string} selector - CSS selector string
 * @param {Document|Element} [scope=document] - Element to search within
 * @returns {Element|null} The first matching element or null if not found
 */
export const $ = (selector, scope = document) => {
    // getElementById is faster than querySelector.
    if (selector.startsWith("#") && selector.indexOf(" ") === -1) {
        return scope.getElementById(selector.slice(1));
    }

    return scope.querySelector(selector);
}

/**
 * Selects multiple elements from the DOM and returns them as an array.
 * @param {string} selector - CSS selector string
 * @param {Document|Element} [scope=document] - Element to search within
 * @returns {Element[]} Array of matching elements
 */
export const $$ = (selector, scope = document) => {
    return Array.from(scope.querySelectorAll(selector));
}

/**
 * Inserts HTML at the beginning of the context element's content.
 * @param {Object} options - Options object
 * @param {Element} options.context - Element to insert content into
 * @param {string} options.tpl - HTML content to insert
 * @returns {void}
 */
export const domPrepend = ({context, tpl}) => {
    context.insertAdjacentHTML('afterbegin', tpl);
}

/**
 * Inserts HTML at the end of the context element's content.
 * @param {Object} options - Options object
 * @param {Element} options.context - Element to insert content into
 * @param {string} options.tpl - HTML content to insert
 * @returns {void}
 */
export const domAppend = ({context, tpl}) => {
    context.insertAdjacentHTML('beforeend', tpl);
}

/**
 * Inserts HTML before the context element.
 * @param {Object} options - Options object
 * @param {Element} options.context - Element to insert content adjacent to
 * @param {string} options.tpl - HTML content to insert
 * @returns {void}
 */
export const domBefore = ({context, tpl}) => {
    context.insertAdjacentHTML('beforebegin', tpl);
}

/**
 * Inserts HTML after the context element.
 * @param {Object} options - Options object
 * @param {Element} options.context - Element to insert content adjacent to
 * @param {string} options.tpl - HTML content to insert
 * @returns {void}
 */
export const domAfter = ({context, tpl}) => {
    context.insertAdjacentHTML('afterend', tpl);
}
