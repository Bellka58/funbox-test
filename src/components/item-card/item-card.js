import React, { useState } from 'react';
import './item-card.scss';
import CardFooter from './card-footer';
import CardTitle from './card-title';

export const cardType = {
  default: 'default',
  selected: 'selected',
  disabled: 'disabled',
};

const ItemCard = ({card, isSelected = false}) => {
  const {
    footerText,
    outOfStockText,
    description,
    name,
    taste,
    portionsCount,
    presentCount,
    additionalInfo,
    weight,
    availability,
  } = card || {};

  const initType = availability ? 
    (isSelected ?
      cardType.selected
      : cardType.default)
    : cardType.disabled;

  const [type, setType] = useState(initType);
  const [isHovered, setIsHovered] = useState(false);

  const [clickWithoutHover, setClickWithoutHover] = useState(false);
  const isHoveredWithoutClick = isHovered && !clickWithoutHover;
  const isSelectedHovered = type === cardType.selected && isHoveredWithoutClick;

  const handleCardClick = () => {
    setClickWithoutHover(true);
    if (type === cardType.disabled) return;
    setType(type === cardType.default ? cardType.selected : cardType.default);
  };


  return (
    <div className="item-card">
      <div
        className={`item-card__main ${type} ${isHoveredWithoutClick ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setClickWithoutHover(false);
        }}
        onClick={handleCardClick}
      >
        <div className="triangle" />
        <img
          className="cat"
          src={require("../../images/Photo.png")}
          alt="cat"
        />
        <div className="weigth">
          <p className="weight-number">{weight}</p>
          <p className="weight-value">кг</p>
        </div>

        <CardTitle 
          description={isSelectedHovered ? 'Котэ не одобряет?' : description}
          name={name}
          taste={taste}
          portionsCount={portionsCount}
          presentCount={presentCount}
          additionalInfo={additionalInfo}
          isSelectedHovered={isSelectedHovered}
        />
      </div>
      <CardFooter
        type={type}
        text={type === cardType.disabled ? outOfStockText : footerText}
        hovered={isHoveredWithoutClick}
        setIsHovered={setIsHovered}
        onClick={handleCardClick}
      />
    </div>
  );
};

export default ItemCard;