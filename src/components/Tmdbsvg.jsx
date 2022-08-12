import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48px"
      height="48px"
      viewBox="0 0 48 48"
      {...props}
    >
      <path d="M39.61.055c-.102.03-7.93 1.652-17.391 3.61-9.461 1.96-17.43 3.628-17.711 3.702-.637.18-1.34.817-1.574 1.426-.254.676-.196 1.258.433 4.238.422 1.996.672 3.496.906 5.39l.32 2.626v12.336c0 13.512-.027 12.844.555 13.64.157.207.504.5.778.657l.496.273h37.031l.383-.207a2.785 2.785 0 001.203-1.246c.195-.422.195-.441.195-13.266V20.391l-.214-.442c-.247-.496-.817-1.05-1.325-1.273-.308-.153-1.761-.16-17.418-.188l-17.09-.02-.054-.261a4.312 4.312 0 00-.14-.48c-.048-.122-.079-.235-.06-.262.028-.02 7.481-1.574 16.575-3.457 10.472-2.176 16.68-3.5 16.914-3.621.851-.43 1.36-1.227 1.36-2.157 0-.628-1.165-6.335-1.38-6.77-.43-.858-1.172-1.366-2.07-1.413a4.5 4.5 0 00-.723.008zm1.05 1.773c.254.18.262.188.965 3.59.32 1.586.535 2.852.508 2.98-.067.274-.48.622-.696.582-.14-.027-6.101-6.074-6.167-6.253-.028-.082 4.367-1.02 4.855-1.032.188-.008.422.059.535.133zm-3.656 4.313c2.41 2.464 2.988 3.101 2.86 3.16-.087.035-1.212.289-2.497.55l-2.332.481-2.543-2.605c-1.394-1.446-2.781-2.872-3.074-3.188l-.535-.562 2.27-.48c1.245-.263 2.402-.477 2.55-.47.234.02.75.496 3.3 3.114zm-3.387 4.406c-.008.047-1.031.289-2.265.543l-2.243.46-1.734-1.773c-3.695-3.75-4.445-4.527-4.398-4.554.02-.02 1.05-.246 2.289-.508l2.25-.469 3.066 3.106c1.688 1.703 3.055 3.14 3.035 3.195zM24.73 8.672c1.66 1.695 2.98 3.121 2.946 3.148-.074.067-4.68 1.024-4.903 1.024-.132 0-5.992-6.067-6.066-6.274-.027-.082 4.434-1.03 4.77-1.011.187.02.937.73 3.253 3.113zm-6.308 1.351l2.992 3.141-2.43.496c-2.324.477-2.437.496-2.597.336-1.594-1.613-5.84-6.176-5.754-6.207.344-.129 4.273-.926 4.508-.918.242.02.71.469 3.28 3.152zm-6.16 1.227c1.64 1.727 2.98 3.148 2.972 3.16-.007.02-1.132.262-2.511.543l-2.496.524-1.012-1.059C5.27 10.313 4.48 9.461 4.527 9.336c.028-.074.153-.195.274-.281.207-.13 4.125-1 4.347-.965.067.012 1.465 1.433 3.114 3.16zm-4.5 3.273c.91.965 1.117 1.22.984 1.266-.656.188-1.348.262-1.629.156-.172-.054-.547-.101-.855-.101-.489 0-.551-.028-.63-.215-.046-.113-.269-1.137-.503-2.27l-.422-2.062.957 1.004c.516.55 1.461 1.547 2.098 2.222zm35.605 5.942c.125.14.227.367.227.488 0 .227-.008.227-1.133.254l-1.145.027-1.761 4.172c-1.004 2.364-1.766 4.305-1.774 4.473 0 .215.074.355.29.535l.292.242h5.23v4.125H6.282v-4.64l2.371-4.594 2.364-4.594-2.664-.055.507-.734 17.137.02 17.149.02zM9.187 22.07c0 .016-.542 1.086-1.21 2.36a375.195 375.195 0 00-1.442 2.804l-.246.47-.008-2.84V22.03h1.453c.797 0 1.454.02 1.454.04zm34.407 3.852v3.61h-4.586l.273-.637c.149-.348.836-1.97 1.52-3.602l1.246-2.98h1.547zm-26.25 11.765v1.97H6.28v-3.938h11.063zm12.937 0v1.97H18.188v-3.938H30.28zm13.313 0v1.97H31.219v-3.938h12.375zm0 5.399c0 2.625-.028 2.844-.367 3.105-.11.094-4.18.114-18.297.121H6.777l-.254-.242-.242-.254V40.5h37.313zm0 0" />
      <path d="M16.379 21.3c-.121.223-1.117 2.145-2.215 4.274-1.996 3.91-2.137 4.258-1.855 4.621.261.34.48.367 3.066.367 2.07 0 2.598-.027 2.879-.14.664-.281.469.066 3.504-6.121l1.672-3.395h-6.828zm3.523 4.266c-.957 1.95-1.8 3.618-1.875 3.704-.14.148-.375.168-2.343.168-1.2 0-2.184-.028-2.184-.055 0-.067 2.29-4.547 3.207-6.301l.55-1.05h4.38zm0 0M26.805 25.285c-1.559 3.055-2.188 4.387-2.188 4.613 0 .223.067.375.266.532l.25.226h2.86c3.105 0 3.245-.02 3.702-.523.207-.227 4.305-8.871 4.305-9.067 0-.039-1.574-.066-3.508-.066h-3.504zm7.218-2.531c-.16.355-.93 2.004-1.707 3.683l-1.425 3.047-2.524.028-2.512.02.516-.958a312.47 312.47 0 001.895-3.71l1.386-2.739h4.653zm0 0" />
    </svg>
  )
}

export default SvgComponent
