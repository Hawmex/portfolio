import { repeat } from 'lit-html/directives/repeat.js';
import { css, html, Nexwidget, WidgetTemplate } from 'nexwidget';

declare global {
  interface HTMLElementTagNameMap {
    'carousel-widget': CarouselWidget;
  }
}

export interface CarouselWidget {
  get imageSrcs(): string[] | undefined;
  set imageSrcs(v: string[] | undefined);
}

export class CarouselWidget extends Nexwidget {
  static get styles(): CSSStyleSheet[] {
    return [
      ...super.styles,
      css`
        :host {
          margin: auto;
          display: flex;
          scroll-snap-type: x mandatory;
          scroll-padding: 32px;
          overflow: auto hidden;
          width: max-content;
          max-width: 100vw;
        }

        :host .images-container {
          display: grid;
          box-sizing: border-box;
          gap: 16px;
          padding: 0px 16px;
          width: max-content;
          grid-auto-flow: column;
        }

        :host .image {
          display: flex;
          overflow: hidden;
          scroll-snap-align: center;
          width: 256px;
          border-radius: 8px;
          background-color: black;
        }

        :host img {
          margin: auto;
          width: 100%;
        }
      `,
    ];
  }

  get template(): WidgetTemplate {
    return html`
      <div class="images-container">
        ${repeat(
          this.imageSrcs!,
          (src) => src,
          (src) => html` <div class="image"><img src=${src} /></div> `,
        )}
      </div>
    `;
  }
}

CarouselWidget.createReactives(['imageSrcs']);
CarouselWidget.register('carousel-widget');
