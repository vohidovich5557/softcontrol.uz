export const Burger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#2C67EA"
    {...props}
  >
    <path
      fill="#2C67EA"
      fillRule="evenodd"
      d="M3 12c0-.42.33-.75.75-.75h16.5a.749.749 0 1 1 0 1.5H3.75c-.42 0-.75-.34-.75-.75ZM3 6c0-.42.33-.75.75-.75H15a.749.749 0 1 1 0 1.5H3.75C3.33 6.75 3 6.41 3 6ZM3 18c0-.42.33-.75.75-.75H15a.749.749 0 1 1 0 1.5H3.75c-.42 0-.75-.34-.75-.75Z"
    />
  </svg>
)

// this is close button for the burger

export const CloseBtn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="#2C67EA"
    className="bi bi-x-lg"
    {...props}
  >
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
  </svg>
)
export const AmericaFlag = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={16}
        fill="none"
        {...props}
    >
        <rect width={22} height={15} y={0.5} fill="#fff" rx={1.571} />
        <mask
            id="a"
            width={22}
            height={16}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <rect width={22} height={15} y={0.5} fill="#fff" rx={1.571} />
        </mask>
        <g mask="url(#a)">
            <path
                fill="#D02F44"
                fillRule="evenodd"
                d="M22 .5H0v1h22v-1Zm0 2H0v1h22v-1Zm-22 2h22v1H0v-1Zm22 2H0v1h22v-1Zm-22 2h22v1H0v-1Zm22 2H0v1h22v-1Zm-22 2h22v1H0v-1Zm22 2H0v1h22v-1Z"
                clipRule="evenodd"
            />
            <path fill="#46467F" d="M0 .5h9.429v7H0z" />
            <g filter="url(#b)">
                <path
                    fill="url(#c)"
                    fillRule="evenodd"
                    d="M4.19 2c0 .276-.234.5-.523.5a.512.512 0 0 1-.524-.5c0-.276.234-.5.524-.5.289 0 .524.224.524.5ZM2.096 2c0 .276-.234.5-.524.5a.512.512 0 0 1-.523-.5c0-.276.234-.5.523-.5.29 0 .524.224.524.5Zm3.667.5c.29 0 .524-.224.524-.5s-.235-.5-.524-.5a.512.512 0 0 0-.524.5c0 .276.235.5.524.5ZM8.38 2c0 .276-.235.5-.524.5a.512.512 0 0 1-.524-.5c0-.276.235-.5.524-.5.29 0 .524.224.524.5ZM2.619 3.5c.29 0 .524-.224.524-.5s-.235-.5-.524-.5a.512.512 0 0 0-.524.5c0 .276.235.5.524.5Zm2.62-.5c0 .276-.235.5-.525.5A.512.512 0 0 1 4.19 3c0-.276.235-.5.524-.5.29 0 .524.224.524.5Zm1.57.5c.29 0 .524-.224.524-.5s-.234-.5-.523-.5a.512.512 0 0 0-.524.5c0 .276.234.5.524.5Zm1.572.5c0 .276-.235.5-.524.5a.512.512 0 0 1-.524-.5c0-.276.235-.5.524-.5.29 0 .524.224.524.5Zm-2.62.5c.29 0 .525-.224.525-.5s-.235-.5-.524-.5a.512.512 0 0 0-.524.5c0 .276.235.5.524.5ZM4.192 4c0 .276-.235.5-.524.5a.512.512 0 0 1-.524-.5c0-.276.234-.5.524-.5.289 0 .524.224.524.5Zm-2.62.5c.29 0 .524-.224.524-.5s-.234-.5-.524-.5a.512.512 0 0 0-.523.5c0 .276.234.5.523.5Zm1.572.5c0 .276-.235.5-.524.5a.512.512 0 0 1-.524-.5c0-.276.235-.5.524-.5.29 0 .524.224.524.5Zm1.571.5c.29 0 .524-.224.524-.5s-.234-.5-.524-.5a.512.512 0 0 0-.524.5c0 .276.235.5.524.5Zm2.62-.5c0 .276-.235.5-.524.5a.512.512 0 0 1-.524-.5c0-.276.234-.5.524-.5.289 0 .523.224.523.5Zm.523 1.5c.29 0 .524-.224.524-.5s-.235-.5-.524-.5a.512.512 0 0 0-.524.5c0 .276.235.5.524.5ZM6.286 6c0 .276-.235.5-.524.5a.512.512 0 0 1-.524-.5c0-.276.235-.5.524-.5.29 0 .524.224.524.5Zm-2.62.5c.29 0 .525-.224.525-.5s-.235-.5-.524-.5a.512.512 0 0 0-.524.5c0 .276.234.5.524.5ZM2.097 6c0 .276-.235.5-.525.5a.512.512 0 0 1-.523-.5c0-.276.234-.5.523-.5.29 0 .524.224.524.5Z"
                    clipRule="evenodd"
                />
            </g>
        </g>
        <defs>
            <linearGradient
                id="c"
                x1={1.048}
                x2={1.048}
                y1={1.5}
                y2={6.5}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#F0F0F0" />
            </linearGradient>
            <filter
                id="b"
                width={7.333}
                height={5.786}
                x={1.048}
                y={1.5}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={0.786} />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1516_59624"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1516_59624"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)

export const RussianFlag = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={15}
        fill="none"
        {...props}
    >
        <rect
            width={21.607}
            height={14.607}
            x={0.196}
            y={0.196}
            fill="#fff"
            stroke="#F5F5F5"
            strokeWidth={0.393}
            rx={1.375}
        />
        <mask
            id="a"
            width={22}
            height={15}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <rect
                width={21.607}
                height={14.607}
                x={0.196}
                y={0.196}
                fill="#fff"
                stroke="#fff"
                strokeWidth={0.393}
                rx={1.375}
            />
        </mask>
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#a)">
            <path fill="#0C47B7" d="M0 10h22V5H0v5Z" />
            <path fill="#E53B35" d="M0 15h22v-5H0v5Z" />
        </g>
    </svg>
)

export const UzbFlag = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={15}
        fill="none"
        {...props}
    >
        <rect
            width={21.607}
            height={14.607}
            x={0.196}
            y={0.196}
            fill="#fff"
            stroke="#F5F5F5"
            strokeWidth={0.393}
            rx={1.375}
        />
        <mask
            id="a"
            width={22}
            height={15}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <rect
                width={21.607}
                height={14.607}
                x={0.196}
                y={0.196}
                fill="#fff"
                stroke="#fff"
                strokeWidth={0.393}
                rx={1.375}
            />
        </mask>
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#a)">
            <path fill="#04AAC8" d="M0 5h22V0H0v5Z" />
            <path fill="#23C840" d="M0 15h22v-5H0v5Z" />
            <path
                fill="#fff"
                d="M7.857 2c.29 0 .524-.224.524-.5S8.147 1 7.857 1a.512.512 0 0 0-.524.5c0 .276.235.5.524.5Zm-4.19 2c.323 0 .623-.093.873-.253a1.39 1.39 0 0 1-.088.003c-.723 0-1.31-.56-1.31-1.25s.587-1.25 1.31-1.25c.03 0 .059 0 .088.003C4.29 1.093 3.99 1 3.667 1c-.868 0-1.572.672-1.572 1.5S2.8 4 3.667 4Zm2.619-.5c0 .276-.235.5-.524.5a.512.512 0 0 1-.524-.5c0-.276.235-.5.524-.5.29 0 .524.224.524.5Zm4.19-2c0 .276-.234.5-.524.5a.512.512 0 0 1-.523-.5c0-.276.234-.5.523-.5.29 0 .524.224.524.5ZM9.952 4c.29 0 .524-.224.524-.5s-.234-.5-.524-.5a.512.512 0 0 0-.523.5c0 .276.234.5.523.5Zm-1.57-.5c0 .276-.235.5-.525.5a.512.512 0 0 1-.524-.5c0-.276.235-.5.524-.5.29 0 .524.224.524.5Z"
            />
        </g>
    </svg>
)

export const TopIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="#2C67EA"
        className="bi bi-caret-up-fill"
        {...props}
    >
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
    </svg>
)

export const ButtonIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="#2C67EA"
        className="bi bi-caret-down-fill"
        {...props}
    >
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
)

// this svg format for the adding section

export const EditIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="#008000"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#008000"
        d="m15.88 8.67-8.803 8.804a.35.35 0 0 0-.091.16l-.976 3.917a.348.348 0 0 0 .42.42l3.917-.976a.347.347 0 0 0 .16-.091l8.805-8.804-3.431-3.43Zm5.613-1.201-.98-.98c-.655-.655-1.797-.654-2.451 0l-1.2 1.2 3.43 3.431 1.2-1.2c.328-.327.508-.763.508-1.226 0-.463-.18-.898-.507-1.225Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M5.5 5.5h17v17h-17z" />
      </clipPath>
    </defs>
  </svg>
)

// this icon for the delete button

export const DeletIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="#FF0000"
    {...props}
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          fill="#FF0000"
          d="M9.75 20.611c0 1.044.845 1.889 1.889 1.889h4.722a1.888 1.888 0 0 0 1.889-1.889l1.416-11.333H8.333L9.75 20.61Zm7.555-14.167-.944-.944h-4.722l-.945.944H7.39v1.89H20.61v-1.89h-3.306Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M5.5 5.5h17v17h-17z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M5.5 5.5h17v17h-17z" />
      </clipPath>
    </defs>
  </svg>
)

