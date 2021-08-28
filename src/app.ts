import { AppScaffold } from 'nexinterface/dist/app-scaffold/app-scaffold.js';
import 'nexinterface/dist/button/button.js';
import 'nexinterface/dist/chip/chip.js';
import 'nexinterface/dist/chip/chips-container.js';
import 'nexinterface/dist/dialog/dialog.js';
import 'nexinterface/dist/icon/icon.js';
import 'nexinterface/dist/section/section.js';
import 'nexinterface/dist/typography/typography.js';
import { css, html, WidgetTemplate } from 'nexwidget';
import './components/external-link.js';
import './widgets/carousel.js';
import { CarouselImage } from './widgets/carousel.js';
import './widgets/openable-image.js';

declare global {
  interface HTMLElementTagNameMap {
    'app-widget': AppWidget;
  }
}

export class AppWidget extends AppScaffold {
  static {
    this.registerAs('app-widget');
  }

  static override get styles(): CSSStyleSheet[] {
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
          scroll-behavior: smooth;
          height: 100vh;
          overflow-y: auto;
          display: block;
          margin: auto;
        }

        :host .profile {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 16px 16px 8px 16px;
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

        :host .profile openable-image-widget {
          animation: pop var(--durationLvl2) var(--deceleratedEase);
        }

        :host .profile openable-image-widget::part(img) {
          border-radius: 50%;
          width: 256px;
          max-width: 100%;
        }

        :host .footer {
          align-items: center;
          background: var(--backgroundColor);
          box-shadow: var(--shadowLvl3);
        }

        @media (prefers-color-scheme: dark) {
          :host .github-button {
            --primaryColor: #ffffff;
            --onPrimaryColor: #263238;
          }
        }

        @media (max-width: 640px) {
          :host .profile openable-image-widget::part(img) {
            width: 100%;
          }
        }
      `,
    ];
  }

  override get template(): WidgetTemplate {
    return html`
      <dialog-widget></dialog-widget>
      <div class="wrapper">
        <section-widget variant="buttons">
          <external-link-component slot="leading" link="mailto:itshawmex@gmail.com">
            <button-widget
              style="--primaryColor: #ff1744"
              variant="text"
              icon="mail"
            ></button-widget>
          </external-link-component>
          <external-link-component slot="leading" link="https://t.me/hawmex">
            <button-widget
              style="--primaryColor: #42a5f5"
              variant="text"
              icon="telegram"
            ></button-widget>
          </external-link-component>
          <external-link-component slot="trailing" link="https://github.com/Hawmex">
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
          <openable-image-widget
            src="/assets/profile.jpg"
            alt="عکس پروفایل"
          ></openable-image-widget>
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
            <chip-widget text="JavaScript (ESNext)"></chip-widget>
            <chip-widget text="TypeScript"></chip-widget>
            <chip-widget text="HTML"></chip-widget>
            <chip-widget text="CSS"></chip-widget>
            <chip-widget text="C"></chip-widget>
          </chips-container-widget>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="headline">مهارت‌ها</typography-widget>
          <chips-container-widget dir="auto">
            <chip-widget text="Front-End"></chip-widget>
            <chip-widget text="Back-End"> </chip-widget>
            <chip-widget text="ExpressJS"></chip-widget>
            <chip-widget text="MongoDB"></chip-widget>
            <chip-widget text="Web Components"></chip-widget>
            <chip-widget text="React"></chip-widget>
            <chip-widget text="Redux"></chip-widget>
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
          <chips-container-widget>
            <chip-widget text="توسعه Full-Stack"></chip-widget>
            <chip-widget text="نمره کامل PWA"></chip-widget>
            <chip-widget text="رابط کاربری Material"></chip-widget>
            <chip-widget text="Dark Mode خودکار و هماهنگ با دستگاه"></chip-widget>
            <chip-widget text="تجربه‌ی کاربری نزدیک به Native"></chip-widget>
            <chip-widget text="متصل به درگاه پرداخت IDPay"></chip-widget>
            <chip-widget text="ExpressJS"></chip-widget>
            <chip-widget text="MongoDB"></chip-widget>
            <chip-widget text="Nexwidget"></chip-widget>
            <chip-widget text="Nexstate"></chip-widget>
          </chips-container-widget>
          <carousel-widget
            .images=${<CarouselImage[]>[
              {
                src: '/assets/health-team-app-home.png',
                alt: 'صفحه اصلی اپلیکیشن تیم سلامتی در دسکتاپ',
              },
              {
                src: '/assets/health-team-app-shop.png',
                alt: 'صفحه فروشگاه اپلیکیشن تیم سلامتی در دسکتاپ',
              },
              {
                src: '/assets/health-team-app-home-dark.png',
                alt: 'صفحه اصلی اپلیکیشن تیم سلامتی در موبایل',
              },
              {
                src: '/assets/health-team-app-shop-dark.png',
                alt: 'صفحه فروشگاه اپلیکیشن تیم سلامتی در موبایل',
              },
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
          <chips-container-widget>
            <chip-widget text="توسعه Front-End"></chip-widget>
            <chip-widget text="رابط کاربری Material"></chip-widget>
            <chip-widget text="React"></chip-widget>
            <chip-widget text="Redux"></chip-widget>
            <chip-widget text="Firebase Auth"></chip-widget>
            <chip-widget text="Firebase Firestore"></chip-widget>
          </chips-container-widget>
          <carousel-widget
            .images=${<CarouselImage[]>[
              {
                src: '/assets/noter-app-auth.png',
                alt: 'صفحه ورود اپلیکیشن Noter در دسکتاپ',
              },
              {
                src: '/assets/noter-app-home.png',
                alt: 'صفحه اصلی اپلیکیشن Noter در دسکتاپ',
              },
              {
                src: '/assets/noter-app-auth-mobile.png',
                alt: 'صفحه ورود اپلیکیشن Noter در موبایل',
              },
              {
                src: '/assets/noter-app-home-mobile.png',
                alt: 'صفحه اصلی اپلیکیشن Noter در موبایل',
              },
            ]}
          ></carousel-widget>
        </section-widget>
        <section-widget class="footer" variant="paragraphs">
          <icon-widget value="code"></icon-widget>
        </section-widget>
      </div>
    `;
  }
}
