import { repeat } from 'lit-html/directives/repeat.js';
import { Nexinterface } from 'nexinterface/dist/base/base.js';
import { css, html, WidgetTemplate } from 'nexwidget';
import './openable-image.js';
import { OpenableImageWidget } from './openable-image.js';

export type CarouselImage = [src: string, alt: string];

declare global {
  interface HTMLElementTagNameMap {
    'carousel-widget': CarouselWidget;
  }
}

export interface CarouselWidget {
  get images(): CarouselImage[] | undefined;
  set images(v: CarouselImage[] | undefined);
}

export class CarouselWidget extends Nexinterface {
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
          scroll-behavior: smooth;
          max-width: 100%;
        }

        :host .images-container {
          display: grid;
          gap: 16px;
          padding: 16px;
          width: max-content;
          grid-auto-flow: column;
        }

        :host openable-image-widget {
          display: flex;
          overflow: hidden;
          scroll-snap-align: center;
          width: 256px;
          border-radius: 8px;
          background-color: black;
        }

        :host openable-image-widget::part(img) {
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
          this.images!,
          ([src]) => src,
          ([src, alt]) =>
            html`
              <openable-image-widget
                @click=${(event: MouseEvent) =>
                  (<OpenableImageWidget>event.target).scrollIntoView({
                    inline: 'center',
                    block: 'nearest',
                  })}
                alt=${alt}
                src=${src}
              ></openable-image-widget>
            `,
        )}
      </div>
    `;
  }
}

CarouselWidget.createReactives(['images']);
CarouselWidget.register('carousel-widget');
