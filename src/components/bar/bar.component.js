'use strict';

import { ComponentBarController } from './bar.controller';
import ComponentBarTemplate from './bar.template.html';

export class ComponentBar {
    constructor() {
        this.bindings = {
        };
        this.controller = ComponentBarController;
        this.template = ComponentBarTemplate;
    }
};
