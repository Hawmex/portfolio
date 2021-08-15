import { Nexinterface } from 'nexinterface/dist/base/base.js';
import 'nexinterface/dist/scrim/scrim.js';
import { css, html, WidgetTemplate } from 'nexwidget';

declare global {
  interface HTMLElementTagNameMap {
    'openable-image-widget': OpenableImageWidget;
  }
}

export interface OpenableImageWidget {
  get active(): boolean;
  set active(v: boolean);

  get src(): string | null;
  set src(v: string | null);

  get alt(): string | null;
  set alt(v: string | null);
}

export class OpenableImageWidget extends Nexinterface {
  static get styles(): CSSStyleSheet[] {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
          border-radius: 8px;
          overflow: hidden;
        }

        :host .primary {
          cursor: pointer;
        }

        :host .secondary {
          border-radius: 8px;
          box-shadow: var(--shadowLvl4);
          max-width: calc(100vw - 32px);
          max-height: calc(100vh - 88px);
          width: auto;
          height: auto;
          position: absolute;
          top: calc(50% + 27px);
          right: 50%;
          z-index: 2;
          opacity: 0;
          visibility: hidden;
          transform: translate(50%, -50%) scale(0.9);
          transition: opacity calc(var(--durationLvl2) - 50ms) var(--deceleratedEase),
            transform 0ms var(--deceleratedEase) calc(var(--durationLvl2) - 50ms),
            visibility calc(var(--durationLvl2) - 50ms) var(--deceleratedEase);
        }

        :host([active]) .secondary {
          opacity: 1;
          visibility: visible;
          transform: translate(50%, -50%) scale(1);
          transition: opacity var(--durationLvl2) var(--deceleratedEase),
            transform var(--durationLvl2) var(--deceleratedEase),
            visibility var(--durationLvl2) var(--deceleratedEase);
        }

        :host scrim-widget {
          transition-duration: calc(var(--durationLvl2) - 50ms);
        }

        :host([active]) scrim-widget {
          transition-duration: var(--durationLvl2);
        }

        :host .header {
          position: absolute;
          top: 0px;
          right: 0px;
          height: 56px;
          width: 100%;
          z-index: 2;
          box-shadow: var(--shadowLvl2);
          align-items: center;
          display: flex;
          background-color: var(--onSurfaceColor);
          color: var(--surfaceColor);
          visibility: hidden;
          transform: translateY(-100%);
          transition: transform calc(var(--durationLvl2) - 50ms) var(--deceleratedEase),
            visibility calc(var(--durationLvl2) - 50ms) var(--deceleratedEase);
        }

        :host([active]) .header {
          visibility: visible;
          transform: translateY(0%);
          transition-duration: var(--durationLvl2);
        }

        :host typography-widget {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      `,
    ];
  }

  get template(): WidgetTemplate {
    return html`
      <scrim-widget
        ?active=${this.active}
        @pointerdown=${() => (this.active = false)}
      ></scrim-widget>
      <img
        class="primary"
        @click=${() => (this.active = true)}
        part="img"
        src=${this.src!}
        alt=${this.alt!}
      />
      <div class="header">
        <typography-widget variant="text">${this.alt}</typography-widget>
      </div>
      <img class="secondary" src=${this.src!} alt=${this.alt!} />
    `;
  }
}

OpenableImageWidget.createAttributes([
  ['active', Boolean],
  ['src', String],
  ['alt', String],
]);

OpenableImageWidget.createReactives(['active', 'src', 'alt']);
OpenableImageWidget.register('openable-image-widget');
