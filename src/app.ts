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
          width: 100vw;
          display: grid;
          margin: auto;
        }
      `,
    ];
  }

  get template(): WidgetTemplate {
    return html`
      <div class="wrapper">
        <section-widget variant="buttons">
          <button-widget
            style="--primaryColor: #aa0f3e;"
            slot="icons"
            variant="text"
            icon="mail"
          ></button-widget>
          <button-widget slot="icons" variant="text" icon="telegram"></button-widget>
          <button-widget
            style="--primaryColor: #24292f;"
            slot="buttons"
            variant="solid"
            text="گیتهاب من"
          ></button-widget>
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
          <typography-widget dir="auto" variant="text">Frot-End</typography-widget>
          <typography-widget dir="auto" variant="text">Back-End</typography-widget>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="top-bar">نمونه‌کارها</typography-widget>
          <typography-widget variant="headline">اپلیکیشن وب تیم سلامتی</typography-widget>
          <typography-widget variant="text">توسعه Full-Stack</typography-widget>
          <typography-widget variant="text">نمره کامل PWA</typography-widget>
          <typography-widget variant="text">رابط کاربری Material</typography-widget>
          <typography-widget variant="text">متصل به درگاه پرداخت</typography-widget>
          <carousel-widget
            dir="rtl"
            .imageSrcs=${[
              '/public/assets/health-team-app-home.png',
              '/public/assets/health-team-app-shop.png',
              '/public/assets/health-team-app-home-dark.png',
              '/public/assets/health-team-app-shop-dark.png',
            ]}
          ></carousel-widget>
        </section-widget>
      </div>
    `;
  }
}

AppWidget.register('app-widget');
