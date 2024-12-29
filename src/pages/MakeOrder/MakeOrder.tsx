import React from "react";
import "../../styles/style.css";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import AppButton from "../../components/UI/AppButton/AppButton";
import AppHeader from "../../components/UI/AppHeader/AppHeader";

export const MakeOrder: React.FC = () => {
  return (
    <>
      <div className="container">
        <img src="images/line3.svg" alt="line" className="line3" />
        <AppHeader className="common-title" headerText="Закажите печенье" headerType="h2" />
        <img src="images/breadcrumbs.svg" alt="breadcrumbs" className="order-bg-image" />
        <div className="order-block">
          <div className="order-form">
            <div className="order-form-text">
              Откройте для себя волшебство вкуса с нашим премиальным печеньем! Закажите
              прямо сейчас и окунитесь в мир сладких наслаждений.
            </div>
            <div className="order-form-inputs">
              <AppInput type="text" placeholder="Выберите печенье" id="product"/>
              <AppInput type="text" placeholder="Ваше имя" id="name"/>
              <AppInput type="text" placeholder="Ваш телефон" id="phone" />
              <AppButton className="button violet-button" id="order-action" buttonText="Оформить заказ" buttonType="submit"/>
            </div>
          </div>
          <div className="order-block-image">
            <img src="images/order.svg" alt="Cookies" className="order-image" />
          </div>
        </div>
      </div>
    </>
  );
};
