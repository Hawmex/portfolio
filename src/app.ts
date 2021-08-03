import { html, Nexwidget, NexwidgetTemplate } from 'nexwidget';

declare global {
  interface HTMLElementTagNameMap {
    'app-widget': AppWidget;
  }
}

class AppWidget extends Nexwidget {
  get template(): NexwidgetTemplate {
    return html`<h1>Hello World!</h1>`;
  }
}

AppWidget.register('app-widget');
