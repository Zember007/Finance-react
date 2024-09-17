
import React from 'react';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="logo">
                <img src="/images/icons/sidebar/logo.svg" alt="icon" />
            </div>
            <div className="sidebar__box">
                <div className="sidebar__box-list">
                    <div className="sidebar__box-item">
                        <img src="/images/icons/sidebar/1.svg" alt="icon" />
                    </div>
                    <div className="sidebar__box-item">
                        <img src="/images/icons/sidebar/2.svg" alt="icon" />
                    </div>
                    <div className="sidebar__box-item">
                        <img src="/images/icons/sidebar/3.svg" alt="icon" />
                    </div>
                </div>
                <div className="sidebar__box-list">
                    <div className="sidebar__box-item">
                        <img src="/images/icons/sidebar/4.svg" alt="icon" />
                    </div>
                    <div className="sidebar__box-item">
                        <img src="/images/icons/sidebar/5.svg" alt="icon" />
                    </div>
                </div>
                <div className="sidebar__box-list">
                    <div className="sidebar__box-item">
                        <img src="/images/icons/sidebar/6.svg" alt="icon" />
                    </div>
                    <div className="sidebar__box-item">
                        <img src="/images/icons/sidebar/7.svg" alt="icon" />
                    </div>
                </div>
                <button>
                    <img src="/images/icons/sidebar/open.svg" alt="open" />
                </button>
            </div>
            <div className="sidebar__avatar">
                <span>ИБ</span>
            </div>
        </div>
    );
};

export default Sidebar;