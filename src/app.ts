import { AppScaffold } from 'nexinterface/dist/app-scaffold/app-scaffold.js';
import 'nexinterface/dist/button/button.js';
import 'nexinterface/dist/card/card.js';
import 'nexinterface/dist/card/cards-grid.js';
import 'nexinterface/dist/dialog/dialog.js';
import { addDialog } from 'nexinterface/dist/dialog/dialog.js';
import 'nexinterface/dist/drawer/drawer.js';
import { activateDrawer } from 'nexinterface/dist/drawer/drawer.js';
import 'nexinterface/dist/snackbar/snackbar.js';
import { addSnackbar } from 'nexinterface/dist/snackbar/snackbar.js';
import 'nexinterface/dist/top-bar/top-bar.js';
import { setTopBarOptions } from 'nexinterface/dist/top-bar/top-bar.js';
import 'nexinterface/dist/typography/typography.js';
import { css, html, WidgetTemplate } from 'nexwidget';

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
          grid-template-rows: 0px max-content 1fr 0px 0px;
        }

        :host div {
          overflow: auto;
        }
      `,
    ];
  }

  addedCallback() {
    super.addedCallback();

    setTopBarOptions({
      leading: { icon: 'menu', action: activateDrawer },
      headline: 'سلام',
      leftSlot: html` <button-widget variant="text" icon="search"></button-widget> `,
    });

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
          button: {
            text: 'وای',
            action: () => {},
          },
        }),
      4000,
    );

    setTimeout(
      () => setTopBarOptions({ headline: 'خیابان', tabs: ['یک', 'دو'], activeTab: 0 }),
      6000,
    );
  }

  get template(): WidgetTemplate {
    return html`
      <drawer-widget headline="اپ" text="اپلیکیشن">
        <button-widget variant="menu" text="یک" icon="person"></button-widget>
      </drawer-widget>
      <top-bar-widget app-name="اپ"></top-bar-widget>
      <div>
        <cards-grid-widget>
          <card-widget
            image-src="https://avatars.githubusercontent.com/u/54506231?v=4"
            headline="واو"
          >
            <typography-widget variant="text" slot="body">هااا</typography-widget>
            <button-widget variant="text" icon="add_shopping_cart" slot="icons"></button-widget>
            <button-widget variant="text" text="عااا" slot="buttons"></button-widget>
          </card-widget>
        </cards-grid-widget>
      </div>
      <dialog-widget></dialog-widget>
      <snackbar-widget></snackbar-widget>
    `;
  }
}

AppWidget.register('app-widget');
