const Like = ({ className, ...props }) => {
  return (
    <svg
      height="25"
      width="24"
      fill="none"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1005_5888)">
        <path
          d="M12 0L22 4.40401V11.9843C22 15.7986 18.6667 19.4783 12 23.0233C5.33333 19.4783 2 15.7986 2 11.9843V4.40401L12 0ZM14.2929 8.31091L11 11.5731L9.70711 10.2927L8.29289 11.6941L11 14.3765L15.7071 9.71226L14.2929 8.31091Z"
          fill="#3F51B5"
        />
      </g>
      <defs>
        <clipPath id="clip0_1005_5888">
          <rect height="24.0243" width="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Like;
