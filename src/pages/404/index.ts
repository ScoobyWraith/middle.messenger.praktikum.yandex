import '../../common-styles/common.scss';
import { showMock } from '../../common-scripts/hbs-utils';
import { MockTemplate } from '../../templates/mock-template';

showMock(MockTemplate, { code: '404', text: 'Не туда попали :(' });
