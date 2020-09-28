import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from "../../assets/JenishaThomasResume.pdf";
import "./resume.styles.scss"

class Resume extends React.Component {
    render () {
        return (
            <Document file={resume}>
                <Page pageNumber={1}/>
            </Document>
        )
    }
}

export default Resume