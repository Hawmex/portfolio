import { Interactive } from 'nexinterface/dist/interactive/interactive';
import 'nexinterface/dist/typography/typography.js';
import { css, html, WidgetTemplate } from 'nexwidget';

declare global {
  interface HTMLElementTagNameMap {
    'chip-widget': ChipWidget;
  }
}

export class ChipWidget extends Interactive {
  static get styles(): CSSStyleSheet[] {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
          width: max-content;
          background: var(--backgroundColor);
          min-height: 32px;
          align-items: center;
          border-radius: 10000px;
        }

        :host typography-widget {
          padding: 0px 12px;
        }
      `,
    ];
  }

  get template(): WidgetTemplate {
    return html` <typography-widget variant="text"><slot></slot></typography-widget> `;
  }
}

ChipWidget.register('chip-widget');
