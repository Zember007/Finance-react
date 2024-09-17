import React from 'react';

interface props {
    action: any
}

const Letter = (props:props) => {
    return (
        <div className="modal__overlay">
            <div className="letter">
                <div className="letter__top">
                    <div className="letter__title">Гарантийное письмо</div>
                    <button onClick={() => { props.action(false) }}><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9355 6.04661C20.2067 5.77541 20.2067 5.33571 19.9355 5.06451C19.6643 4.79332 19.2246 4.79332 18.9534 5.06451L12.5 11.5179L6.04658 5.06451C5.77538 4.79332 5.33568 4.79332 5.06448 5.06451C4.79328 5.33571 4.79328 5.77541 5.06448 6.04661L11.5179 12.5L5.06448 18.9534C4.79329 19.2246 4.79329 19.6643 5.06448 19.9355C5.33568 20.2067 5.77538 20.2067 6.04658 19.9355L12.5 13.4821L18.9534 19.9355C19.2246 20.2067 19.6643 20.2067 19.9355 19.9355C20.2067 19.6643 20.2067 19.2246 19.9355 18.9534L13.4821 12.5L19.9355 6.04661Z" fill="#BDBFC7" />
                    </svg></button>
                </div>
                <div className="letter__column">
                    <div className="letter__box">
                        <div className="letter__box-text">Укажите сумму и дату погашения долга</div>
                        <div className="letter__box-data">
                            <div className="letter__box-inputs">
                                <input className='letter__box-inpt' placeholder='50 000,00 ₽ ' type="text" />
                                <div className="inpt_date-box">
                                    <input type="text" placeholder='Дата погашения' className="inpt_date-value" />
                                    <input type="date" className="inpt_date" />
                                    <img src="/images/icons/calendar.svg" alt="calendar" />
                                </div>
                            </div>
                            <button>Скачать</button>
                        </div>
                    </div>
                    <div className="letter__box">
                        <div className="letter__box-text">Загрузите подписанный документ и отправьте запрос</div>
                        <div className="letter__box-data">
                            <div className="letter__box-upload">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.24647 0.948154C7.83423 0.535793 7.16573 0.535793 6.75348 0.948154L4.13849 3.56388C3.93194 3.7705 3.93055 4.10499 4.13539 4.31331C4.34271 4.52414 4.68213 4.52557 4.89121 4.31649L6.9722 2.2355V10.8383C6.9722 11.1298 7.20849 11.3661 7.49998 11.3661C7.79146 11.3661 8.02776 11.1298 8.02776 10.8383V2.2355L10.1082 4.31597C10.3171 4.52484 10.6561 4.52365 10.8635 4.31332C11.0689 4.10508 11.0677 3.77018 10.8609 3.56336L8.24647 0.948154Z" fill="#8C909C" />
                                    <path d="M1.81581 14.3611C1.33025 14.3611 0.924917 14.1985 0.599806 13.8734C0.273991 13.5476 0.111084 13.1419 0.111084 12.6564V10.6265C0.111084 10.335 0.347378 10.0987 0.638862 10.0987C0.930345 10.0987 1.16664 10.335 1.16664 10.6265V12.6564C1.16664 12.8182 1.2342 12.967 1.36931 13.1029C1.50512 13.238 1.65395 13.3055 1.81581 13.3055H13.1841C13.346 13.3055 13.4948 13.238 13.6306 13.1029C13.7658 12.967 13.8333 12.8182 13.8333 12.6564V10.6265C13.8333 10.335 14.0696 10.0987 14.3611 10.0987C14.6526 10.0987 14.8889 10.335 14.8889 10.6265V12.6564C14.8889 13.1419 14.7263 13.5472 14.4012 13.8724C14.0754 14.1982 13.6697 14.3611 13.1841 14.3611H1.81581Z" fill="#8C909C" />
                                </svg>
                            </div>
                            <textarea placeholder='Добавить сообщение' className="letter__data"></textarea>
                        </div>
                    </div>
                </div>
                <button onClick={() => { props.action(false) }} className="submit-letter">Отправить</button>
            </div>
        </div>
    );
};

export default Letter;