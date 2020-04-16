import React from 'react';
import CountUp from 'react-countup';

import './Data.css';

const Data = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'ခဏစောင့်...';
    }

    return (
        <section id="infoData" className="smooth">
            <h3 className="text-center text-grey mt-4">
                တစ်ကမ္ဘာလုံးဆိုင်ရာ အချက်အလက်
            </h3>
            <div className="container">
                <p className="text-muted text-center">
                    နောက်ဆုံးရက်စွဲ : <span className="chanFont">{new Date(lastUpdate).toDateString('')}</span>
                </p>
                <div className="row">
                    <div style={{borderLeft: '4px solid #f79009'}} className="col md-4 text-center shadow p-3 mb-5 mr-1 bg-white rounded">
                        <i className="fas fa-procedures text-warning fa-2x"></i>
                        <p>ကူးစက်</p>
                        <p>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.75}
                                separator=","
                            />
                        </p>
                    </div>
                    <div style={{borderLeft: '4px solid #f70959'}} className="col md-4 text-center shadow p-3 mb-5 mr-1 bg-white rounded">
                        <i className="fas fa-dizzy text-danger fa-2x"></i>
                        <p>သေဆုံး</p>
                        <p>
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.75}
                                separator=","
                            />
                        </p>
                    </div>
                    <div style={{borderLeft: '4px solid #6fdb7f'}} className="col md-4 text-center mb-5 shadow p-3 bg-white rounded">
                        <i className="fas fa-smile-beam text-success fa-2x"></i>
                        <p>နလန်ထူ</p>
                        <p>
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.75}
                                separator=","
                            />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Data;
