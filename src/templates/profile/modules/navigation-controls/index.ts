import './style.scss';
import { registerPartials } from '../../../../common-scripts/hbs-utils';
import * as Components from './../../../../components';

export { default as NavigationControls } from './tmpl.hbs?raw';

registerPartials({ ...Components });
