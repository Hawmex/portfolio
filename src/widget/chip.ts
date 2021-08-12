import 'nexinterface/dist/typography/typography.js';
import { css, html, Nexwidget, WidgetTemplate } from 'nexwidget';

declare global {
  interface HTMLElementTagNameMap {
    'chip-widget': ChipWidget;
  }
}

export class ChipWidget extends Nexwidget {
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
      `,
    ];
  }

  get template(): WidgetTemplate {
    return html` <typography-widget variant="text"><slot></slot></typography-widget> `;
  }
}

ChipWidget.register('chip-widget');
