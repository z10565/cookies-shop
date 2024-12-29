import React from "react";
import "../../styles/style.css";
import AppButton from "../../components/UI/AppButton/AppButton";
import AppHeader from "../../components/UI/AppHeader/AppHeader";
import { AppLink } from "../../components/UI/AppLink/AppLink";

export const AboutCookies: React.FC = () => {
  return (
    <>
      <div className="currency" title="Изменить валюту" id="change-currency">$</div>
      <header className="header">
        <div className="container">
          <img src="images/line1.svg" alt="line" className="line1" />
          <div className="logo">
            <img src="images/logo.svg" alt="logo" />
          </div>
          <nav className="menu">
            <ul className="menu-list">
              <li className="menu-item">
              <AppLink href="#products" dataLink="products" linkText="Каталог" />
              </li>
              <li className="menu-item">
              <AppLink href="#love" dataLink="love" linkText="О нас" />
              </li>
              <li className="menu-item">
              <AppLink href="#order" dataLink="order" linkText="Оформление заказа" />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="main-content">
        <div className="container">
          <div className="main-info">
          <AppHeader className="main-title" headerText="Магия вкуса в каждой крошке" headerType="h1" />
            <p className="main-text">
              Наши рецепты вдыхают жизнь в изысканность ингредиентов: ароматное натуральное масло, свежие сливки,
              чистый мёд и отборная мука. Мы тщательно отбираем каждый компонент премиального печенья, стремясь
              подарить вам истинное кулинарное наслаждение.
            </p>
            <div className="main-action">
            <AppButton className="button" id="main-action-button" buttonText="Заказать" buttonType="button"/>
            </div>
          </div>
          <img src="images/cookie.png" alt="cookie" className="main-image" />
        </div>
      </section>
    </>
  );
};
