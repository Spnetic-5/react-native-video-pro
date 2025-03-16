import React from "react";
import Svg, { Path, G, Mask, Rect, Circle } from "react-native-svg";

export const FullScreenIcon = ({
  width = 45,
  height = 45,
  fill = "#1890FF",
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Mask
      id="mask0"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="45"
      height="45"
    >
      <Rect x="0.0546875" y="0.867188" width="44" height="44" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0)">
      <Path
        d="M9.22261 35.7018H13.7355C14.1251 35.7018 14.4516 35.8336 14.7151 36.0973C14.9787 36.3609 15.1105 36.6876 15.1105 37.0774C15.1105 37.4671 14.9787 37.7936 14.7151 38.0568C14.4516 38.3201 14.1251 38.4517 13.7355 38.4517H8.12971C7.66023 38.4517 7.26669 38.2929 6.94909 37.9753C6.63147 37.6577 6.47266 37.2642 6.47266 36.7947V31.1889C6.47266 30.7993 6.60449 30.4728 6.86815 30.2093C7.13182 29.9457 7.45852 29.8139 7.84825 29.8139C8.23802 29.8139 8.56452 29.9457 8.82776 30.2093C9.09099 30.4728 9.22261 30.7993 9.22261 31.1889V35.7018ZM34.9069 35.7018V31.1889C34.9069 30.7993 35.0387 30.4728 35.3024 30.2093C35.566 29.9457 35.8927 29.8139 36.2825 29.8139C36.6722 29.8139 36.9987 29.9457 37.262 30.2093C37.5252 30.4728 37.6568 30.7993 37.6568 31.1889V36.7947C37.6568 37.2642 37.498 37.6577 37.1804 37.9753C36.8628 38.2929 36.4693 38.4517 35.9998 38.4517H30.394C30.0045 38.4517 29.6779 38.3199 29.4143 38.0562C29.1508 37.7926 29.019 37.4659 29.019 37.0761C29.019 36.6864 29.1508 36.3599 29.4143 36.0966C29.6779 35.8334 30.0045 35.7018 30.394 35.7018H34.9069ZM9.22261 10.0351V14.548C9.22261 14.9376 9.09078 15.2641 8.82711 15.5276C8.56348 15.7912 8.23678 15.923 7.84701 15.923C7.45728 15.923 7.13079 15.7912 6.86756 15.5276C6.60429 15.2641 6.47266 14.9376 6.47266 14.548V8.94222C6.47266 8.47273 6.63147 8.07919 6.94909 7.76159C7.26669 7.44397 7.66023 7.28516 8.12971 7.28516H13.7355C14.1251 7.28516 14.4516 7.41699 14.7151 7.68065C14.9787 7.94432 15.1105 8.27102 15.1105 8.66075C15.1105 9.05052 14.9787 9.37702 14.7151 9.64026C14.4516 9.90349 14.1251 10.0351 13.7355 10.0351H9.22261ZM34.9069 10.0351H30.394C30.0045 10.0351 29.6779 9.90328 29.4143 9.63961C29.1508 9.37598 29.019 9.04928 29.019 8.65952C29.019 8.26978 29.1508 7.94329 29.4143 7.68006C29.6779 7.41679 30.0045 7.28516 30.394 7.28516H35.9998C36.4693 7.28516 36.8628 7.44397 37.1804 7.76159C37.498 8.07919 37.6568 8.47273 37.6568 8.94222V14.548C37.6568 14.9376 37.525 15.2641 37.2614 15.5276C36.9977 15.7912 36.671 15.923 36.2812 15.923C35.8915 15.923 35.565 15.7912 35.3018 15.5276C35.0385 15.2641 34.9069 14.9376 34.9069 14.548V10.0351Z"
        fill={fill}
      />
    </G>
  </Svg>
);

export const ExitFullScreenIcon = ({
  width = 45,
  height = 45,
  fill = "#1890FF",
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Mask
      id="mask0"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="45"
      height="45"
    >
      <Rect x="0.515625" y="0.390625" width="44" height="44" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0)">
      <Path
        d="M12.8215 32.0873L8.30859 32.0873C7.91901 32.0873 7.59245 31.9555 7.32891 31.6918C7.06536 31.4282 6.93359 31.1015 6.93359 30.7117C6.93359 30.322 7.06536 29.9955 7.32891 29.7322C7.59245 29.469 7.91901 29.3374 8.30859 29.3374L13.9144 29.3374C14.3839 29.3374 14.7774 29.4962 15.095 29.8138C15.4126 30.1314 15.5714 30.5249 15.5714 30.9944L15.5714 36.6002C15.5714 36.9898 15.4396 37.3163 15.1759 37.5799C14.9123 37.8434 14.5856 37.9752 14.1958 37.9752C13.8061 37.9752 13.4796 37.8434 13.2163 37.5799C12.9531 37.3163 12.8215 36.9898 12.8215 36.6002L12.8215 32.0873ZM32.2299 32.0873L32.2299 36.6002C32.2299 36.9898 32.0981 37.3163 31.8344 37.5799C31.5708 37.8434 31.2441 37.9752 30.8543 37.9752C30.4646 37.9752 30.1381 37.8434 29.8749 37.5799C29.6116 37.3163 29.48 36.9898 29.48 36.6002L29.48 30.9944C29.48 30.5249 29.6388 30.1314 29.9564 29.8138C30.274 29.4962 30.6675 29.3374 31.137 29.3374L36.7428 29.3374C37.1324 29.3374 37.4589 29.4692 37.7225 29.7329C37.986 29.9965 38.1178 30.3232 38.1178 30.713C38.1178 31.1027 37.986 31.4292 37.7225 31.6924C37.4589 31.9557 37.1324 32.0873 36.7428 32.0873L32.2299 32.0873ZM12.8215 12.6965L12.8215 8.18359C12.8215 7.79401 12.9533 7.46745 13.2169 7.20391C13.4806 6.94036 13.8073 6.80859 14.197 6.80859C14.5868 6.80859 14.9133 6.94036 15.1765 7.20391C15.4398 7.46745 15.5714 7.79401 15.5714 8.18359L15.5714 13.7894C15.5714 14.2589 15.4126 14.6524 15.095 14.97C14.7774 15.2876 14.3839 15.4464 13.9144 15.4464L8.30859 15.4464C7.91901 15.4464 7.59245 15.3146 7.32891 15.0509C7.06536 14.7873 6.93359 14.4606 6.93359 14.0708C6.93359 13.6811 7.06536 13.3546 7.32891 13.0913C7.59245 12.8281 7.91901 12.6965 8.30859 12.6965L12.8215 12.6965ZM32.2299 12.6965L36.7428 12.6965C37.1324 12.6965 37.4589 12.8283 37.7225 13.0919C37.986 13.3556 38.1178 13.6823 38.1178 14.072C38.1178 14.4618 37.986 14.7883 37.7225 15.0515C37.4589 15.3148 37.1324 15.4464 36.7428 15.4464L31.137 15.4464C30.6675 15.4464 30.274 15.2876 29.9564 14.97C29.6388 14.6524 29.48 14.2589 29.48 13.7894L29.48 8.18359C29.48 7.79401 29.6118 7.46745 29.8755 7.20391C30.1391 6.94036 30.4658 6.80859 30.8556 6.80859C31.2453 6.80859 31.5718 6.94036 31.8351 7.20391C32.0983 7.46745 32.2299 7.79401 32.2299 8.18359L32.2299 12.6965Z"
        fill={fill}
      />
    </G>
  </Svg>
);

export const VideoPauseCircle = ({
  width = 45,
  height = 45,
  fill = "#1890FF",
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M18.268 31.468C18.8913 31.468 19.4138 31.2571 19.8355 30.8355C20.2571 30.4138 20.468 29.8913 20.468 29.268V16.068C20.468 15.4446 20.2571 14.9221 19.8355 14.5005C19.4138 14.0788 18.8913 13.868 18.268 13.868C17.6446 13.868 17.1221 14.0788 16.7005 14.5005C16.2788 14.9221 16.068 15.4446 16.068 16.068V29.268C16.068 29.8913 16.2788 30.4138 16.7005 30.8355C17.1221 31.2571 17.6446 31.468 18.268 31.468ZM27.068 31.468C27.6913 31.468 28.2138 31.2571 28.6355 30.8355C29.0571 30.4138 29.268 29.8913 29.268 29.268V16.068C29.268 15.4446 29.0571 14.9221 28.6355 14.5005C28.2138 14.0788 27.6913 13.868 27.068 13.868C26.4446 13.868 25.9221 14.0788 25.5005 14.5005C25.0788 14.9221 24.868 15.4446 24.868 16.068V29.268C24.868 29.8913 25.0788 30.4138 25.5005 30.8355C25.9221 31.2571 26.4446 31.468 27.068 31.468ZM22.668 44.668C19.6246 44.668 16.7646 44.0905 14.088 42.9355C11.4113 41.7805 9.08297 40.213 7.10297 38.233C5.12297 36.253 3.55547 33.9246 2.40047 31.248C1.24547 28.5713 0.667969 25.7113 0.667969 22.668C0.667969 19.6246 1.24547 16.7646 2.40047 14.088C3.55547 11.4113 5.12297 9.08297 7.10297 7.10297C9.08297 5.12297 11.4113 3.55547 14.088 2.40047C16.7646 1.24547 19.6246 0.667969 22.668 0.667969C25.7113 0.667969 28.5713 1.24547 31.248 2.40047C33.9246 3.55547 36.253 5.12297 38.233 7.10297C40.213 9.08297 41.7805 11.4113 42.9355 14.088C44.0905 16.7646 44.668 19.6246 44.668 22.668C44.668 25.7113 44.0905 28.5713 42.9355 31.248C41.7805 33.9246 40.213 36.253 38.233 38.233C36.253 40.213 33.9246 41.7805 31.248 42.9355C28.5713 44.0905 25.7113 44.668 22.668 44.668Z"
      fill={fill}
    />
  </Svg>
);
export const VideoPlayCircle = ({
  width = 44,
  height = 44,
  fill = "#1890FF",
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M19.2077 29.7935L29.2947 23.3138C29.7905 22.999 30.0384 22.5618 30.0384 22.0022C30.0384 21.4426 29.7905 21.0039 29.2947 20.6862L19.2077 14.2065C18.6881 13.8503 18.1552 13.8217 17.6089 14.121C17.0626 14.4202 16.7895 14.8866 16.7895 15.5203V28.4797C16.7895 29.1134 17.0626 29.5798 17.6089 29.879C18.1552 30.1783 18.6881 30.1497 19.2077 29.7935ZM22.0039 44C18.9611 44 16.101 43.4226 13.4236 42.2678C10.7462 41.113 8.41726 39.5458 6.43675 37.5661C4.45621 35.5865 2.88828 33.2585 1.73297 30.5823C0.577656 27.9062 0 25.0467 0 22.0039C0 18.9611 0.577405 16.101 1.73222 13.4236C2.88703 10.7462 4.45424 8.41726 6.43386 6.43676C8.41352 4.45621 10.7415 2.88828 13.4177 1.73297C16.0938 0.577658 18.9533 0 21.9961 0C25.0389 0 27.899 0.577408 30.5764 1.73222C33.2538 2.88703 35.5827 4.45424 37.5632 6.43386C39.5438 8.41352 41.1117 10.7415 42.267 13.4177C43.4223 16.0938 44 18.9533 44 21.9961C44 25.0389 43.4226 27.899 42.2678 30.5764C41.113 33.2538 39.5458 35.5827 37.5661 37.5632C35.5865 39.5438 33.2586 41.1117 30.5823 42.267C27.9062 43.4223 25.0467 44 22.0039 44Z"
      fill={fill}
    />
  </Svg>
);

export const WarningRed = ({ width = 39, height = 34, fill = "#E50914" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 39 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M2.34921 33.2076C2.01021 33.2076 1.70571 33.1248 1.43571 32.9591C1.16571 32.7935 0.955876 32.575 0.80621 32.3036C0.65021 32.0343 0.564376 31.7426 0.54871 31.4286C0.533043 31.1146 0.617709 30.8036 0.802709 30.4956L17.9242 0.919626C18.1095 0.611626 18.3412 0.383961 18.6192 0.236627C18.8975 0.0892939 19.1905 0.015625 19.4982 0.015625C19.8059 0.015625 20.0989 0.0892939 20.3772 0.236627C20.6552 0.383961 20.8869 0.611626 21.0722 0.919626L38.1937 30.4956C38.3787 30.8036 38.4634 31.1146 38.4477 31.4286C38.432 31.7426 38.3462 32.0343 38.1902 32.3036C38.0405 32.575 37.8307 32.7935 37.5607 32.9591C37.2907 33.1248 36.9862 33.2076 36.6472 33.2076H2.34921ZM4.39821 30.2076H34.5982L19.4982 4.20763L4.39821 30.2076ZM19.4982 27.8231C19.9559 27.8231 20.3395 27.6683 20.6492 27.3586C20.9589 27.049 21.1137 26.6653 21.1137 26.2076C21.1137 25.75 20.9589 25.3663 20.6492 25.0566C20.3395 24.747 19.9559 24.5921 19.4982 24.5921C19.0405 24.5921 18.6569 24.747 18.3472 25.0566C18.0375 25.3663 17.8827 25.75 17.8827 26.2076C17.8827 26.6653 18.0375 27.049 18.3472 27.3586C18.6569 27.6683 19.0405 27.8231 19.4982 27.8231ZM19.4987 22.5921C19.924 22.5921 20.2802 22.4485 20.5672 22.1611C20.8545 21.8735 20.9982 21.5171 20.9982 21.0921V14.0921C20.9982 13.6671 20.8544 13.311 20.5667 13.0236C20.279 12.736 19.9227 12.5921 19.4977 12.5921C19.0724 12.5921 18.7162 12.736 18.4292 13.0236C18.1419 13.311 17.9982 13.6671 17.9982 14.0921V21.0921C17.9982 21.5171 18.142 21.8735 18.4297 22.1611C18.7174 22.4485 19.0737 22.5921 19.4987 22.5921Z"
      fill={fill}
    />
  </Svg>
);

export const VideoReplayIcon = ({
  width = 56,
  height = 57,
  fill = "#1890FF",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 56 57" fill="none">
      <Mask id="mask0" x="0" y="0" width="56" height="57">
        <Rect y="0.273438" width="56" height="56" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0)">
        <Circle cx="27.3535" cy="27.5801" r="22" fill={fill} />
        <Path
          d="M26.668 38.6034C25.2096 38.6034 23.8437 38.3264 22.5701 37.7722C21.2964 37.218 20.1881 36.4694 19.2451 35.5264C18.302 34.5833 17.5534 33.475 16.9992 32.2014C16.4451 30.9278 16.168 29.5618 16.168 28.1034C16.168 27.7729 16.2798 27.4958 16.5034 27.2722C16.727 27.0486 17.0041 26.9368 17.3346 26.9368C17.6652 26.9368 17.9423 27.0486 18.1659 27.2722C18.3895 27.4958 18.5013 27.7729 18.5013 28.1034C18.5013 30.3784 19.2937 32.3083 20.8784 33.893C22.4631 35.4778 24.393 36.2701 26.668 36.2701C28.943 36.2701 30.8728 35.4778 32.4576 33.893C34.0423 32.3083 34.8346 30.3784 34.8346 28.1034C34.8346 25.8284 34.0423 23.8986 32.4576 22.3139C30.8728 20.7291 28.943 19.9368 26.668 19.9368H26.493L27.4846 20.9284C27.718 21.1618 27.8298 21.434 27.8201 21.7451C27.8103 22.0562 27.6985 22.3284 27.4846 22.5618C27.2513 22.7951 26.9742 22.9166 26.6534 22.9264C26.3326 22.9361 26.0555 22.8243 25.8221 22.5909L22.818 19.5868C22.5846 19.3534 22.468 19.0812 22.468 18.7701C22.468 18.459 22.5846 18.1868 22.818 17.9534L25.8221 14.9493C26.0555 14.7159 26.3326 14.6041 26.6534 14.6139C26.9742 14.6236 27.2513 14.7451 27.4846 14.9784C27.6985 15.2118 27.8103 15.484 27.8201 15.7951C27.8298 16.1062 27.718 16.3784 27.4846 16.6118L26.493 17.6034H26.668C28.1263 17.6034 29.4923 17.8805 30.7659 18.4347C32.0395 18.9889 33.1478 19.7375 34.0909 20.6805C35.0339 21.6236 35.7826 22.7319 36.3367 24.0055C36.8909 25.2791 37.168 26.6451 37.168 28.1034C37.168 29.5618 36.8909 30.9278 36.3367 32.2014C35.7826 33.475 35.0339 34.5833 34.0909 35.5264C33.1478 36.4694 32.0395 37.218 30.7659 37.7722C29.4923 38.3264 28.1263 38.6034 26.668 38.6034Z"
          fill="white"
        />
      </G>
    </Svg>
  );
};

export enum COLORS {
  primaryBlue = "#1890FF",
  white = "#FFFFFF",
  greyBorder = "#C9CDD4",
  textFieldGrey = "#6F7585",
  F6F6F6 = "#F6F6F6",
  C353840 = "#353840",
}
