import React from 'react';

const Infornation = () => {
    return (
        <div className='information'>
            <div className="information__top">
                <div className="information__title">Информация</div>
                <div className="information__close">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645C14.1583 3.45118 13.8417 3.45118 13.6464 3.64645L9 8.29289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L8.29289 9L3.64645 13.6464C3.45118 13.8417 3.45118 14.1583 3.64645 14.3536C3.84171 14.5488 4.15829 14.5488 4.35355 14.3536L9 9.70711L13.6464 14.3536C13.8417 14.5488 14.1583 14.5488 14.3536 14.3536C14.5488 14.1583 14.5488 13.8417 14.3536 13.6464L9.70711 9L14.3536 4.35355Z" fill="#BDBFC7" />
                    </svg>
                </div>
            </div>
            <div className="information__box">
                <div className="information__item">
                    <span>Задолженность</span>
                    <strong>Отсутствует</strong>
                </div>
                <div className="information__item">
                    <span>Баланс</span>
                    <strong>150 000.00 RUB</strong>
                </div>
                <div className="information__item">
                    <span>Кредитный лимит</span>
                    <strong>Неограничен</strong>
                </div>
                <div className="information__item">
                    <span>Лимит по договору </span>
                    <strong>Не установлен</strong>
                </div>
                <div className="information__item">
                    <span>Статус</span>
                    <strong>Активно</strong>
                </div>
            </div>
        </div>
    );
};

export default Infornation;