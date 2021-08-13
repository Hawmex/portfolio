import { AppScaffold } from 'nexinterface/dist/app-scaffold/app-scaffold.js';
import 'nexinterface/dist/button/button.js';
import 'nexinterface/dist/dialog/dialog.js';
import 'nexinterface/dist/drawer/drawer.js';
import 'nexinterface/dist/section/section.js';
import 'nexinterface/dist/typography/typography.js';
import { css, html, WidgetTemplate } from 'nexwidget';
import './widget/carousel.js';
import './widget/chip.js';
import './widget/chips-container.js';
import './widget/external-link.js';

declare global {
  interface HTMLElementTagNameMap {
    'app-widget': AppWidget;
  }
}

export class AppWidget extends AppScaffold {
  static get styles(): CSSStyleSheet[] {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
          box-sizing: border-box;
          align-items: center;
          justify-content: center;
          background-color: var(--surfaceColor);

          --primaryColor: #42a5f5;
        }

        :host .wrapper {
          width: max-content;
          max-width: 100%;
          height: 100vh;
          overflow-y: auto;
          display: block;
          margin: auto;
        }

        :host a {
          color: var(--primaryColor);
          text-decoration: none;
        }

        :host .email-button {
          --primaryColor: #ef5350;
        }

        :host .github-button {
          --primaryColor: #24292f;
        }

        :host .profile {
          width: 100%;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          padding: 8px 16px;
        }

        :host .profile img {
          border-radius: 8px;
          width: 256px;
          max-width: 100%;
        }

        @media (prefers-color-scheme: dark) {
          :host .github-button {
            --primaryColor: #ffffff;
            --onPrimaryColor: #24292f;
          }
        }

        @media (max-width: 640px) {
          :host .profile img {
            width: 100%;
          }
        }
      `,
    ];
  }

  get template(): WidgetTemplate {
    return html`
      <dialog-widget></dialog-widget>
      <div class="wrapper">
        <section-widget variant="buttons">
          <external-link-widget slot="icons" link="mailto:itshawmex@gmail.com">
            <button-widget class="email-button" variant="text" icon="mail"></button-widget>
          </external-link-widget>
          <external-link-widget slot="icons" link="https://t.me/hawmex">
            <button-widget variant="text" icon="telegram"></button-widget>
          </external-link-widget>
          <external-link-widget slot="buttons" link="https://github.com/Hawmex">
            <button-widget class="github-button" variant="text" text="گیتهاب من" icon="open_in_new">
            </button-widget>
          </external-link-widget>
        </section-widget>
        <div class="profile">
          <img src="/assets/profile.jpg" />
        </div>
        <section-widget variant="paragraphs">
          <typography-widget variant="top-bar">حامد اعراب</typography-widget>
          <typography-widget style="text-align: justify" variant="text">
            سلام. من حامد اعراب، دانشجوی کارشناسی مهندسی صنایع در دانشگاه صنعتی امیرکبیر هستم. سه
            سال هست که توسعه‌دهندگی وب در بخش‌های فرانت‌اند و بک‌اند رو شروع کردم و یک ساله که به
            صورت جدی اون رو دنبال می‌کنم.
          </typography-widget>
          <typography-widget style="text-align: justify" variant="text">
            به تازگی پکیج‌های nexbounce, nexstate, nexwidget, & nexinterface رو در npm منتشر کردم و
            نگهداری می‌کنم. nexbounce برای debounce کردن task های سنگین استفاده میشه. nexstate هم یک
            state manager غیرمتمرکز هست. nexwidget هم برای توسعه کامپوننت‌های وب نوشته شده. و در
            نهایت nexinterface هم مجموعه‌ای از ویجت‌های طراحی material هست که با استفاده از
            nexwidget توسعه داده شده.
          </typography-widget>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="headline">زبان‌ها</typography-widget>
          <chips-container-widget>
            <chip-widget>JavaScript (ESNext)</chip-widget>
            <chip-widget>TypeScript</chip-widget>
            <chip-widget>HTML</chip-widget>
            <chip-widget>CSS</chip-widget>
            <chip-widget>C</chip-widget>
          </chips-container-widget>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="headline">مهارت‌ها</typography-widget>
          <chips-container-widget>
            <chip-widget>Front-End</chip-widget>
            <chip-widget>Back-End</chip-widget>
            <chip-widget>ExpressJS</chip-widget>
            <chip-widget>MongoDB</chip-widget>
            <chip-widget>Web Components</chip-widget>
            <chip-widget>React</chip-widget>
            <chip-widget>Redux</chip-widget>
          </chips-container-widget>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="headline">نمونه‌کارها</typography-widget>
          <external-link-widget link="https://healthteam.herokuapp.com"
            ><button-widget
              style="margin: 0px 8px"
              variant="text"
              text="اپلیکیشن وب تیم سلامتی"
              icon="open_in_new"
            ></button-widget>
          </external-link-widget>
          <chips-container-widget>
            <chip-widget>توسعه Full-Stack</chip-widget>
            <chip-widget>نمره کامل PWA</chip-widget>
            <chip-widget>رابط کاربری Material</chip-widget>
            <chip-widget>Dark Mode خودکار و هماهنگ با دستگاه</chip-widget>
            <chip-widget>تجربه‌ی کاربری نزدیک به Native</chip-widget>
            <chip-widget>متصل به درگاه پرداخت IDPay</chip-widget>
            <chip-widget>ExpressJS</chip-widget>
            <chip-widget>MongoDB</chip-widget>
            <chip-widget>Nexwidget</chip-widget>
            <chip-widget>Nexstate</chip-widget>
          </chips-container-widget>
          <carousel-widget
            style="direction: rtl;"
            .imageSrcs=${[
              '/assets/health-team-app-home.png',
              '/assets/health-team-app-shop.png',
              '/assets/health-team-app-home-dark.png',
              '/assets/health-team-app-shop-dark.png',
            ]}
          ></carousel-widget>
          <external-link-widget link="https://noter-279d9.web.app"
            ><button-widget
              style="margin: 0px 8px"
              variant="text"
              text="اپلیکیشن وب Noter"
              icon="open_in_new"
            ></button-widget>
          </external-link-widget>
          <chips-container-widget>
            <chip-widget>توسعه Front-End</chip-widget>
            <chip-widget>رابط کاربری Material</chip-widget>
            <chip-widget>React</chip-widget>
            <chip-widget>Redux</chip-widget>
            <chip-widget>Firebase Auth</chip-widget>
            <chip-widget>Firebase Firestore</chip-widget>
          </chips-container-widget>
          <carousel-widget
            style="direction: rtl;"
            .imageSrcs=${[
              '/assets/noter-app-auth.png',
              '/assets/noter-app-home.png',
              '/assets/noter-app-auth-mobile.png',
              '/assets/noter-app-home-mobile.png',
            ]}
          ></carousel-widget>
        </section-widget>
      </div>
    `;
  }
}

AppWidget.register('app-widget');
