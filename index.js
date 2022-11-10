export const $ = (selector, scope = document) => {
    return scope.querySelector(selector);
}
export const $$ = (selector, scope = document) => {
    return Array.from(scope.querySelectorAll(selector));
}
export const domPrepend = ({context, tpl}) => {
    context.insertAdjacentHTML('afterbegin', tpl);
}
export const domAppend = ({context, tpl}) => {
    context.insertAdjacentHTML('beforeend', tpl);
}
export const domBefore = ({context, tpl}) => {
    context.insertAdjacentHTML('beforebegin', tpl);
}
export const domAfter = ({context, tpl}) => {
    context.insertAdjacentHTML('afterend', tpl);
}
