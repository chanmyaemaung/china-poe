import React from 'react';

import './Label.css';

const Label = () => {
    return (
        <section id="countryLabel" className="smooth">
            <div className="dark-overlay">
                <div className="row">
                    <div className="col">
                        <div className="container pt-5">
                            <h3>နိင်ငံအလိုက် ကူးစက်နှုန်း</h3>
                            <p>
                                အောက်တွင် နိုင်ငံအလိုက် ကူးစက်ခံရသည့်
                                အချက်အလက်များကို ကြည့်ရှုနိုင်ပါသည်။
                            </p>
                            <blockquote>ဆောင်ရွက်နေဆဲ...</blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Label;
