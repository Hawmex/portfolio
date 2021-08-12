import { css, html, Nexwidget, WidgetTemplate } from 'nexwidget';

declare global {
  interface HTMLElementTagNameMap {
    'chips-container-widget': ChipsContainerWidget;
  }
}

export class ChipsContainerWidget extends Nexwidget {
  static get styles(): CSSStyleSheet[] {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
          width: 100%;
          flex-direction: row;
          box-sizing: border-box;
          flex-wrap: wrap;
          gap: 8px;
          padding: 8px;
        }
      `,
    ];
  }
  get template(): WidgetTemplate {
    return html`<slot></slot>`;
  }
}

ChipsContainerWidget.register('chips-container-widget');
