# react-native-video-pro

`react-native-video-pro` is a React Native video player with custom controls, built on top of `react-native-video`. It provides a feature-rich, customizable video playback experience with fullscreen support, play/pause controls, a progress bar, and more.

## Features

- Play/Pause functionality
- Fullscreen mode
- Replay support
- Customizable icons and theme colors
- Video progress bar with seek functionality
- Error handling
- Activity indicator while loading
- Landscape and portrait orientation support

## Installation

```sh
npm install react-native-video-pro react-native-video react-native-orientation
```

or

```sh
yarn add react-native-video-pro react-native-video react-native-orientation
```

### Dependencies

Ensure you have installed and linked the following dependencies:

- [react-native-video](https://github.com/react-native-video/react-native-video)
- [react-native-orientation](https://github.com/yamill/react-native-orientation)

For iOS, make sure to run:

```sh
cd ios && pod install
```

## Demo
![Video Demo](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3dob3h5OHZueXo5aW12NThpeDBnYXgzY2FqZm9xdzQxa2NsZDFkdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/q7KIcLp9K4qoazDf6M/giphy.gif)

## Usage

```tsx
import React from "react";
import { View } from "react-native";
import VideoPlayer from "react-native-video-pro";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <VideoPlayer file="https://www.example.com/sample-video.mp4" />
    </View>
  );
};

export default App;
```

## Props

| Prop                 | Type           | Default             | Description |
|----------------------|---------------|---------------------|-------------|
| `file`              | `string`       | `undefined`         | Video file URL |
| `playIcon`          | `ReactElement` | Default Play Icon   | Custom play button icon |
| `pauseIcon`         | `ReactElement` | Default Pause Icon  | Custom pause button icon |
| `fullScreenIcon`    | `ReactElement` | Default Fullscreen Icon | Custom fullscreen button icon |
| `exitFullScreenIcon`| `ReactElement` | Default Exit Fullscreen Icon | Custom exit fullscreen button icon |
| `replayIcon`        | `ReactElement` | Default Replay Icon | Custom replay button icon |
| `themeColor`        | `string`       | `#1890FF`           | Theme color for progress bar and buttons |
| `loaderColor`       | `string`       | `#1890FF`           | Loader color when video is loading |
| `loaderSize`        | `number`       | `60`                | Loader size |
| `loaderContainerStyle` | `object`    | `styles.loaderContainer` | Custom styles for the loader container |
| `errorIcon`         | `ReactElement` | Default Error Icon  | Custom error icon |
| `errorText`         | `string`       | `"Video Error"`     | Error message to display when the video fails to load |
| `muted`             | `boolean`      | `false`             | Whether the video should start muted |

## Customization

You can customize the player by passing in your own icons and colors.

```tsx
import React from "react";
import VideoPlayer from "react-native-video-pro";
import { CustomPlayIcon, CustomPauseIcon } from "./CustomIcons";

const App = () => {
  return (
      <VideoPlayer
        file="https://www.example.com/sample-video.mp4"
        playIcon={<CustomPlayIcon />}
        pauseIcon={<CustomPauseIcon />}
        themeColor="blue"
      />
  );
};

export default App;
```

## License

ISC


#### Made with ❤️ by Saurabh Powar

