import React from 'react';
import { wordsByNumber } from '../../../utils/words';

const CardTitle = ({
    description = '',
    name = '',
    taste = '',
    portionsCount = 1,
    presentCount = 1,
    additionalInfo = '',
    isSelectedHovered= false,
}) => {

  return (
    <div className="card-title">
        <p className={`description ${isSelectedHovered ? 'active' : ''}`}>{description}</p>
          <p className="name">{name}</p>
          <p className="taste">{taste}</p>
        <div className="additional">
            <p className="portions">
                <b>{portionsCount}</b> {wordsByNumber(portionsCount, ['порция', 'порции', 'порций'])}
            </p>
            {!!presentCount && (
                <p className="present">
                    <b>{presentCount > 1 ? presentCount : ''}</b> {wordsByNumber(presentCount, ['мышь', 'мыши', 'мышей'])} в подарок
                </p>
            )}
              <p>{additionalInfo}</p>
        </div>
    </div>
  );
};

export default CardTitle;