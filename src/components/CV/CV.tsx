import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  usePDF,
} from "@react-pdf/renderer";
import { ICvInfo } from "../../state/cvInfo/cvInfoSlice";

const styles = StyleSheet.create({
  page: { backgroundColor: "white", fontFamily: "Times-Roman" },
  section: {
    color: "black",
    textAlign: "center",
    margin: "20 0 15",
    fontSize: 25,
  },
  contactInfo: { fontSize: "13px", paddingTop: "10px" },
  subTitle: {
    fontSize: "16px",
    color: "#0059b3",
    fontFamily: "Times-Bold",
    padding: "0 0 8px",
  },
  subSection: { padding: "10px 22px 0" },
  rowSection: { flexDirection: "row", display: "flex" },
});

const MyDocument = (props: Omit<ICvInfo, "photo">) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text
            style={[
              { borderBottom: "2" },
              { borderBottomColor: "grey" },
              { paddingBottom: 10 },
            ]}
          >
            {props.name} {props.lastName}
          </Text>
          <Text style={styles.contactInfo}>
            {props.contacts.address} | {props.contacts.phone} |{" "}
            {props.contacts.email} | {props.contacts.gitHub}
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Summary</Text>
          <Text style={[{ fontSize: "14" }]}>{props.description}</Text>
        </View>
        {props.projects.length > 0 && (
          <View style={styles.subSection}>
            <Text style={styles.subTitle}>Projects</Text>
            {props.projects.map((project) => {
              return (
                <View style={[{ marginBottom: "7" }]}>
                  <Text
                    style={[{ fontSize: "16px" }, { fontFamily: "Times-Bold" }]}
                  >
                    {project.title}
                  </Text>
                  <Text style={[{ fontSize: "13" }, { padding: "5 0" }]}>
                    {project.description}
                  </Text>
                </View>
              );
            })}
          </View>
        )}
        {props.education.length > 0 && (
          <View style={styles.subSection}>
            <Text style={styles.subTitle}>Education</Text>
            {props.education.map((ed) => {
              return (
                <View style={[{ marginBottom: "7" }]}>
                  <Text
                    style={[
                      { fontSize: "13px" },
                      { backgroundColor: "#e6eeff" },
                      { fontFamily: "Times-Bold" },
                    ]}
                  >
                    {ed.degree}{" "}
                    <Text style={[{ fontFamily: "Times-Roman" }]}>
                      {ed.timePeriod.replace(/\s{2,}/g, " ")}
                    </Text>
                  </Text>
                  <Text
                    style={[{ fontSize: "13px" }, { fontFamily: "Times-Bold" }]}
                  >
                    {ed.school}
                  </Text>
                </View>
              );
            })}
          </View>
        )}
        {props.experience.length > 0 && (
          <View style={styles.subSection}>
            <Text style={styles.subTitle}>Experience</Text>
            {props.experience.map((ex) => {
              return (
                <View style={[{ marginBottom: "7" }]}>
                  <Text
                    style={[
                      { backgroundColor: "#e6eeff" },
                      { fontSize: "13px" },
                      { fontFamily: "Times-Bold" },
                    ]}
                  >
                    {ex.position}, {ex.company}{" "}
                    <Text style={[{ fontFamily: "Times-Roman" }]}>
                      {ex.timePeriod.replace(/\s{2,}/g, " ")}
                    </Text>
                  </Text>

                  <Text
                    style={[
                      { fontSize: "14" },
                      { fontFamily: "Times-Italic" },
                      { padding: "5 0" },
                    ]}
                  >
                    {ex.positionDescription}
                  </Text>
                </View>
              );
            })}
          </View>
        )}
        <View style={styles.rowSection}>
          {props.skills.length > 0 && (
            <View style={styles.subSection}>
              <Text style={styles.subTitle}>Skills</Text>
              {props.skills.map((skill) => {
                return <Text style={[{ fontSize: "14" }]}>- {skill.text}</Text>;
              })}
            </View>
          )}
          {props.languages.length > 0 && (
            <View style={styles.subSection}>
              <Text style={styles.subTitle}>Languages</Text>
              {props.languages.map((lan) => {
                return (
                  <Text style={[{ fontSize: "14" }]}>
                    {lan.text} - {lan.level}
                  </Text>
                );
              })}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
