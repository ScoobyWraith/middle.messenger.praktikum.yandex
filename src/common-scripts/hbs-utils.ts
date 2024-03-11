import Handlebars from 'handlebars';
import CONSTANTS from './constants';

export function showApp(template: string): void {
    let hbsTemplate = Handlebars.compile(template);
    let appContainer = document.getElementById(CONSTANTS.containerId);

    if (appContainer) {
        appContainer.innerHTML = hbsTemplate({});
    }
}

export function showMock(template: string, context: object): void {
    let hbsTemplate = Handlebars.compile(template);
    let appContainer = document.getElementById(CONSTANTS.containerId);

    if (appContainer) {
        appContainer.innerHTML = hbsTemplate(context);
    }
}


export function registerPartials(partials: { [name: string]: string }): void {
    Object.entries(partials).forEach(([name, component]) => {
        Handlebars.registerPartial(name, component);
    });
}
