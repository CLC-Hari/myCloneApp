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
        <Image
          source={require("./assets/sait-logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.title}>Courses</Text>
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
          { id: 2, title: "Title", code: "Code" },
          { id: 3, title: "Title", code: "Code" },
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
            <View style={styles.courseIcons}>
              <Ionicons name="pin" size={24} color="black" />
              <Ionicons name="ellipsis-horizontal" size={24} color="black" />
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="calendar-outline" size={28} color="black" />
          <Text style={styles.navText}>Upcoming</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="grid-outline" size={28} color="black" />
          <Text style={styles.navText}>Courses</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="notifications-outline" size={28} color="black" />
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
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  headerImage: { width: 85, height: 35, marginHorizontal: 20 },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center" },
  homeButton: {
    backgroundColor: "#ddd",
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  homeButtonText: { fontSize: 16, fontWeight: "500" },
  scrollView: { flex: 1 },
  courseCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
  },
  courseImage: { width: "100%", height: 120 },
  courseTextContainer: { padding: 10 },
  courseTitle: { fontSize: 16, fontWeight: "bold" },
  courseSubtitle: { fontSize: 14, color: "#666" },
  courseIcons: {
    flexDirection: "row",
    position: "absolute",
    top: 10,
    right: 10,
    gap: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 12, color: "#666" },
});
