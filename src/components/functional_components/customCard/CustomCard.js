import React from 'react'
import { Image, Typography } from "antd"

//import components
import CustomButton from "../../functional_components/Button/CustomButton"

const { Title, Paragraph } = Typography

const CustomCard = (props) => {

    const mouseEnter = () => {
        if (props.callbackMouseEnter != undefined) {
            props.callbackMouseEnter()
        }
    }

    const mouseLeave = () => {
        if (props.callbackMouseEnter != undefined) {
            props.callbackMouseLeave()
        }
    }

    return (
        <div
            style={props.cardStyle}
            className={props.cardClassName}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
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
                !!props.cardParagraph &&
                <Paragraph
                    className={props.paragraphClassName}
                    ellipsis={props.ellipsis}>
                    {props.cardParagraph}
                </Paragraph>
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
                    classNameBtn={props.classNameBtn}
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

