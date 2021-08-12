import { html, Nexwidget, WidgetTemplate } from 'nexwidget';

import './app.js';

declare global {
  interface HTMLElementTagNameMap {
    'app-provider': AppProvider;
  }
}

export class AppProvider extends Nexwidget {
  get template(): WidgetTemplate {
    return html`<app-widget dir="rtl"></app-widget>`;
  }
}

AppProvider.register('app-provider');
