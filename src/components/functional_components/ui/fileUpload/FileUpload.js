import React, { useState, useEffect } from 'react';

//TRANSLATIONS
import { useTranslation } from "react-i18next";

// MUI
import { Typography, Button, Icon } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';


//STYLE
import './FileUpload.css';

const FileUpload = (props) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (selectedFile !== null) {
            if (props.onFileChange) props.onFileChange(selectedFile);
        }
    }, [selectedFile])

    // Funzione per gestire il caricamento del file
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const resetFile = () => {
        setSelectedFile(null);
    }

    return (
        <div style={props?.containerStyle}>
            <Typography variant="h5">{t("upload.uploadFile")}</Typography>
            <input
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }} // Nasconde l'input originale
                id="fileInput"
            />
            <label htmlFor="fileInput">
                <Button variant="contained" component="span" className="select-file-class" >
                    {t('upload.selectFile')}
                </Button>
            </label>
            {selectedFile && (
                <Typography variant="body1" paragraph className="select-file-paragraph">{t('upload.selectedFile')}: {selectedFile.name}  
                <Tooltip title={t('upload.close')}>
                    <CloseIcon onClick={resetFile}/>
                </Tooltip></Typography>
            )}
        </div>
    )
}

export default FileUpload
