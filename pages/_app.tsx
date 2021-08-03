import React from 'react'
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css'

export default withRedux(initStore)(class MyApp extends App {
  static async getInitialProps ({Component, ctx}) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }

  render () {
    const {Component, pageProps, store} = this.props
    // return <Provider store={store}>
    //     <Component {...pageProps} />
    //   </Provider>
	return <Component {...pageProps} />
  }
})
