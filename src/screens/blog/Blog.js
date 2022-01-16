import React from "react";

import { Row, Typography, Col } from "antd";
const { Title } = Typography

// import style
import './Blog.css'

// import assets
import imgTest from '../../assets/images/general/general4.jpg'
import { PlusOutlined } from '@ant-design/icons';

// import functions 
import { turnToUppercase } from "../../utils/utilities";

// import components
import CustomCard from "../../components/functional_components/customCard/CustomCard";


const Blog = (props) => {
    const obj = [
        {
            title: 'TITOLO NEWS LUNGO CHE OCCUPA TRE RIGHE',
            bg: imgTest,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'TITOLO NEWS LUNGO CHE OCCUPA TRE RIGHE',
            bg: imgTest,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'TITOLO NEWS LUNGO CHE OCCUPA TRE RIGHE',
            bg: imgTest,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'TITOLO NEWS LUNGO CHE OCCUPA TRE RIGHE',
            bg: imgTest,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ]

    const printBlogImages = (item, key) => {
        console.log('item bg: ', item.bg)
        return (
            <Col
                key={key}
                xs={24}
                md={12}
                lg={8}
                className="blog-col-container"
            >
                <CustomCard
                    cardStyle={{ backgroundImage: "linear-gradient(360deg, rgba(50, 62, 72) 0%, rgba(214, 227, 229, -0.71) 90%), url(" + item.bg + ")" }}
                    cardClassName={'blog-img'}
                />

                <div className='blog-card-text-container'>
                    <CustomCard
                        cardDescription={turnToUppercase(item.title)}
                        descriptionClassName={'blog-title-card'}
                        cardParagraph={item.desc}
                        paragraphClassName={'blog-desc-card'}
                    />
                    <CustomCard
                        cardClassName={'blog-btn-container'}
                        cardButton
                        type={'secondary-arrow-btn'}
                        currentIcon={
                            <PlusOutlined
                                className='arrow-icon-btn' />
                        }
                    />
                </div>
            </Col>
        )
    }

    return (
        <section style={{ padding: '100px 20px 30px 20px' }}>
            <Row>
                <Title
                    level={1}
                >
                    {turnToUppercase('Blog')}
                </Title>
            </Row>
            <Row className="blog-imges-container">
                {obj.map(printBlogImages)}
            </Row>
        </section>


    )
}

export default Blog