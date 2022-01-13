import React, { useEffect, useRef } from 'react'

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import style
import './Comments.css'

//import components
import CustomCard from '../customCard/CustomCard'

const Comments = (props) => {

    const ref = useRef(null)

    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const element = ref.current;

        const commentEl = element.querySelectorAll('.comments-el-gsap');

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',
            }
        })

        t1.from(commentEl, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })

    }, [])


    return (
        <div
            ref={ref}
            className={props.commentsContainerStyle}
        >
            <CustomCard
                imgPreview={false}
                cardClassName={`comments-el-gsap ${props.profilePictureStyle} ${props.profilePictureImg}`}
                cardImg
            // imgAlt={props.imgAlt}
            // imgSrc={props.imgSrc}
            // imgClassName={props.imgClassName}
            />
            <CustomCard
                cardClassName={`comments-el-gsap ${props.commentsTextContainerStyle}`}
                cardDescription={props.commentsText}
                descriptionClassName={props.commentsTextStyle}
            />

            <CustomCard
                cardClassName={`comments-el-gsap`}
                cardDescription={props.name}
                cardDescription2={props.surname}
                descriptionClassName={props.signatureStyle}
            />

        </div>
    )
}

Comments.defaultProps = {
    commentsText: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in.',
    name: 'Name',
    surname: 'surname',
    commentsTextContainerStyle: 'commets-text-container',
    commentsContainerStyle: 'comments-container academy-gsap-single-comment',
    profilePictureStyle: 'comments-profile-picture',
    // profilePictureImg: 'comments-profile-picture-img',
    commentsTextStyle: 'comments-text',
    signatureStyle: 'comments-signature'
}

export default Comments