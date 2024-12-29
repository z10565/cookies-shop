import React from "react";
import "../../styles/style.css";
import AppHeader from "../../components/UI/AppHeader/AppHeader";

export const AboutBakery: React.FC = () => {
  return (
    <>
      <div className="container">
        <AppHeader className="common-title" headerText="Пекарня с любовью" headerType="h2" />
        <div className="love-items">
          <div className="love-item love-item-white">
            <div className="love-item-title">
              Приготовлено с заботой, чтобы радовать вас каждый день
            </div>
            <div className="love-item-text">
              Мы с гордостью представляем наше печенье, которое мы выпекаем вручную
              каждый день с 1995 года, используя только лучшие ингредиенты. Погрузитесь в мир изысканных лакомств,
              приготовленных с применением передовых технологий, и насладитесь их неповторимым вкусом.
            </div>
          </div>
          <div className="love-item love-item-image">
            <img src="images/love.svg" alt="Cookies image" />
          </div>
        </div>
      </div>
    </>
  );
};

          