import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { NavigationProp, useFocusEffect } from "@react-navigation/native";
import { colors } from "../../styles/global";
import Post, { PostProps } from "../components/Post";
import { selectUser } from "../redux/user/userSelectors";
import { selectPostData } from "../redux/post/postSelectors";
import { getPostsFromDB } from "../utils/postsCollection";
import { setPosts } from "../redux/post/postSlice";

const PostsScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const dispatch = useDispatch();

  const getPosts = useSelector(selectPostData);

  const getUser = useSelector(selectUser);

  const navigateToComments = (item: PostProps) => {
    navigation.navigate("Comments", { item });
  };
  const navigateToMap = (item: PostProps) => {
    navigation.navigate("Map", { item });
  };

  useFocusEffect(
    useCallback(() => {
      fetchPosts();
    }, []),
  );

  const fetchPosts = async () => {
    try {
      const posts = await getPostsFromDB();
      dispatch(setPosts(posts));
    } catch (err) {
      console.error("Fetch user error:", err);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
        }}
      >
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={
              getUser.photoURL && {
                uri: getUser.photoURL,
              }
            }
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 13, fontWeight: 500 }}>
            {getUser.displayName && getUser.displayName}
          </Text>
          <Text style={{ fontSize: 11, fontWeight: 400 }}>
            {getUser.email && getUser.email}
          </Text>
        </View>
      </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.white,
    gap: 32,
  },
  avatarContainer: {
    width: 60,
    height: 60,
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
});

export default PostsScreen;
