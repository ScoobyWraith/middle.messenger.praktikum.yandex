import '../../common-styles/common.scss';
import { showMock } from '../../common-scripts/hbs-utils';
import { MockTemplate } from '../../templates/mock-template';


showMock(MockTemplate, { code: '500', text: 'Мы уже фиксим', });
