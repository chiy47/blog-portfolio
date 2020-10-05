import React from "react";
import { Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },

    name: {
        fontSize: 36,
        textAlign: 'center',
    },

    title: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 15,
    },

    contact: {
        fontSize: 11,
        textAlign: 'center',
        marginBottom: 5,
    },

    about: {
        margin: 14,
        fontSize: 11,
        textAlign: 'center',
    },
    
    linkItem: {
        textDecoration: "none",
        color: 'black',
    },
    
    section: {
        paddingBottom: 10,
        borderBottom: .5,
    },
    
    lastSection: {
        paddingBottom: 5,
    },

    sectionTitle: {
        fontSize: 14,
        paddingBottom: 9,
        marginTop: 14,
        marginLeft: 14,
    },

    jobTitle: {
        paddingTop: 10,
        fontSize: 12,
        paddingBottom: 7,
        marginLeft: 14,
    },
    
    jobDescription: {
        fontSize: 10,
        textAlign: 'justify',
        paddingBottom: 5,
        marginLeft: 14,
    },
});


const PdfResume = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <View style={styles.section}>
                    <View>
                        <Text style={styles.name}>Chi Duong</Text>

                        <Text style={styles.title}>Full Stack Web Developer</Text>
                    </View>
                    <View>
                        <Text style={styles.contact}>
                            Maryland, USA
                        </Text>

                        <Text style={styles.contact}>
                        <Link style={styles.linkItem} src="tel:240-584-3783">
                                240-584-3783</Link>
                        </Text>

                        <Text style={styles.contact}>
                            <Link style={styles.linkItem} src="mailto:chiduong4107@gmail.com">
                                chiduong4107@gmail.com</Link>
                        </Text>

                        <Text style={styles.contact}>
                            <Link style={styles.linkItem} src="https://github.com/chiy47">
                                https://github.com/chiy47</Link>
                        </Text>

                        <Text style={styles.about}>
                        A technology enthusiast is eager to find a junior position and build interesting projects.
                        </Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        Technical Skills
                    </Text>

                    <Text style={styles.jobDescription}>
                        Languages: JavaScript, HTML, CSS
                    </Text>
                    <Text style={styles.jobDescription}>
                        Development: Node.js, Express.js, MongoDB, Gatsby.js, React
                    </Text>                    
                </View>
                
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        Projects
                    </Text>

                    <View>
                        <Text style={styles.jobTitle}>
                            Blog and Portfolio: A Personal Blog and Portfolio (08/2020 - present)
                        </Text>

                        <Text style={styles.jobDescription}> 
                            -powered by Contentful, GatsbyJS and Netlify
                        </Text>

                        <Text style={styles.jobDescription}>
                            <Link style={styles.linkItem} src="https://musing-swirles-ab27a1.netlify.app/">
                            -demo: https://musing-swirles-ab27a1.netlify.app/</Link>
                        </Text>

                        <Text style={styles.jobDescription}>
                            <Link style={styles.linkItem} src="https://github.com/chiy47/blog-portfolio">
                            -repo: https://github.com/chiy47/blog-portfolio</Link>
                        </Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        Education
                    </Text>

                    <Text style={styles.jobTitle}>
                        Bachelor of Computer Science (06/2017 - 12/2019)
                    </Text>

                    <Text style={styles.jobDescription}>
                        Towson University
                    </Text>

                    <Text style={styles.jobDescription}>
                        
                    </Text>

                    <Text style={styles.jobTitle}>
                        Doris K. Lidtke Excellence in Service Award Scholarship (05/2018)
                    </Text>

                    <Text style={styles.jobDescription}>
                        Towson University
                    </Text>

                    <Text style={styles.jobTitle}>
                        Dean’s List (4 semesters)
                    </Text>
                </View>

                <View style={styles.lastSection}>
                    <Text style={styles.sectionTitle}>
                        Work
                    </Text>

                    <Text style={styles.jobTitle}>
                        Math Tutor (06/2017 - 05/2018)
                    </Text>

                    <Text style={styles.jobDescription}>
                        Towson University
                    </Text>

                    <Text style={styles.jobDescription}>
                        -tutored Calculus, Linear Algebra, and Statistics for students
                    </Text>
                </View>
            </Page>
        </Document>
    )
}

export default PdfResume;