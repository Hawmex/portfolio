import { Nexinterface } from 'nexinterface/dist/base/base.js';
import { html, WidgetTemplate } from 'nexwidget';

import './app.js';

declare global {
  interface HTMLElementTagNameMap {
    'app-provider': AppProvider;
  }
}

export class AppProvider extends Nexinterface {
  get template(): WidgetTemplate {
    return html`<app-widget></app-widget>`;
  }
}

AppProvider.register('app-provider');
