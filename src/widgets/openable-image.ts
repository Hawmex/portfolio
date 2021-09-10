import { Nexinterface } from 'nexinterface/base/base.js';
import 'nexinterface/button/button.js';
import 'nexinterface/scrim/scrim.js';
import 'nexinterface/typography/typography.js';
import { css, html, WidgetTemplate } from 'nexwidget/nexwidget.js';

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
  static {
    this.createAttributes([
      { key: 'active', type: 'boolean' },
      { key: 'src', type: 'string' },
      { key: 'alt', type: 'string' },
    ]);

    this.createReactives(['active', 'src', 'alt']);
    this.registerAs('openable-image-widget');
  }

  static override get styles(): CSSStyleSheet[] {
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
          will-change: opacity, transform;
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

        :host .header {
          position: absolute;
          top: 0px;
          right: 0px;
          padding: 8px;
          width: 100%;
          z-index: 2;
          box-shadow: var(--shadowLvl2);
          align-items: center;
          display: flex;
          gap: 16px;
          background-color: var(--surfaceColor);
          color: var(--onSurfaceColor);
          visibility: hidden;
          transform: translateY(-100%);
          will-change: transform;
          transition: transform calc(var(--durationLvl2) - 50ms) var(--deceleratedEase),
            visibility calc(var(--durationLvl2) - 50ms) var(--deceleratedEase);
        }

        :host([active]) .header {
          visibility: visible;
          transform: translateY(0%);
          transition-duration: var(--durationLvl2);
        }

        :host typography-widget {
          padding: 0px 8px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      `,
    ];
  }

  override get template(): WidgetTemplate {
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
        <button-widget
          @click=${() => (this.active = false)}
          variant="menu"
          icon="close"
        ></button-widget>
        <typography-widget variant="text">${this.alt}</typography-widget>
      </div>
      <img class="secondary" src=${this.src!} alt=${this.alt!} />
    `;
  }
}
