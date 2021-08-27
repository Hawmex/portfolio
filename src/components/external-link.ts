import { Nexinterface } from 'nexinterface/dist/base/base.js';
import { addDialog } from 'nexinterface/dist/dialog/dialog.js';
import 'nexinterface/dist/section/section.js';
import 'nexinterface/dist/typography/typography.js';
import { css, html, WidgetTemplate } from 'nexwidget';

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

  override addedCallback() {
    super.addedCallback();
    this.addEventListener(
      'click',
      () =>
        addDialog({
          headline: 'لینک زیر باز شود؟',
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

  override get template(): WidgetTemplate {
    return html`<slot></slot>`;
  }
}

ExternalLinkComponent.createAttributes([{ key: 'link', type: 'string' }]);
ExternalLinkComponent.registerAs('external-link-component');
