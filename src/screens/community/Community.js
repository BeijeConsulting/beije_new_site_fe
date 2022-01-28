import React, { useEffect, useState } from "react";

import { Row, Typography, Col, Collapse } from "antd";
const { Title } = Typography
const { Panel } = Collapse;

// import action
import { printCommunities } from "../../redux/actions/actions";

// import redux
import { connect, useDispatch } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";

// import style
import './Community.css'

// import assets
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

// import functions 
import { turnToUppercase } from "../../utils/utilities";

// import components
import CustomCard from "../../components/functional_components/customCard/CustomCard";


const Community = (props) => {
  const apiDispatch = useDispatch();
  const primary_bg_page_community = '#d6e3e5'

  const [state, setState] = useState({
    dataContent: []
  });

  useEffect(() => {
    getDataCommunities();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  const getDataCommunities = async () => {
    const communities = await printCommunities(apiDispatch);
    setState((prevState => ({ ...prevState, dataContent: communities })));

  }

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      props.dispatch(setColorHeader(primary_bg_page_community))
    }
  }

  const changeIcon = (panelProps) => {
    if (panelProps.isActive) {
      return (
        <CustomCard
          cardClassName={'community-btn-container'}
          cardButton
          type={'secondary-arrow-btn'}
          currentIcon={
            <MinusOutlined
              className='arrow-icon-btn' />
          }
        />
      )
    }
    else {
      return (

        <CustomCard
          cardClassName={'community-btn-container'}
          cardButton
          type={'secondary-arrow-btn'}
          currentIcon={
            <PlusOutlined
              className='arrow-icon-btn' />
          }
        />
      )
    }
  }



  const printCommunityImages = (item, key) => {
    return (
      <Col
        key={key}
        xs={24}
        md={12}
        lg={8}
        className="community-col-container"
      >
        <Collapse
          accordion
          className="community-collapse"
          bordered={false}
          ghost
          showArrow={false}
          expandIconPosition={"right"}
          expandIcon={(panelProps) => changeIcon(panelProps)}
        >
          <Panel
            header={
              <>
                <CustomCard
                  cardStyle={{ backgroundImage: "linear-gradient(360deg, rgba(50, 62, 72) 0%, rgba(214, 227, 229, -0.71) 90%), url(" + item.cover_img + ")" }}
                  cardClassName={'community-img'}
                />

                <CustomCard
                  cardClassName={'community-card-text-container'}
                  cardDescription={turnToUppercase(item.title_it)}
                  descriptionClassName={'community-title-card'}
                />
              </>
            }
            key={`${key + 1}`}
          >
            <Col>
              <CustomCard
                cardDescription={turnToUppercase(item.title_it)}
                descriptionClassName={'community-title-card-collapse'}
                cardParagraph={item.description_it}
                paragraphClassName={'community-desc-card'}
              />
            </Col>

          </Panel>
        </Collapse>


      </Col>
    )
  }

  return (
    <section className={'community-container'}>
      <Row>
        <Title
          level={1}
        >
          {turnToUppercase('Community')}
        </Title>
      </Row>
      <Row className="community-imges-container">
        {!state.dataContent.error ? state.dataContent.map(printCommunityImages) : 'Error'}
        {/* inserire testo nell'errore */}
      </Row>

    </section>
  )
}

export default connect()(Community)