import { html, Nexwidget, NexwidgetTemplate } from 'nexwidget';

import './app.js';

declare global {
  interface HTMLElementTagNameMap {
    'app-provider': AppProvider;
  }
}

class AppProvider extends Nexwidget {
  get template(): NexwidgetTemplate {
    return html`<app-widget></app-widget>`;
  }
}

AppProvider.register('app-provider');
