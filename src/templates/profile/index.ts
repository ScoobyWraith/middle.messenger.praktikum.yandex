import './style.scss';
import { registerPartials } from '../../common-scripts/hbs-utils';
import * as CommonComponents from './../../components';
import * as Components from './components';
import * as Modules from './modules';

export { default as ProfileTemplate } from './tmpl.hbs?raw';

registerPartials({ ...Components, ...Modules, ...CommonComponents });
