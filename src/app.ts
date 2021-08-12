import { AppScaffold } from 'nexinterface/dist/app-scaffold/app-scaffold.js';
import 'nexinterface/dist/button/button.js';
import 'nexinterface/dist/section/section.js';
import 'nexinterface/dist/typography/typography.js';
import { css, html, WidgetTemplate } from 'nexwidget';
import './widget/carousel.js';

declare global {
  interface HTMLElementTagNameMap {
    'app-widget': AppWidget;
  }
}

class AppWidget extends AppScaffold {
  static get styles(): CSSStyleSheet[] {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
          overflow: hidden auto;
          box-sizing: border-box;
          align-items: center;
          justify-content: center;
          background-color: var(--surfaceColor);

          --primaryColor: #0076c5;
        }

        :host .wrapper {
          width: max-content;
          max-width: 100vw;
          display: grid;
          margin: auto;
        }

        :host a {
          color: var(--primaryColor);
          text-decoration: none;
        }
      `,
    ];
  }

  get template(): WidgetTemplate {
    return html`
      <div class="wrapper">
        <section-widget variant="buttons">
          <a slot="icons" href="mailto:itshawmex@gmail.com" target="_blank">
            <button-widget
              style="--primaryColor: #aa0f3e;"
              variant="text"
              icon="mail"
            ></button-widget>
          </a>
          <a slot="icons" href="https://t.me/hawmex" target="_blank">
            <button-widget slot="icons" variant="text" icon="telegram"></button-widget>
          </a>
          <a slot="buttons" href="https://github.com/Hawmex" target="_blank">
            <button-widget style="--primaryColor: #24292f;" variant="solid" text="گیتهاب من">
            </button-widget>
          </a>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="top-bar">حامد اعراب</typography-widget>
          <typography-widget variant="text">
            درود. من حامد اعراب هستم، یک توسعه‌دهنده‌ی وب در بخش‌های فرانت‌اند و بک‌اند.
          </typography-widget>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="headline">زبان‌ها</typography-widget>
          <typography-widget dir="auto" variant="text">JavaScript (ESNext)</typography-widget>
          <typography-widget dir="auto" variant="text">TypeScript</typography-widget>
          <typography-widget dir="auto" variant="text">HTML</typography-widget>
          <typography-widget dir="auto" variant="text">CSS</typography-widget>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="headline">مهارت‌ها</typography-widget>
          <typography-widget dir="auto" variant="text">Front-End</typography-widget>
          <typography-widget dir="auto" variant="text">Back-End</typography-widget>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="top-bar">نمونه‌کارها</typography-widget>
          <typography-widget variant="headline">
            <a href="https://healthteam.herokuapp.com" target="_blank">اپلیکیشن وب تیم سلامتی</a>
          </typography-widget>
          <typography-widget variant="text">توسعه Full-Stack</typography-widget>
          <typography-widget variant="text">نمره کامل PWA</typography-widget>
          <typography-widget variant="text">رابط کاربری Material</typography-widget>
          <typography-widget variant="text">متصل به درگاه پرداخت</typography-widget>
          <carousel-widget
            .imageSrcs=${[
              '/assets/health-team-app-home.png',
              '/assets/health-team-app-shop.png',
              '/assets/health-team-app-home-dark.png',
              '/assets/health-team-app-shop-dark.png',
            ]}
          ></carousel-widget>
        </section-widget>
      </div>
    `;
  }
}

AppWidget.register('app-widget');
