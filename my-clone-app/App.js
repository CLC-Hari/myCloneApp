import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <Image
            source={require("./assets/sait-logo.png")}
            style={styles.headerImage}
          />
        </View>

        <View style={styles.centerContainer}>
          <Text style={styles.title}>Courses</Text>
        </View>

        <View style={styles.rightContainer}></View>
      </View>

      <ScrollView style={styles.scrollView}>
        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.homeButtonText}>SAIT Homepage</Text>
        </TouchableOpacity>
        {[
          {
            id: 1,
            title: "Winter 2025 Mobile Application Development (CPRG-303-E)",
            code: "202430 CPRG-303-E",
          },
          {
            id: 2,
            title:
              "Winter 2025 Emerging Trends in Software Development (INTP-302-B)",
            code: "202430 INTP-302-B",
          },
          {
            id: 3,
            title:
              "Winter 2025 Software Projects: Analysis, Design, and Management (CPSY-301-F)",
            code: "202430 CPSY-301-F",
          },
        ].map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <Image
              source={require("./assets/course-bg.png")}
              style={styles.courseImage}
            />
            <View style={styles.courseTextContainer}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseSubtitle}>
                {course.code} • Winter 2025
              </Text>
            </View>
            <View style={styles.courseIconsContainer}>
              <View style={styles.courseIcons}>
                <Ionicons name="ellipsis-horizontal" size={24} color="white" />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="calendar-outline" size={26} color="#666" />
          <Text style={styles.navText}>Upcoming</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="grid-outline" size={26} color="#666" />
          <Text style={styles.navText}>Courses</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="notifications-outline" size={26} color="#666" />
          <Text style={styles.navText}>Notifications</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  time: { fontSize: 18 },

  rightIcons: { flexDirection: "row", gap: 10 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
    height: 50,
    paddingTop: 10,
  },

  leftContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },

  centerContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },

  headerImage: {
    width: 38,
    height: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  homeButton: {
    backgroundColor: "#fff",
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  homeButtonText: { fontSize: 14 },
  scrollView: { flex: 1 },

  courseCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 15,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  courseImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  courseTextContainer: {
    padding: 10,
    borderTopWidth: 4,
    borderColor: "#4C88A7",
  },
  courseTitle: { fontSize: 17, fontWeight: "bold" },
  courseSubtitle: {
    fontSize: 12,
    color: "#666",
    paddingTop: 10,
    paddingBottom: 10,
  },

  courseIconsContainer: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(36, 43, 59, 0.5)",
    borderRadius: 10,
    position: "absolute",
    top: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  courseIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconStyle: {
    marginLeft: 10,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 0.5,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation: 5,
  },

  navItem: { alignItems: "center" },
  navText: { fontSize: 10, color: "#666", paddingTop: 5, paddingBottom: 10 },
});
