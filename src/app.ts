import { AppScaffold } from 'nexinterface/dist/app-scaffold/app-scaffold.js';
import 'nexinterface/dist/button/button.js';
import 'nexinterface/dist/dialog/dialog.js';
import 'nexinterface/dist/icon/icon.js';
import 'nexinterface/dist/section/section.js';
import 'nexinterface/dist/typography/typography.js';
import { css, html, WidgetTemplate } from 'nexwidget';
import './components/external-link.js';
import './widgets/carousel.js';
import './widgets/chip.js';
import './widgets/chips-container.js';

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
          align-items: center;
          justify-content: center;
          background-color: var(--surfaceColor);

          --primaryColor: #26a69a;
        }

        :host .github-button {
          --primaryColor: #263238;
        }

        :host .wrapper {
          width: max-content;
          max-width: 100%;
          height: 100vh;
          overflow-y: auto;
          display: block;
          margin: auto;
        }

        :host .profile {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 8px 16px;
        }

        @keyframes pop {
          from {
            opacity: 0;
            transform: scale(0.9);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        :host .profile img {
          border-radius: 8px;
          width: 256px;
          max-width: 100%;
          animation: pop var(--durationLvl2) var(--deceleratedEase);
        }

        @media (prefers-color-scheme: dark) {
          :host .github-button {
            --primaryColor: #ffffff;
            --onPrimaryColor: #263238;
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
          <external-link-component slot="icons" link="mailto:itshawmex@gmail.com">
            <button-widget
              style="--primaryColor: #ff1744"
              variant="text"
              icon="mail"
            ></button-widget>
          </external-link-component>
          <external-link-component slot="icons" link="https://t.me/hawmex">
            <button-widget
              style="--primaryColor: #42a5f5"
              variant="text"
              icon="telegram"
            ></button-widget>
          </external-link-component>
          <external-link-component slot="buttons" link="https://github.com/Hawmex">
            <button-widget
              class="github-button"
              variant="solid"
              text="گیتهاب من"
              icon="open_in_new"
            >
            </button-widget>
          </external-link-component>
        </section-widget>
        <div class="profile">
          <img loading="eager" src="/assets/profile.jpg" alt="profile photo" />
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
          <typography-widget style="text-align: justify" variant="text">
            همچنین تسلط خوبی به زبان انگلیسی دارم و مستندات به زبان انگلیسی رو به خوبی متوجه میشم.
          </typography-widget>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="headline">زبان‌ها</typography-widget>
          <chips-container-widget dir="auto">
            <chip-widget>JavaScript (ESNext)</chip-widget>
            <chip-widget>TypeScript</chip-widget>
            <chip-widget>HTML</chip-widget>
            <chip-widget>CSS</chip-widget>
            <chip-widget>C</chip-widget>
          </chips-container-widget>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="headline">مهارت‌ها</typography-widget>
          <chips-container-widget dir="auto">
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
          <external-link-component link="https://healthteam.herokuapp.com"
            ><button-widget
              style="margin: 0px 8px"
              variant="text"
              text="اپلیکیشن وب تیم سلامتی"
              icon="open_in_new"
            ></button-widget>
          </external-link-component>
          <chips-container-widget dir="auto">
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
            .imageSrcs=${[
              '/assets/health-team-app-home.png',
              '/assets/health-team-app-shop.png',
              '/assets/health-team-app-home-dark.png',
              '/assets/health-team-app-shop-dark.png',
            ]}
          ></carousel-widget>
          <external-link-component link="https://noter-279d9.web.app"
            ><button-widget
              style="margin: 0px 8px"
              variant="text"
              text="اپلیکیشن وب Noter"
              icon="open_in_new"
            ></button-widget>
          </external-link-component>
          <chips-container-widget dir="auto">
            <chip-widget>توسعه Front-End</chip-widget>
            <chip-widget>رابط کاربری Material</chip-widget>
            <chip-widget>React</chip-widget>
            <chip-widget>Redux</chip-widget>
            <chip-widget>Firebase Auth</chip-widget>
            <chip-widget>Firebase Firestore</chip-widget>
          </chips-container-widget>
          <carousel-widget
            .imageSrcs=${[
              '/assets/noter-app-auth.png',
              '/assets/noter-app-home.png',
              '/assets/noter-app-auth-mobile.png',
              '/assets/noter-app-home-mobile.png',
            ]}
          ></carousel-widget>
        </section-widget>
        <section-widget
          style="align-items: center; background: var(--backgroundColor); box-shadow: var(--shadowLvl3);"
          variant="paragraphs"
        >
          <icon-widget value="code"></icon-widget>
        </section-widget>
      </div>
    `;
  }
}

AppWidget.register('app-widget');
