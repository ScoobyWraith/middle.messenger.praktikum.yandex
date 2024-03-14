import './style.scss';
import { registerPartials } from '../../common-scripts/hbs-utils';
import * as Components from './components';
import * as Modules from './modules';
import * as CommonComponents from './../../components';
import Handlebars from 'handlebars';

export { default as ChatsTemplate } from './tmpl.hbs?raw';

Handlebars.registerHelper('getChatItems', () => {
    return new Array(20)
        .join('_')
        .split('_')
        .map(() => {
            return {
                avatar: null,
                name: 'Виктор',
                description: 'Описание: длинный текст, который занимет значительное место и содержит форматирование',
                datetime: '12:15',
                unreads: Math.max(0, (Math.random() * 5 - 2) >> 0),
            };
        });
});

Handlebars.registerHelper('getUserChat', () => {
    return {
        avatar: null,
        name: 'Виктор',
    };
});

Handlebars.registerHelper('getMessages', () => {
    return [
        { type: 'date', text: '1 февраля', time: '12:15', status: null },
        {
            type: 'other',
            text: 'Ну давай, пока. Я бы тут оставил очень длинный текст, аля Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, но, пожалуй, не буду',
            time: '12:16',
            status: null,
        },
        { type: 'date', text: '3 февраля', time: '12:15', status: null },
        { type: 'other', text: 'Привет', time: '14:12', status: null },
        { type: 'self', text: 'Привет. Как дела?', time: '18:15', status: 'read' },
        {
            type: 'self',
            text: 'Пожалуй, и я оставлю Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            time: '18:18',
            status: 'unread',
        },
        { type: 'date', text: '5 февраля', time: '12:15', status: null },
        {
            type: 'other',
            text: 'Ну давай, пока. Я бы тут оставил очень длинный текст, аля Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, но, пожалуй, не буду',
            time: '12:16',
            status: null,
        },
        { type: 'date', text: '6 февраля', time: '12:15', status: null },
        { type: 'other', text: 'Привет', time: '14:12', status: null },
        { type: 'self', text: 'Привет. Как дела?', time: '18:15', status: 'read' },
        {
            type: 'self',
            text: 'Пожалуй, и я оставлю Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            time: '18:18',
            status: 'unread',
        },
    ];
});

registerPartials({ ...Components, ...CommonComponents, ...Modules });
