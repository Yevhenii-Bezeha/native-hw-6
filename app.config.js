import "dotenv/config";

export default {
  expo: {
    name: "native",
    slug: "native",
    version: "1.0.0",
    ios: {
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
      bundleIdentifier: "com.native",
    },
    android: {
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
      package: "com.goitsocialsapp",
    },
    extra: {
      eas: {
        projectId: "4296de58-b8fb-47a7-be7f-f72f34d9639d"
      }
    }
  },
};
