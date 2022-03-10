import React from "react";

// MUI
import {Stack } from "@mui/material";

// Style
import "./SocialLinks.css"

// Constants
import { social_list } from "../../../utils/properties";

// Components
import CustomIconButton from "../ui/customIconButton/CustomIconButton";

const SocialLinks = (props) => {

  const printSocial = (item, key) => {
    return (
      <CustomIconButton
        key={key}
        ariaLabel={item?.ariaLabel}
        type={item?.type}
        classNameIcon={item?.classNameIcon}
        iconFontAwsome={item?.icon}
        href={item?.link_to}
        target={"_blank"}
      />
    )
  }
  return (
    <Stack direction="row" spacing={2} className={`justify-center ${props.classNameSocialContainer}`}>
      {social_list?.map(printSocial)}
    </Stack>
  )
}

export default SocialLinks