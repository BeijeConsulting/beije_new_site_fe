import React from "react"

import { Image, Typography } from "antd"

const { Title } = Typography

//import components
import CustomButton from "../../functional_components/Button/CustomButton"

const CustomCard = (props) => {

    return (
        <div style={props.cardStyle} className={props.cardClassName} >
            {
                !!props.cardTitle &&
                <Title
                    level={props.titleLevel}
                    className={props.titleClassName}
                >
                    {props.cardTitle}
                </Title>
            }
            {
                !!props.cardDescription &&
                <p style={props.descriptionStyle} className={props.descriptionClassName}>
                    {props.cardDescription}
                    <br />
                    {props.cardDescription2}
                    <br />
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
                <Image
                    alt={props.imgAlt}
                    fallback={props.imgFallback}
                    height={props.imgHeight}
                    width={props.imgWidth}
                    placeholder={props.imgPlaceholder}
                    preview={props.imgPreview}
                    src={props.imgSrc}
                    onError={props.imgOnError}
                // className={imgClassName}
                />
            }
            {props.children}
        </div>
    )
}

CustomCard.defaultProps = {
    titleLevel: 1
}

export default CustomCard

