import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  PanResponderGestureState,
  PanResponder,
  GestureResponderEvent,
} from "react-native";
import Orientation from "react-native-orientation";
import Video, { OnLoadData, OnProgressData } from "react-native-video";
import {
  FullScreenIcon,
  VideoPauseCircle,
  VideoPlayCircle,
  VideoReplayIcon,
  WarningRed,
  COLORS,
  ExitFullScreenIcon,
} from "./Icons";
import { styles } from "./VideoPlayer.styles";

export interface VideoState {
  fullscreen: boolean;
  play: boolean;
  replay: boolean;
  currentTime: number;
  duration: number;
}

const isIOS = Platform.OS == "ios";

interface Props {
  currentTime: number;
  duration: number;
  videoRef: React.RefObject<any>;
  themeColor?: string;
}

const VideoProgressBar: React.FC<Props> = ({
  currentTime,
  duration,
  videoRef,
  themeColor,
}) => {
  const [localCurrentTime, setLocalCurrentTime] = useState(currentTime);

  useEffect(() => {
    setLocalCurrentTime(currentTime);
  }, [currentTime]);

  const activeTrackColor = COLORS.primaryBlue;
  const inactiveTrackColor = COLORS.greyBorder;

  const trackWidth =
    duration > 0 ? `${(localCurrentTime / duration) * 100}%` : "0%";

  const progressBarWidthRef = useRef(0);
  const lastX = useRef(0);

  const handleSeek = (x: number) => {
    const progressBarWidth = progressBarWidthRef.current;
    if (progressBarWidth && duration > 0) {
      const seekTime = (x / progressBarWidth) * duration;
      setLocalCurrentTime(seekTime);
      if (videoRef.current && videoRef.current.seek) {
        videoRef.current.seek(seekTime);
      }
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (
        evt: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => {
        lastX.current = gestureState.x0;
        handleSeek(gestureState.x0);
      },
      onPanResponderMove: (
        evt: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => {
        lastX.current = gestureState.moveX;
        handleSeek(gestureState.moveX);
      },
      onPanResponderRelease: () => {
        handleSeek(lastX.current);
      },
    })
  ).current;

  const handleLayout = useCallback((event) => {
    const { width } = event.nativeEvent.layout;
    progressBarWidthRef.current = width;
  }, []);

  return (
    <View
      style={styles.trackContainer}
      {...panResponder.panHandlers}
      onLayout={handleLayout}
    >
      <View style={[styles.track, { backgroundColor: inactiveTrackColor }]}>
        <View
          style={[
            styles.track,
            { backgroundColor: activeTrackColor, width: trackWidth },
          ]}
        />
        <View
          style={[
            styles.dot,
            {
              left: trackWidth,
              backgroundColor: activeTrackColor,
              borderColor: themeColor,
            },
          ]}
        />
      </View>
    </View>
  );
};

interface VideoPlayerProps {
  file: string;
  playIcon?: any;
  pauseIcon?: any;
  fullScreenIcon?: any;
  exitFullScreenIcon?: any;
  replayIcon?: any;
  themeColor?: string;
  loaderColor?: string;
  loaderSize?: number;
  loaderContainerStyle?: any;
  errorIcon?: any;
  errorText?: string;
  muted?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = (props: VideoPlayerProps) => {
  const {
    file,

    themeColor = "#1890FF",
    playIcon = <VideoPlayCircle fill={themeColor} />,
    pauseIcon = <VideoPauseCircle fill={themeColor} />,
    fullScreenIcon = <FullScreenIcon fill={themeColor} />,
    exitFullScreenIcon = <ExitFullScreenIcon fill={themeColor} />,
    replayIcon = <VideoReplayIcon fill={themeColor} />,
    loaderColor = "#1890FF",
    loaderSize = 60,
    loaderContainerStyle = styles.loaderContainer,
    errorIcon = <WarningRed />,
    errorText = "Video Error",
  } = props;
  const videoPlayer = useRef<Video | null>(null);
  const [error, setError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoControls, setVideoControls] = useState<VideoState>({
    fullscreen: false,
    play: false,
    replay: false,
    currentTime: 0,
    duration: 0,
  });
  useEffect(() => {
    setVideoControls({ ...videoControls, fullscreen: false });
  }, [file]);

  useEffect(() => {
    StatusBar.setHidden(videoControls.fullscreen);
  }, [videoControls.fullscreen]);

  const handlePlayPause = () => {
    setVideoControls((prevControls) => ({
      ...prevControls,
      play: !prevControls.play,
    }));
  };

  const handleReplay = () => {
    if (videoPlayer.current) videoPlayer.current.seek(0);
    setVideoControls((prevControls) => ({
      ...prevControls,
      replay: false,
      play: true,
    }));
  };

  const onLoadEnd = (data: OnLoadData) => {
    if (!error && videoPlayer.current) videoPlayer?.current.seek(0);
    setVideoLoaded(true);
    setVideoControls((prevControls) => ({
      ...prevControls,
      duration: data.duration,
      currentTime: data.currentTime,
    }));
  };

  const onProgress = (data: OnProgressData) =>
    setVideoControls((prev) => ({ ...prev, currentTime: data.currentTime }));

  const onEnd = () =>
    setVideoControls((prev) => ({ ...prev, replay: true, play: false }));

  const toggleFullScreen = () => {
    const newFullscreenState = !videoControls.fullscreen;
    setVideoControls((prev) => ({ ...prev, fullscreen: newFullscreenState }));
    newFullscreenState
      ? Orientation.lockToLandscape()
      : Orientation.lockToPortrait();
  };

  const formatTime = (currentTime: number, duration: number): string => {
    const format = (time: number) => {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = Math.floor(time % 60);
      return hours > 0
        ? `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
          )}:${String(seconds).padStart(2, "0")}`
        : `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
            2,
            "0"
          )}`;
    };

    return `${format(currentTime)} / ${format(duration)}`;
  };

  return (
    <View
      style={
        videoControls.fullscreen
          ? isIOS
            ? styles.iosContainer
            : styles.androidContainer
          : styles.mainContainer
      }
    >
      {!videoLoaded && !error && (
        <View style={loaderContainerStyle}>
          <ActivityIndicator size={loaderSize} color={loaderColor} />
        </View>
      )}

      {error || !file ? (
        <View style={styles.errorContainer}>
          {errorIcon}
          <View style={{ height: 8 }} />
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      ) : (
        <Video
          ref={videoPlayer}
          source={{ uri: file }}
          style={
            videoControls.fullscreen
              ? isIOS
                ? styles.iosfullScreenVideo
                : styles.androidfullScreenVideo
              : styles.video
          }
          onLoad={onLoadEnd}
          onProgress={onProgress}
          onEnd={onEnd}
          onError={() => setError(true)}
          resizeMode="stretch"
          onLoadStart={() => setVideoLoaded(false)}
          paused={!videoControls.play}
          {...props}
        />
      )}
      {!error &&
        (videoLoaded ? (
          <View
            style={
              videoControls.fullscreen
                ? [styles.stripContainer, isIOS && styles.iosStrip]
                : styles.fullWidth
            }
          >
            <>
              <VideoProgressBar
                currentTime={videoControls.currentTime}
                duration={
                  videoControls.duration > 0 ? videoControls.duration : 0
                }
                videoRef={videoPlayer}
                themeColor={themeColor}
              />

              <View
                style={
                  videoControls.fullscreen
                    ? [styles.videoStrip, styles.videoStripFullScreen]
                    : styles.videoStrip
                }
              >
                <View
                  style={[
                    styles.timelineContainer,
                    !videoControls.fullscreen
                      ? { flex: 1 }
                      : { maxWidth: "15%" },
                  ]}
                >
                  <Text style={styles.timeStamp}>
                    {formatTime(
                      videoControls.currentTime,
                      videoControls.duration
                    )}
                  </Text>
                </View>

                {videoControls.replay ? (
                  <TouchableOpacity
                    onPress={handleReplay}
                    style={styles.playButton}
                  >
                    {replayIcon}
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={handlePlayPause}
                    style={styles.playButton}
                  >
                    {videoControls.play ? pauseIcon : playIcon}
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  onPress={toggleFullScreen}
                  style={!videoControls.fullscreen && styles.fullScreenIcon}
                >
                  {!videoControls.fullscreen
                    ? fullScreenIcon
                    : exitFullScreenIcon}
                </TouchableOpacity>
              </View>
            </>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: "white",
              height: 60,
            }}
          />
        ))}
    </View>
  );
};

export default VideoPlayer;
