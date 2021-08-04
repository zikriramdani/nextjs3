import React from 'react'
import App from 'next/app';
import store from '../store/store';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css'

class MyApp extends App {
    static async getInitialProps ({Component, ctx}) {
        return {
          pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
        }
    }

    render() {
        const { Component, pageProps} = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);