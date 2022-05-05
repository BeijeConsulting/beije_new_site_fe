import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { isEmpty } from "lodash";
import { Helmet } from "react-helmet";

// Style
import '../blog/Blog.css';
import './TeamBeije.scss'

// MUI
import { Box, Container, Divider, Skeleton } from "@mui/material";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// API
// import ApiCalls from "../../services/api/ApiCalls";
import axios from "axios";

// Components
import CustomModal from "../../components/hooks_components/customModal/CustomModal";

const TeamBeije = (props) => {

  const { t } = useTranslation();
  const [state, setState] = useState({
    teamDataResponse: null,
    dataDetail: null,
    modalIsOpen: false
  })

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("teamBeije"));
    props.dispatch(setVisibilityNavbar(true));

    getTeamData();

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  const getTeamData = async () => {
    // let teamDataResponseAPI = await ApiCalls.team_getList();
    let teamDataResponseAPI = await axios.get('http://localhost:4000/teams')
    let teamDataResponse = teamDataResponseAPI.data;

    setState({
      ...state,
      teamDataResponse: teamDataResponse
    })
  }

  const openCard = (idElement) => () => {
    setState({
      ...state,
      modalIsOpen: true,
      dataDetail: idElement
    })
  }

  const closeModal = () => {
    setState({
      ...state,
      modalIsOpen: false,
      dataDetail: null
    })
  }


  return (
    <>
      <Helmet>
        <title>{t('helmet.meta_title.blog')}</title>
        <meta name="description" content={t('helmet.meta_description.blog')} />
        <meta name="keywords" content={t('helmet.keywords.blog')} />
      </Helmet>

      <Box
        className={"bg-dark-grey margin-top-container-screens"}
      >
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"paddingX-container-general-pages blog-first-section-container d-flex justify-center"}
        >
          <Box className={"max-width-1200"}>
            <h1>{t("blog.title")}</h1>
            <p>{t("blog.description")}</p>
          </Box>
        </Container>

        <Divider
          className={"divider"}
        />

        <Container
          component={"section"}
          maxWidth={"false"}
          className={"paddingX-container-general-pages d-flex justify-center"}
        >
          {
            !state.teamDataResponse &&
            <div
              className="d-flex flex-column items-center width-100"
            >
              <div
                className="d-flex flex-row max-width-1200 width-100 marginY-30"
              >
                <Skeleton />
              </div>
            </div>
          }
          {state.teamDataResponse && !isEmpty(state.teamDataResponse) &&
            <Box
              className={"width-100 max-width-1200"}
              sx={{
                margin: '50px 0',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <div
                className="teamBeije_grid_container"
              >
                <div
                  className={`teamBeije_grid_item_text`}
                >
                  <span>{state.teamDataResponse.length}</span>
                </div>

                {
                  state.teamDataResponse.map((item, key) => (
                    <div
                      key={key}
                      className={`teamBeije_grid_items`}
                      style={{
                        width: 100,
                        height: 100,
                        margin: 5,
                        backgroundImage: `url(${item.img})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 8
                      }}
                      onClick={openCard(item)}
                    />
                  ))
                }
              </div>
            </Box>
          }
          {
            isEmpty(state.teamDataResponse) &&
            <div></div>
          }
        </Container>

        <CustomModal
          stateModal={state.modalIsOpen}
          callbackClose={closeModal}
          classNameContainer="teamBeije_modal"
          classNameTxtContainer="teamBeije_modal_content"
          footer={false}
          closingX={true}
          classNameHeader={"teamBeije_modal_header"}
          classNameChildrenContainer={"teamBeije_modal_body_container"}
        >
          {state.dataDetail &&
            <>
              <div
                style={{
                  width: '100%',
                  height: '60%',
                  backgroundImage: `url(${state.dataDetail.img})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '8px 8px 0 0',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  zIndex: -1
                }}
              >
              </div>
              <div
                className="teamBeije_modal_body"
              >
                <p>{state.dataDetail.name}</p>
                <p>_{state.dataDetail.role}</p>
              </div>
            </>
          }
        </CustomModal>
      </Box>
    </>
  )
}

const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)

export default connect(mapStateToProps)(TeamBeije)