import React, { Component, useState, useEffect } from 'react';
import styles from "./index.less";
import { Button } from "antd-mobile";
import http from "@/http/request.js";
import { urlDelQuery, getUrlQuery } from "@/utils/url-utils";
import { connect } from "react-redux";
import SendVerifyCode from "@/components/sendCode/sendcode";
import Loaders from "@/components/loader/index";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSend: false,
            arr: ['1111', '222222', '33333', '444444'],
            current: ""
        };
    }
    static defaultProps = {
        type: '首页'
    }

    componentDidMount() {

    }

    handle = () => {
        this.setState({
            isSend: true
        });
    }

    clickInfo = (item) => {
        this.props.history.push(`home/info/${item}`);
    }

    clickDom = (item) => {
        this.setState({
            current: item
        });
        setTimeout(() => {
            this.props.history.push(`home/info/${item}`);
        }, 1000);
    }

    render() {
        const { current, arr } = this.state;
        return (
            <div>
                <div className={styles["home"]}>首页</div>
                <div>当前：{current}</div>
                {
                    arr.map(item => {
                        return <p onClick={() => this.clickDom(item)} style={{ fontSize: '30px' }} key={item}><a>{item}</a></p>;
                    })
                }
            </div>
        );
    }
};

export default Home;
