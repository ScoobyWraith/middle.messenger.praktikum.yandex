import './style.scss';
import Handlebars from 'handlebars';

export { default as Message } from './tmpl.hbs?raw';

Handlebars.registerHelper('isEqual', function (this: any, arg1, arg2, options) {
    return arg1 == arg2 ? options.fn(this as any) : options.inverse(this);
});
