import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import TagManager from "react-gtm-module"

const styles = {
    layout: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    header: {
        height: 60,
    },
    main: {
        flex: 1,
    },
    footer: {
        height: 60,
    },
}

const tagManagerArgs = {
    gtmId: "G-LTLS83ZWYR",
}

export default class RootApp extends App {
    componentDidMount() {
        TagManager.initialize(tagManagerArgs)
    }

    render() {
        const { Component, ...other } = this.props;
        return (
            <>
                <Head>
                    <title>HOYA TECH</title>
                </Head>
                <Layout>
                    <Component {...other} />
                </Layout>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
            </>
        );
    }
}