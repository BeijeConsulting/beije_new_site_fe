import React from "react";
import { useTranslation } from "react-i18next";

import { List, Typography } from "antd";


// import style
import './CustomList.css'

const CustomList = (props) => {

    const { t } = useTranslation();

    return (
        <List
            size={props.size}
            header={props.header}
            footer={props.footer}
            bordered={props.bordered}
            dataSource={props.data}
            renderItem={item =>
                <List.Item
                    className={`list-li ${props.indent ? '' : 'list-li-indent'} ${props.borderBottom ? '' : 'list-li-borderLess'}`}
                >
                    {props.markList ? <Typography.Text>{props.markerList}</Typography.Text> : null}
                    {t(item)}
                </List.Item>}
        />

    )
}

CustomList.defaultProps = {
    size: 'large',
    markList: false,
    indent: true,
    bordered: false,
    borderBottom: false
}

export default CustomList