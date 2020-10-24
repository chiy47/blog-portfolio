import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";

import PdfResume from "./resumepdf";



const ResumePdfDownload = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div>
            {isClient && (
                <PDFDownloadLink
                    document={<PdfResume />} >
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