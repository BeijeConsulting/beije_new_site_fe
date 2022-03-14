import React from "react";
import { useTranslation } from "react-i18next";

// Style
import './Blog.css';

// MUI
import { Box, Container } from "@mui/material";

// Components
import BlogCard from "../../components/functional_components/blogCard/BlogCard";

// Redux
import { connect } from "react-redux";

const Blog = (props) => {

  const { t } = useTranslation();

  const arrayTest = [
    {
      id: 0,
      image: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/06/Hawk-Thumbs-up--e1593406623219.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
      title: [
        {
          lang: "IT",
          translation: "Titolo"
        },
        {
          lang: "GB",
          translation: "Title"
        }
      ],
      subtitle: [
        {
          lang: "IT",
          translation: "Sottotitolo"
        },
        {
          lang: "GB",
          translation: "Subitle"
        }
      ],
      description: [
        {
          lang: "IT",
          translation: "Descrizione bla bla bla..."
        },
        {
          lang: "GB",
          translation: "Description bla bla bla..."
        }
      ],
      postedBy: "nome dell'autore",
      posted: "data"
    },
    {
      id: 1,
      image: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/06/Hawk-Thumbs-up--e1593406623219.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
      title: [
        {
          lang: "IT",
          translation: "Titolo"
        },
        {
          lang: "GB",
          translation: "Title"
        }
      ],
      subtitle: [
        {
          lang: "IT",
          translation: "Sottotitolo"
        },
        {
          lang: "GB",
          translation: "Subitle"
        }
      ],
      description: [
        {
          lang: "IT",
          translation: "Descrizione bla bla bla..."
        },
        {
          lang: "GB",
          translation: "Description bla bla bla..."
        }
      ],
      postedBy: "nome dell'autore",
      posted: "data"
    },
    {
      id: 2,
      image: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/06/Hawk-Thumbs-up--e1593406623219.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
      title: [
        {
          lang: "IT",
          translation: "Titolo"
        },
        {
          lang: "GB",
          translation: "Title"
        }
      ],
      subtitle: [
        {
          lang: "IT",
          translation: "Sottotitolo"
        },
        {
          lang: "GB",
          translation: "Subitle"
        }
      ],
      description: [
        {
          lang: "IT",
          translation: "Descrizione bla bla bla..."
        },
        {
          lang: "GB",
          translation: "Description bla bla bla..."
        }
      ],
      postedBy: "nome dell'autore",
      posted: "data"
    }
  ]

  const getValueFromLang = (values, lang) => {
    let response;
    values.map((value) => {
      if (value.lang === lang) {
        response = value.translation
      }
    })
    return response;
  }

  return (
    <Box
      className={"bg-dark-grey margin-top-container-screens"}
    >
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"padding-0"}>
        BLOG
      </Container>

      {
        arrayTest.map((post, index) => {
          return (
            <div key={index}>
              <BlogCard
                src={post.image}
                title={getValueFromLang(post.title, props.languageDuck.currentLanguage)}
                subtitle={getValueFromLang(post.subtitle, props.languageDuck.currentLanguage)}
                description={getValueFromLang(post.description, props.languageDuck.currentLanguage)}
                postedby={post.postedBy}
                posted={post.posted}
              />
            </div>
          )
        })
      }

    </Box>
  )
}

const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)

export default connect(mapStateToProps)(Blog)