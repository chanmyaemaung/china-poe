import React, { Fragment } from 'react';

import { Header, Data, Label, Footer } from './components';

import { fetchData } from './api/';

import './App.css';

class App extends React.Component {
    state = {
        data: {},
    };

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data });
    }

    render() {
        const { data } = this.state;
        return (
            <Fragment>
                <Header />
                <Data data={data} />
                <Label />
                <Footer />
            </Fragment>
        );
    }
}

export default App;
