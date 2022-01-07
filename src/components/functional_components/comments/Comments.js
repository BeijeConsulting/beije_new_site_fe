import React from 'react'

//import style
import './Comments.css'

//import components
import CustomCard from '../customCard/CustomCard'

const Comments = (props) => {
    return (
        <div className={props.commentsContainerStyle}>
            <CustomCard
                imgPreview={false}
                cardClassName={props.profilePictureStyle}
                cardImg
                imgAlt={props.imgAlt}
                imgSrc={props.imgSrc}
                imgClassName={props.imgClassName}
            />

            <CustomCard
                cardDescription={props.commentsText}
                descriptionClassName={props.commentsTextStyle}
            />

            <CustomCard
                cardDescription={props.name}
                cardDescription2={props.surname}
                descriptionClassName={props.signatureStyle}
            />
        </div>
    )
}

Comments.defaultProps = {
    commentsText: 'Here there is text of the comment',
    name: 'Name',
    surname: 'surname',
    commentsContainerStyle: 'comments-container academy-gsap-single-comment',
    profilePictureStyle: 'comments-profile-picture',
    commentsTextStyle: 'comments-text',
    signatureStyle: 'comments-signature'
}

export default Comments