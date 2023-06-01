import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, StyleSheet } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

const Robo = (imageId) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {imageId === "robo01" ? (
            <Image
                source={require("../assets/backgrounds/robo01.jpg")}
                style={styles.image}
            />
        ) : imageId === "robo02" ? (
            <Image
                source={require("../assets/backgrounds/robo02.jpg")}
                style={styles.image}
            />
        ) : imageId === "robo03" ? (
            <Image
                source={require("../assets/backgrounds/robo03.jpg")}
                style={styles.image}
            />
        ) : imageId === "robo04" ? (
            <Image
                source={require("../assets/backgrounds/robo04.jpg")}
                style={styles.image}
            />
        ) : imageId === "robo05" ? (
            <Image
                source={require("../assets/backgrounds/robo05.jpg")}
                style={styles.image}
            />
        ) : imageId === "robo06" ? (
            <Image
                source={require("../assets/backgrounds/robo06.jpg")}
                style={styles.image}
            />
        ) : imageId === "robo07" ? (
            <Image
                source={require("../assets/backgrounds/robo07.jpg")}
                style={styles.image}
            />
        ) : imageId === "robo08" ? (
            <Image
                source={require("../assets/backgrounds/robo08.jpg")}
                style={styles.image}
            />
        ) : imageId === "robo09" ? (
            <Image
                source={require("../assets/backgrounds/robo09.jpg")}
                style={styles.image}
            />
        ) : imageId === "robo10" ? (
            <Image
                source={require("../assets/backgrounds/robo10.jpg")}
                style={styles.image}
            />
        ) : (
        <Image
            source={require("../assets/backgrounds/robo11.jpg")}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
    )}
    </View>
);

const renderScene = ({ route }) => {
    switch (route.key) {
        case "robo01":
            return Robo("robo01");
        case "robo02":
            return Robo("robo02");
        case "robo03":
            return Robo("robo03");
        case "robo04":
            return Robo("robo04");
        case "robo05":
            return Robo("robo05");
        case "robo06":
            return Robo("robo06");
        case "robo07":
            return Robo("robo07");
        case "robo08":
            return Robo("robo08");
        case "robo09":
            return Robo("robo09");
        case "robo10":
            return Robo("robo10");
        case "robo11":
            return Robo("robo11");
        default:
            return null;
    }
};

const renderTabBar = (props) => (
    <TabBar
        {...props}
        style={{ backgroundColor: "black", color: "white" }}
        labelStyle={{ color: "white", fontSize: 10 }}
        activeColor="#22F9FD"
        inactiveColor="white"
        indicatorStyle={{ backgroundColor: "#22F9FD" }}
    />
);

export default function TabViewExample() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "robo01", title: "01" },
        { key: "robo02", title: "02" },
        { key: "robo03", title: "03" },
        { key: "robo04", title: "04" },
        { key: "robo05", title: "05" },
        { key: "robo06", title: "06" },
        { key: "robo07", title: "07" },
        { key: "robo08", title: "08" },
        { key: "robo09", title: "09" },
        { key: "robo10", title: "10" },
        { key: "robo11", title: "11" },        
    ]);
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
});
