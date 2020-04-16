import React from 'react';
import cx from 'classnames';
import styles from './Header.module.css';

const Header = () => {
    return (
        <section className={cx(styles.heroBanner, styles.smooth)}>
            <div className={cx(styles.darkOverlay)}>
                <div className="row">
                    <div className="col">
                        <h3>အချိန်နှင့်တစ်ပြေးညီ အချက်ပြ‌ဒေတာ</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
