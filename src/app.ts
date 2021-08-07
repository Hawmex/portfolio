import { AppScaffold } from 'nexinterface/dist/app-scaffold/app-scaffold.js';
import 'nexinterface/dist/dialog/dialog.js';
import { addDialog } from 'nexinterface/dist/dialog/dialog.js';
import 'nexinterface/dist/drawer/drawer.js';
import { activateDrawer } from 'nexinterface/dist/drawer/drawer.js';
import 'nexinterface/dist/snackbar/snackbar.js';
import { addSnackbar } from 'nexinterface/dist/snackbar/snackbar.js';
import 'nexinterface/dist/top-bar/top-bar.js';
import { setTopBarOptions } from 'nexinterface/dist/top-bar/top-bar.js';
import 'nexinterface/dist/typography/typography.js';
import { css, html, NexwidgetTemplate } from 'nexwidget';

declare global {
  interface HTMLElementTagNameMap {
    'app-widget': AppWidget;
  }
}

class AppWidget extends AppScaffold {
  static get styles(): CSSStyleSheet[] {
    return [
      ...super.styles,
      css`
        :host {
          grid-template-rows: 0px max-content;
        }
      `,
    ];
  }

  addedCallback() {
    super.addedCallback();
    setTopBarOptions({ leading: { icon: 'menu', action: activateDrawer } });
    setTimeout(() => addSnackbar({ text: 'های' }), 1000);
    setTimeout(() => addSnackbar({ text: 'بای' }), 2000);
    setTimeout(
      () =>
        addDialog({
          headline: 'های',
          body: html`<typography-widget variant="text">های</typography-widget>`,
        }),
      3000,
    );
    setTimeout(
      () =>
        addDialog({
          headline: 'بای',
          body: html`<typography-widget variant="text">بای</typography-widget>`,
        }),
      4000,
    );
  }

  get template(): NexwidgetTemplate {
    return html`
      <drawer-widget></drawer-widget>
      <top-bar-widget></top-bar-widget>
      <dialog-widget></dialog-widget>
      <snackbar-widget></snackbar-widget>
    `;
  }
}

AppWidget.register('app-widget');
