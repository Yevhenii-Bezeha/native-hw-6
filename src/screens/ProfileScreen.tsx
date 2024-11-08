import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { colors } from "../../styles/global";
import Post, { PostProps } from "../components/Post";
import LogoutButton from "../components/LogoutButton";
import { selectUser } from "../redux/user/userSelectors";
import { logoutDB } from "../utils/auth";
import { selectPostData } from "../redux/post/postSelectors";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

const ProfileScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const dispatch = useDispatch();

  const getUser = useSelector(selectUser);

  const getPosts = useSelector(selectPostData);

  const navigateToComments = (item: PostProps) => {
    navigation.navigate("Comments", { item });
  };
  const navigateToMap = (item: PostProps) => {
    navigation.navigate("Map", { item });
  };

  const handleLogOut = async () => {
    try {
      await logoutDB(dispatch);
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/images/backgroundImage.png")}
          resizeMode="cover"
        />
        <View style={styles.formContainer}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={
                getUser.photoURL && {
                  uri: getUser.photoURL,
                }
              }
            />
            {getUser.photoURL ? (
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: colors.white },
                ]}
              >
                <AntDesign
                  name="closecircleo"
                  size={24}
                  color={colors.border_gray}
                  onPress={() => {
                    console.log("TODO: add functionality for removing avatar");
                  }}
                />
              </View>
            ) : (
              <View style={styles.iconContainer}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={colors.orange}
                  onPress={() => {
                    console.log("TODO: add functionality for adding avatar");
                  }}
                />
              </View>
            )}
          </View>
          <View style={styles.logoutIconContainer}>
            <LogoutButton onPress={handleLogOut} />
          </View>
          <Text style={[styles.title, { marginBottom: 32 }]}>
            {getUser.displayName}
          </Text>
          <FlatList
            data={getPosts}
            renderItem={({ item }) => {
              return (
                <Post
                  pictureUrl={item.pictureUrl}
                  pictureName={item.pictureName}
                  comments={item.comments}
                  locality={item.locality}
                  geoLocation={item.geoLocation}
                  navigateToComments={() => navigateToComments(item)}
                  navigateToMap={() => navigateToMap(item)}
                />
              );
            }}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  formContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.white,
    width: SCREEN_WIDTH,
    height: "82%",
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    left: SCREEN_WIDTH / 2 - 60,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.light_gray,
    backgroundColor: colors.light_gray,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    textAlign: "center",
    lineHeight: 35.16,
    letterSpacing: 0.01,
  },
  iconContainer: {
    position: "absolute",
    bottom: 26,
    right: -12,
    borderRadius: 100,
    overflow: "hidden",
  },
  logoutIconContainer: {
    position: "absolute",
    top: 22,
    right: 16,
  },
});

export default ProfileScreen;
