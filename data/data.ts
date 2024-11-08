const initialData = [
  {
    id: "1",
    pictureUrl:
      "https://s3-alpha-sig.figma.com/img/d7eb/2439/565ee2bb708d7a3f27c90a7cd3c9f0fa?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTQLAYuVQWqel0kgAaEdwxF9HrW8HHkoyKN7ci2UHo2VysK5vmXdB8mHzkslGUkLj7LXSkTfUQk86INSxUXqf5WGaw89We-iE7s8x2247acFwKjN73Gv2bB5t0-yY0aBMzWVHHZkcPXpz~F8puuejlZSRbZBRSG6jsL8ealNV7AZt--I-62LFcKQbi6ORl7aDaylwzcWn1~VwBBQh69OgnhvByIGxIg-17xF5KqNlRt2ibm-UZVqoaiWE3asFXNo17NE-6KpKx0Izh1SLsUkIlb9GjUeWd8hrnuxXwgba40Y-48ZBNZ0gHcta~YyVAvzcTry1w3eY1mwQ-9sF-uSbw__",
    pictureName: "Назва 1",
    comments: [
      {
        id: "1",
        author: "Alex",
        comment:
          "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        dateTime: "09 червня, 2020 | 08:40",
      },
    ],
    locality: "Місцевість 1",
    geoLocation: {
      latitude: 49.8397,
      longitude: 24.0297,
    },
  },
  {
    id: "2",
    pictureUrl:
      "https://s3-alpha-sig.figma.com/img/d7eb/2439/565ee2bb708d7a3f27c90a7cd3c9f0fa?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTQLAYuVQWqel0kgAaEdwxF9HrW8HHkoyKN7ci2UHo2VysK5vmXdB8mHzkslGUkLj7LXSkTfUQk86INSxUXqf5WGaw89We-iE7s8x2247acFwKjN73Gv2bB5t0-yY0aBMzWVHHZkcPXpz~F8puuejlZSRbZBRSG6jsL8ealNV7AZt--I-62LFcKQbi6ORl7aDaylwzcWn1~VwBBQh69OgnhvByIGxIg-17xF5KqNlRt2ibm-UZVqoaiWE3asFXNo17NE-6KpKx0Izh1SLsUkIlb9GjUeWd8hrnuxXwgba40Y-48ZBNZ0gHcta~YyVAvzcTry1w3eY1mwQ-9sF-uSbw__",
    pictureName: "Назва 2",
    comments: [
      {
        id: "1",
        author: "Alex",
        comment:
          "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        dateTime: "09 червня, 2020 | 08:40",
      },
      {
        id: "2",
        author: "Nick",
        comment:
          "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        dateTime: "09 червня, 2020 | 09:14",
      },
    ],
    locality: "Місцевість 2",
    geoLocation: {
      latitude: 49.8397,
      longitude: 24.0297,
    },
  },
  {
    id: "3",
    pictureUrl:
      "https://s3-alpha-sig.figma.com/img/d7eb/2439/565ee2bb708d7a3f27c90a7cd3c9f0fa?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTQLAYuVQWqel0kgAaEdwxF9HrW8HHkoyKN7ci2UHo2VysK5vmXdB8mHzkslGUkLj7LXSkTfUQk86INSxUXqf5WGaw89We-iE7s8x2247acFwKjN73Gv2bB5t0-yY0aBMzWVHHZkcPXpz~F8puuejlZSRbZBRSG6jsL8ealNV7AZt--I-62LFcKQbi6ORl7aDaylwzcWn1~VwBBQh69OgnhvByIGxIg-17xF5KqNlRt2ibm-UZVqoaiWE3asFXNo17NE-6KpKx0Izh1SLsUkIlb9GjUeWd8hrnuxXwgba40Y-48ZBNZ0gHcta~YyVAvzcTry1w3eY1mwQ-9sF-uSbw__",
    pictureName: "Назва 3",
    comments: [
      {
        id: "1",
        author: "Alex",
        comment:
          "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        dateTime: "09 червня, 2020 | 08:40",
      },
      {
        id: "2",
        author: "Nick",
        comment:
          "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        dateTime: "09 червня, 2020 | 09:14",
      },
      {
        id: "3",
        author: "Mike",
        comment: "Thank you! That was very helpful!",
        dateTime: "09 червня, 2020 | 09:20",
      },
      {
        id: "4",
        author: "Alex",
        comment:
          "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        dateTime: "09 червня, 2020 | 08:40",
      },
      {
        id: "5",
        author: "Nick",
        comment:
          "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        dateTime: "09 червня, 2020 | 09:14",
      },
      {
        id: "6",
        author: "Mike",
        comment: "Thank you! That was very helpful!",
        dateTime: "09 червня, 2020 | 09:20",
      },
    ],
    locality: "Місцевість 3",
    geoLocation: {
      latitude: 49.8397,
      longitude: 24.0297,
    },
  },
];

export default initialData;
