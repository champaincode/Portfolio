import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      height="140mm"
      width="210mm"
      x={0}
      xmlns="http://www.w3.org/2000/svg"
      y={0}
      {...props}
    >
      <g
        transform="matrix(.74458 0 0 .74436 -.02 .694)"
        fontSize={12}
        fillRule="evenodd"
        strokeWidth="1pt"
      >
        <path fill="red" d="M0 -0.000031H1000V666.659942H0z" />
        <path
          transform="translate(-3.507 136.374)"
          fill="#ff3"
          fillOpacity={1}
          d="M3.42861 30.287949H1003.5856530000001V363.62468H3.42861z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
