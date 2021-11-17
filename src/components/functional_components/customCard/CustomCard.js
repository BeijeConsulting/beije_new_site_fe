import React from "react"

//import components
import CustomButton from "../../hooks_components/Button/CustomButton"

const CustomCard = (props) => {
    return (
        <div style={props.cardStyle} className={props.cardClassName}>
            {
                !!props.cardTitle &&
                <h1 style={props.titleStyle} className={props.titleClassName}>
                    {props.cardTitle}
                </h1>
            }
            {
                !!props.cardDescription &&
                <p style={props.descriptionStyle} className={props.descriptionClassName}>
                    {props.cardDescription}
                </p>
            }
            {
                props.cardButton &&
                <CustomButton />
            }
            {
                props.cardImg &&
                <img src={props.imgSrc} style={props.imgStyle} className={props.imgClassName} />
            }
            {props.children}
        </div>
    )
}

export default CustomCard

