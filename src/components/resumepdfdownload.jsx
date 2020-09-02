import React from "react";
import { PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";

import PdfResume from "./resumepdf";

const styles = StyleSheet.create({
    button: {
        textDecoration: "none",
        padding: "10px",
        color: "#4a4a4a",
        backgroundColor: "#f2f2f2",
        //border: "1px solid #4a4a4a"
    }
})

const ResumePdfDownload = () => {
    return (
        <div>
            <PDFDownloadLink 
                document={<PdfResume />} 
                fileName="resumeChiDuong.pdf"
                style={styles.button}>
                {({ blob, url, loading, error }) => {
                    return loading ? 'Loading document...' : 'Download PDF'
                }}        
            </PDFDownloadLink>
        </div>
        
    )
}

export default ResumePdfDownload;