'use strict';

import { PageFooController } from './foo.controller';
import PageFooTemplate from './foo.template.html';

export class PageFooComponent {
    constructor() {
        this.template = PageFooTemplate;
        this.controller = PageFooController;
    }
};
