import App from 'next/app';
import store from '../store/store';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { PersistGate } from "redux-persist/integration/react";

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be access by the client
        return { pageProps: pageProps };
    }

    render() {
        //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
        const {Component, pageProps } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

// withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);