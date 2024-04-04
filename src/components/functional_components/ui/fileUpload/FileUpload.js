import React, { useState, useEffect } from 'react';

//TRANSLATIONS
import { useTranslation } from "react-i18next";

// MUI
import { Typography, Button, Icon } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';

//UTILS
import cloneDeep from 'lodash/cloneDeep';


//STYLE
import './FileUpload.css';

const FileUpload = (props) => {

    const [selectedFiles, setSelectedFiles] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        if (selectedFiles.length > 0) {
            if (props.onFileChange) props.onFileChange(selectedFiles);
        }
    }, [selectedFiles])

    // Funzione per gestire il caricamento del file
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const cloneFiles = cloneDeep(selectedFiles);
        cloneFiles.push(file);
        setSelectedFiles(cloneFiles);
    };

    const resetFiles = (index) => {
        const cloneFiles = cloneDeep(selectedFiles);
        cloneFiles.splice(index, 1);
        setSelectedFiles(cloneFiles);
    }

    return (
        <div style={props?.containerStyle}>
            <Typography variant="h6">{t("upload.uploadFile")}</Typography>
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
            {selectedFiles.length > 0 && (
                <div>
                    {selectedFiles.map((file, index) => (
                        <Typography variant="body1" paragraph key={index + Date.now()} className="select-file-paragraph">{t('upload.selectedFile')}: {file.name}
                            <Tooltip title={t('upload.close')}>
                                <CloseIcon onClick={() => resetFiles(index)} />
                            </Tooltip></Typography>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FileUpload
