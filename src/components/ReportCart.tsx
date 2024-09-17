import React from 'react';

interface props {
    number: String,
    status: "payed" | "no-payed" | "progress",
    date: {
        created: String,
        before: String
    },
    prices: {
        price: String,
        payed: String
    }
}

const ReportCart = (props: props) => {
    return (
        <div className='report_cart'>
            <div className="report_cart-block">
                <div className="report_cart-block-item">
                    <div className="report_cart-row">
                        <span className="report_cart-number">№ {props.number}</span>
                        <span className={'report_cart-status ' + props.status}>{props.status === 'no-payed' ? 'Просрочен' : props.status === 'payed' ? 'Оплачен' : 'Ожидает оплаты '}</span>
                    </div>
                    <div className="report_cart-inf">
                        <div className="report_cart-inf-item">
                            <span>Дата</span>
                            <strong>{props.date.created}</strong>
                        </div>
                        <div className="report_cart-inf-item">
                            <span>Оплатить до</span>
                            <strong>{props.date.before}</strong>
                        </div>
                    </div>
                </div>
                <div className="report_cart-pay">
                    <strong>{props.prices.price} ₽</strong>
                    <span>{props.prices.payed} ₽ оплачено </span>
                </div>
            </div>
            <div className="report_cart-nav">
                <button className='report_cart-download'>
                    <img src="/images/icons/download_xlsx.svg" alt="download_xlsx" />
                </button>
                <button className='report_cart-download'>
                    <img src="/images/icons/download_pdf.svg" alt="download_pdf" />
                </button>
            </div>
        </div>
    );
};

export default ReportCart;