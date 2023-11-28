import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export const EyeIcon = (props) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" {...props}>
      <Path
        d="M10.3866 8C10.3866 9.32 9.31995 10.3867 7.99995 10.3867C6.67995 10.3867 5.61328 9.32 5.61328 8C5.61328 6.68 6.67995 5.61333 7.99995 5.61333C9.31995 5.61333 10.3866 6.68 10.3866 8Z"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.9999 13.5133C10.3532 13.5133 12.5466 12.1267 14.0732 9.72667C14.6732 8.78667 14.6732 7.20667 14.0732 6.26667C12.5466 3.86667 10.3532 2.48 7.9999 2.48C5.64656 2.48 3.45323 3.86667 1.92656 6.26667C1.32656 7.20667 1.32656 8.78667 1.92656 9.72667C3.45323 12.1267 5.64656 13.5133 7.9999 13.5133Z"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const EyeLashIcon = () => {
  return (
    <Svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M21.1468 8.5703C20.2886 6.83452 19.2673 5.4189 18.0829 4.32343L16.8407 5.51593C17.8536 6.44523 18.736 7.66093 19.4989 9.17499C17.4676 13.2109 14.5843 15.1281 10.6439 15.1281C9.46113 15.1281 8.37169 14.9533 7.3756 14.6036L6.02965 15.8957C7.41312 16.509 8.9512 16.8156 10.6439 16.8156C15.3363 16.8156 18.8373 14.4695 21.1468 9.77734C21.2397 9.58863 21.2878 9.38252 21.2878 9.17382C21.2878 8.96512 21.2397 8.75901 21.1468 8.5703ZM19.5948 1.0553L18.5541 0.0549912C18.5359 0.0375581 18.5144 0.0237284 18.4907 0.0142926C18.467 0.00485679 18.4416 0 18.4159 0C18.3902 0 18.3648 0.00485679 18.3411 0.0142926C18.3174 0.0237284 18.2958 0.0375581 18.2777 0.0549912L15.6075 2.61718C14.1354 1.8953 12.4808 1.53437 10.6439 1.53437C5.95153 1.53437 2.45055 3.88046 0.14098 8.57265C0.0481461 8.76136 0 8.96747 0 9.17616C0 9.38486 0.0481461 9.59097 0.14098 9.77968C1.06367 11.6453 2.17451 13.1407 3.4735 14.2659L0.890003 16.7453C0.853403 16.7805 0.832843 16.8281 0.832843 16.8778C0.832843 16.9276 0.853403 16.9752 0.890003 17.0104L1.93224 18.0109C1.96886 18.0461 2.01852 18.0658 2.0703 18.0658C2.12208 18.0658 2.17174 18.0461 2.20836 18.0109L19.5948 1.32062C19.613 1.3032 19.6274 1.28252 19.6372 1.25976C19.6471 1.237 19.6521 1.2126 19.6521 1.18796C19.6521 1.16332 19.6471 1.13892 19.6372 1.11616C19.6274 1.0934 19.613 1.07272 19.5948 1.0553ZM1.78893 9.17499C3.82262 5.13905 6.70592 3.22187 10.6439 3.22187C11.9755 3.22187 13.1861 3.44124 14.2845 3.88726L12.5682 5.53491C11.7554 5.11858 10.8247 4.96406 9.91345 5.09416C9.00219 5.22426 8.15862 5.63208 7.50717 6.25747C6.85573 6.88286 6.43091 7.69269 6.29539 8.5675C6.15987 9.44231 6.32082 10.3358 6.7545 11.1161L4.71788 13.0712C3.59069 12.1162 2.61901 10.8222 1.78893 9.17499ZM7.81188 9.17499C7.81231 8.76171 7.91428 8.35434 8.10951 7.986C8.30475 7.61765 8.58773 7.29872 8.93549 7.05509C9.28325 6.81147 9.68596 6.65003 10.1109 6.58389C10.5359 6.51775 10.9711 6.54877 11.3812 6.67444L7.94152 9.97655C7.8553 9.71743 7.81157 9.44701 7.81188 9.17499Z"
        fill="#4A90E2"
      />
      <Path
        d="M10.5464 11.8C10.4619 11.8 10.3787 11.7962 10.2961 11.789L9.00659 13.0269C9.7822 13.3121 10.6272 13.3755 11.4396 13.2094C12.2519 13.0433 12.9967 12.6549 13.584 12.0911C14.1713 11.5273 14.5759 10.8123 14.7489 10.0324C14.9219 9.25261 14.8559 8.44136 14.5588 7.69678L13.2693 8.93475C13.2769 9.01397 13.2808 9.09389 13.2808 9.17498C13.281 9.51975 13.2104 9.86118 13.073 10.1797C12.9357 10.4983 12.7343 10.7878 12.4803 11.0315C12.2264 11.2753 11.9249 11.4687 11.593 11.6005C11.2612 11.7324 10.9055 11.8002 10.5464 11.8Z"
        fill="#4A90E2"
      />
    </Svg>
  );
};

export const FacebookIcon = () => {
  return (
    <Svg
      width="44"
      height="45"
      viewBox="0 0 44 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_34_182)">
        <Path
          d="M41.5716 45.0002C42.9125 45.0002 44 43.8882 44 42.5166V2.48361C44 1.11182 42.9125 0 41.5716 0H2.42842C1.08694 0 0 1.11182 0 2.48361V42.5166C0 43.8882 1.08694 45.0002 2.42842 45.0002H41.5716Z"
          fill="#395185"
        />
        <Path
          d="M30.3592 45.0007V27.5743H36.0787L36.935 20.783H30.3592V16.4468C30.3592 14.4805 30.8932 13.1405 33.6503 13.1405L37.1667 13.139V7.06483C36.5582 6.98204 34.471 6.79712 32.0427 6.79712C26.9728 6.79712 23.5019 9.96206 23.5019 15.7744V20.783H17.7678V27.5743H23.5019V45.0007H30.3592Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_34_182">
          <Rect width="44" height="45" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const GoogleIcon = () => {
  return (
    <Svg
      width="44"
      height="45"
      viewBox="0 0 44 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_34_185)">
        <Path
          d="M9.65444 18.3094C10.5122 15.6552 12.1677 13.3459 14.3846 11.7109C16.6016 10.0758 19.2668 9.19863 22.0001 9.20438C25.0984 9.20438 27.8998 10.3294 30.0998 12.1706L36.5018 5.625C32.6004 2.14687 27.6009 0 22.0001 0C13.3284 0 5.8631 5.05875 2.27344 12.4688L9.65444 18.3094Z"
          fill="#EA4335"
        />
        <Path
          d="M29.4067 33.7743C27.4083 35.0924 24.871 35.7956 22 35.7956C19.2776 35.8013 16.6225 34.9311 14.4104 33.3081C12.1984 31.6852 10.5416 29.3917 9.67449 26.7524L2.26782 32.5031C4.08511 36.2649 6.89748 39.4301 10.3855 41.6391C13.8735 43.8481 17.8974 45.0125 22 44.9999C27.3772 44.9999 32.5142 43.0443 36.3623 39.3749L29.4085 33.7743H29.4067Z"
          fill="#34A853"
        />
        <Path
          d="M36.3623 39.3749C40.3865 35.5349 42.999 29.8199 42.999 22.4999C42.999 21.1687 42.7992 19.7381 42.5003 18.4087H22V27.1031H33.7993C33.2182 30.0262 31.6543 32.2893 29.4085 33.7743L36.3623 39.3749Z"
          fill="#4A90E2"
        />
        <Path
          d="M9.67471 26.7525C9.2262 25.3817 8.99834 23.9455 9.00005 22.5C9.00005 21.0337 9.22921 19.6256 9.65455 18.3094L2.27355 12.4688C0.763573 15.5863 -0.0148132 19.021 0.0002135 22.5C0.0002135 26.1 0.816047 29.4937 2.26805 32.5031L9.67471 26.7525Z"
          fill="#FBBC05"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_34_185">
          <Rect width="44" height="45" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};