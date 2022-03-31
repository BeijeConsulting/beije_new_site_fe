// HELMET
import helmet from "../../../assets/helmet/helmet.json";
import { Helmet } from "react-helmet";

import { get } from "lodash";
import { connect } from "react-redux";
import { ENVIRONMENT } from "../../../utils/properties";

const Seo = (props) => {

  return (
    <Helmet
      title={get(helmet, `${props.page}.${props.languageDuck.currentLanguage.toLowerCase()}.title`)}
      htmlAttributes={{ lang: props.languageDuck.currentLanguage.toLowerCase() }}
      meta={[
        {
          name: description,
          content: get(helmet, `${props.page}.${props.languageDuck.currentLanguage.toLowerCase()}.metaDescription`),
        },
        {
          name: google,
          content: "notranslate"
        }
      ]}
      link={[
        { rel: "canonical", href: `${ENVIRONMENT.PROVIDER_BASE_URL}${props.languageDuck.currentLanguage.toLowerCase()} / ${props.url}` },
        {
          rel: "alternate", hreflang: it, href: `${ENVIRONMENT.PROVIDER_BASE_URL} it / ${props.url}`
        },
        { rel: "alternate", hreflang: en, href: `${ENVIRONMENT.PROVIDER_BASE_URL}en / ${props.url}` },
      ]}
    />
  )
}

const mapStateToProps = (state) => ({
  languageDuck: state.languageDuck
});

export default connect(mapStateToProps)(Seo)