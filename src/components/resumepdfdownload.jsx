import React, { useState, useEffect } from 'react';
import { PDFViewer, PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";

import PdfResume from "./resumepdf";

const styles = StyleSheet.create({
    button: {
        textDecoration: "none",
        marginRight: "0px",
        //padding: "7px",
        //color: "#4a4a4a",
        //backgroundColor: "#f1f1f1",
        fontSize: "15px",
        //border: "1px solid #4a4a4a"
    },
})

const ResumePdfDownload = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div>
            {isClient && (
                <PDFDownloadLink
                    document={<PdfResume />} 
                    style={styles.button}>
                    {({ blob, url, loading, error }) => {
                        return loading ? 'Loading document...' : 
                        <a href={url} target="blank">PDF</a>
                    }}        
                </PDFDownloadLink>
            )} 
        </div>
    )
}

export default ResumePdfDownload;