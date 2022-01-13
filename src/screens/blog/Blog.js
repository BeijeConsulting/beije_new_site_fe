import React from "react";

import { Row, Typography, Col } from "antd";
const { Title, Paragraph } = Typography

// import style
import './Blog.css'

// import assets
import imgTest from '../../assets/images/general/general1.jpg'

// import functions 
import { turnToUppercase } from "../../utils/utilities";

// import components
import CustomCard from "../../components/functional_components/customCard/CustomCard";


const Blog = (props) => {
    const obj = [
        {
            title: 'Prova titolo a caso',
            bg: imgTest
        },
        {
            title: 'Prova titolo a caso',
            bg: imgTest
        },
        {
            title: 'Prova titolo a caso',
            bg: imgTest
        },
        {
            title: 'Prova titolo a caso',
            bg: imgTest
        }
    ]

    const printBlogImages = (item, key) => {
        return (
            <Col
                key={key}
                xs={24}
                md={8}
            >
                <CustomCard
                    cardStyle={{ backgroundImage: item.bg }}
                    cardClassName={'blog-img'}
                    cardParagraph={turnToUppercase(item.title)}
                    paragraphClassName={'prova2'}
                />
            </Col>
        )
    }

    return (
        <section style={{ padding: '100px 20px 30px 20px' }}>
            <Row>
                <Title
                    level={1}
                >
                    BLOG
                </Title>
            </Row>
            <Row className="blog-imges-container">
                {obj.map(printBlogImages)}
            </Row>
        </section>


    )
}

export default Blog