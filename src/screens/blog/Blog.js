import React, { useEffect } from "react";

import { Row, Typography, Col } from "antd";
const { Title } = Typography

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";

// import style
import './Blog.css'

// import assets
import { PlusOutlined } from '@ant-design/icons';

// import functions 
import { turnToUppercase } from "../../utils/utilities";

// import components
import CustomCard from "../../components/functional_components/customCard/CustomCard";


const Blog = (props) => {

    const primary_bg_page_blog = '#d6e3e5'

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            props.dispatch(setColorHeader(primary_bg_page_blog))
        }
    }

    const printBlogImages = (item, key) => {
        return (
            <Col
                key={key}
                xs={24}
                md={12}
                lg={8}
                className="blog-col-container"
            >
                <CustomCard
                    cardStyle={{ backgroundImage: "linear-gradient(360deg, rgba(50, 62, 72) 0%, rgba(214, 227, 229, -0.71) 90%), url(" + item.cover_img.desktop + ")" }}
                    cardClassName={'blog-img'}
                />

                <div className='blog-card-text-container'>
                    <CustomCard
                        cardDescription={turnToUppercase(item.title)}
                        descriptionClassName={'blog-title-card'}
                        cardParagraph={item.subtitle}
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
        <section className='blog-container'>
            <Row>
                <Title
                    level={1}
                >
                    {turnToUppercase('Blog')}
                </Title>
            </Row>
            <Row className="blog-imges-container">
                {props.blogApiDuck.blog_obj_api.map(printBlogImages)}
            </Row>
        </section>


    )
}

const mapStateToProps = state => ({
    blogApiDuck: state.blogApiDuck
})

export default connect(mapStateToProps)(Blog)