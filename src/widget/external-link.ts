import { addDialog } from 'nexinterface/dist/dialog/dialog.js';
import 'nexinterface/dist/typography/typography.js';
import { html, Nexwidget, WidgetTemplate } from 'nexwidget';

declare global {
  interface HTMLElementTagNameMap {
    'external-link-widget': ExternalLinkWidget;
  }
}

export interface ExternalLinkWidget {
  get link(): string;
  set link(v: string);
}

export class ExternalLinkWidget extends Nexwidget {
  addedCallback() {
    super.addedCallback();
    this.addEventListener(
      'click',
      () =>
        addDialog({
          headline: 'لینک زیر باز شود؟',
          body: html`<typography-widget dir="auto" variant="text">${this.link}</typography-widget>`,
          button: {
            text: 'باز کن',
            action: () => open(this.link, '_blank'),
          },
        }),
      { signal: this.removedSignal },
    );
  }
  get template(): WidgetTemplate {
    return html`<slot></slot>`;
  }
}

ExternalLinkWidget.createAttributes([['link', String]]);
ExternalLinkWidget.register('external-link-widget');
