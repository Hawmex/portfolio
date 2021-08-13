import { Nexinterface } from 'nexinterface/dist/base/base.js';
import { addDialog } from 'nexinterface/dist/dialog/dialog.js';
import 'nexinterface/dist/typography/typography.js';
import { css, html, WidgetTemplate } from 'nexwidget';

declare global {
  interface HTMLElementTagNameMap {
    'external-link-component': ExternalLinkComponent;
  }
}

export interface ExternalLinkComponent {
  get link(): string;
  set link(v: string);
}

export class ExternalLinkComponent extends Nexinterface {
  static get styles(): CSSStyleSheet[] {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
          width: max-content;
        }
      `,
    ];
  }
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

ExternalLinkComponent.createAttributes([['link', String]]);
ExternalLinkComponent.register('external-link-component');
