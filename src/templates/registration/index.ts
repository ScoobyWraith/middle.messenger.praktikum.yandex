import './../style.scss';
import { registerPartials } from '../../common-scripts/hbs-utils';
import * as Components from './../../components';
import * as Modules from './../../modules';

export { default as RegistrationTemplate } from './tmpl.hbs?raw';


registerPartials({ ...Components, ...Modules });
