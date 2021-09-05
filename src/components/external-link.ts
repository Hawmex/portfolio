import { Nexinterface } from 'nexinterface/base/base.js';
import { addDialog } from 'nexinterface/dialog/dialog.js';
import 'nexinterface/section/section.js';
import 'nexinterface/typography/typography.js';
import { css, html, WidgetTemplate } from 'nexwidget/nexwidget.js';

declare global {
  interface HTMLElementTagNameMap {
    'external-link-component': ExternalLinkComponent;
  }
}

export interface ExternalLinkComponent {
  get link(): string | null;
  set link(v: string | null);
}

export class ExternalLinkComponent extends Nexinterface {
  static {
    this.createAttributes([{ key: 'link', type: 'string' }]);
    this.registerAs('external-link-component');
  }

  static override get styles(): CSSStyleSheet[] {
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

  override get template(): WidgetTemplate {
    return html`<slot></slot>`;
  }

  override addedCallback() {
    super.addedCallback();
    this.addEventListener(
      'click',
      () =>
        addDialog({
          headline: 'توجه',
          body: html`
            <section-widget variant="paragraphs">
              <typography-widget dir="auto" variant="text">${this.link}</typography-widget>
            </section-widget>
          `,
          button: {
            text: 'باز کن',
            action: () => open(this.link!, '_blank'),
          },
        }),
      { signal: this.removedSignal },
    );
  }
}
