import { Box, Container } from "@mui/material"
import CustomCarousel from "../customCarousel/CustomCarousel"

const CarouselCaseStudies = () => {
  return (
    <Container
      component={"section"}
      maxWidth={"false"}
      className={"up-fourth-section paddingX-container-general-pages position-relative"}
    >
      <Box>
        <h2>Case studies</h2>
      </Box>

      <Container
        component={"section"}
        maxWidth={"false"}
        className={"up-fifth-section-container d-flex justify-center"}
      >
        <Box className="width-100 max-width-1800">
          {
            !state.caseStudiesResponse &&
            <Skeleton />
          }
          {
            state.caseStudiesResponse && !isEmpty(state.caseStudiesResponse) &&
            < CustomCarousel
              upCarousel
              obj={state.caseStudiesResponse}
              classNameSwiperContainer={"swiper-container-up"}
              imgCarousel
            />
          }
          {
            isEmpty(state.caseStudiesResponse) &&
            <div></div>
          }
        </Box>
      </Container>
    </Container>
  )
}

export default CarouselCaseStudies