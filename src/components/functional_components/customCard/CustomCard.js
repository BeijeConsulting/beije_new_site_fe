import React from "react"

//import components
import CustomButton from "../../functional_components/Button/CustomButton"

const CustomCard = (props) => {

    return (
        <div style={props.cardStyle} className={props.cardClassName} >
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
                    <br/>
                    {props.cardDescription2}
                    <br/>
                    {props.cardDescription3}
                </p>
            }
            {
                props.cardButton &&
                <CustomButton
                    isDisabled={props.isDisabled}
                    type={props.type}
                    isLoading={props.isLoading}
                    currentSize={props.currentSize}
                    clickCallback={props.clickCallback}
                    isBlock={props.isBlock}
                    currentIcon={props.currentIcon}
                    content={props.content}

                />
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

