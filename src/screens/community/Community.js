import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { isEmpty } from "lodash";
import { Helmet } from "react-helmet";

// Style
import '../blog/Blog.css';
import './Community.scss'

// MUI
import { Box, Container, Divider, Skeleton } from "@mui/material";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// API
import ApiCalls from "../../services/api/ApiCalls";
// import axios from "axios";

// Assets
import { profile } from "../../utils/properties";

// Components
import CustomModal from "../../components/hooks_components/customModal/CustomModal";

const Community = (props) => {

  const { t } = useTranslation();
  const [state, setState] = useState({
    teamDataResponse: null,
    dataDetail: null,
    modalIsOpen: false,
    startNumber: 0
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
    let teamDataResponseAPI = await ApiCalls.team_getList();
    // let teamDataResponseAPI = await axios.get('http://localhost:4000/teamBeije')

    // console.log("teamDataResponseAPI", teamDataResponseAPI)

    // teamDataResponseAPI = teamDataResponseAPI.data;

    setState({
      ...state,
      teamDataResponse: teamDataResponseAPI
    })
  }

  useEffect(() => {
    if (state.teamDataResponse?.teamSize) {
      incriseNumber()
    }
  })

  const incriseNumber = () => {
    setTimeout(() => {
      if (state.startNumber < state.teamDataResponse.teamSize) {
        setState({
          ...state,
          startNumber: state.startNumber + 1
        })
      }
    }, 15)
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
        <title>{t('helmet.meta_title.community')}</title>
        <meta name="description" content={t('helmet.meta_description.community')} />
        <meta name="keywords" content={t('helmet.keywords.community')} />
        <meta name="google" content="notranslate" />
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
            <h1>{t("community.title")}</h1>
            <p>{t("community.description.part1")}<br />{t("community.description.part2")}
              <span className="teamBeije_animated_txt">{t("community.description.part3")}</span>
            </p>
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
                  <span>{state.startNumber}</span>
                </div>
                {
                  state.teamDataResponse.team.map((item, key) => (
                    <div
                      key={key}
                      className={`teamBeije_grid_items_container`}
                    >
                      <div
                        className={`teamBeije_grid_items`}
                        style={{
                          width: 100,
                          height: 100,
                          margin: 5,
                          backgroundImage: `url(${item.picImageThumbnail ? item.picImageThumbnail : item.picImage})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          borderRadius: 8,
                          cursor: 'pointer'
                        }}
                        onClick={openCard(item)}
                      />
                    </div>

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
                  height: '75%',
                  backgroundImage: `url(${state.dataDetail.picImage ? state.dataDetail.picImage : profile})`,
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
                <p>{state.dataDetail.firstName}</p>
                {/* <p>_{state.dataDetail.role}</p> */}
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

export default connect(mapStateToProps)(Community)