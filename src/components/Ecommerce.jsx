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
      <path d="M4.078 2.664c-.742.328-.883.785-.89 2.941v1.707L0 13.688v1.333c0 1.687.102 2.37.45 3.12.487 1.032 1.304 1.755 2.41 2.13l.468.16.027 9.75.02 9.758h-.824c-.696 0-.903.039-1.305.234C.262 40.668 0 41.297 0 43.192c0 1.507.086 1.835.555 2.117.25.152 1.77.16 23.445.16 21.676 0 23.195-.008 23.445-.16.47-.282.555-.61.555-2.118 0-1.894-.262-2.523-1.246-3.02-.402-.194-.61-.233-1.305-.233h-.824l.02-9.758.027-9.77.375-.113c1.258-.375 2.183-1.258 2.672-2.531.187-.489.215-.79.261-2.297l.047-1.735-1.582-3.14-1.586-3.14-.047-1.923c-.046-2.11-.101-2.324-.683-2.758l-.262-.195-16.418-.027-16.426-.02-.214.207c-.375.356-.235.899.293 1.106.168.066 5.418.094 16.28.094h16.032l-.027 1.378-.028 1.387H4.641l-.028-1.387-.027-1.378h1.676c.984 0 1.8-.047 1.98-.102.504-.18.645-.742.262-1.098-.207-.199-.293-.207-2.184-.207-1.418.008-2.035.04-2.242.133zm4.52 5.606c-.02.066-.414 1.16-.871 2.437l-.829 2.324H1.875l2.438-4.875h2.164c1.699 0 2.156.028 2.12.114zm5.906 0a153.2 153.2 0 00-.535 2.437l-.508 2.324h-2.512c-1.379 0-2.511-.039-2.511-.074 0-.039.382-1.125.843-2.41.469-1.285.844-2.352.844-2.363 0-.02.992-.028 2.21-.028 1.735 0 2.204.028 2.169.114zm5.84 0c0 .066-.067 1.16-.16 2.437l-.16 2.324h-5.118l.047-.215c.094-.402.985-4.586.985-4.62 0-.02.992-.04 2.203-.04 1.695 0 2.203.028 2.203.114zm5.992 1.5c.055.89.14 1.988.168 2.437l.055.824H21.44l.055-.824c.027-.45.113-1.547.168-2.437l.113-1.614h4.446zm5.727-1.575c0 .035.89 4.22.984 4.621l.047.215h-5.117l-.16-2.324c-.094-1.277-.16-2.371-.16-2.437 0-.086.507-.114 2.202-.114 1.211 0 2.203.02 2.203.04zm5.812-.011c0 .011.383 1.078.844 2.363.468 1.285.843 2.371.843 2.41 0 .035-1.132.074-2.511.074h-2.512l-.508-2.324a153.2 153.2 0 00-.535-2.437c-.035-.086.434-.114 2.168-.114 1.219 0 2.211.008 2.211.028zm7.031 2.41l1.219 2.437h-5.023l-.829-2.324c-.457-1.277-.851-2.371-.87-2.437-.036-.086.421-.114 2.12-.114h2.164zM6.656 15.73c0 1.266-.008 1.313-.289 1.887-.508 1-1.398 1.488-2.57 1.395-.965-.082-1.715-.617-2.117-1.528-.18-.382-.22-.683-.254-1.761l-.047-1.286h5.277zm6.637.086c-.027 1.207-.055 1.434-.234 1.77-1.051 1.988-3.817 1.922-4.723-.102-.18-.394-.227-.675-.254-1.761l-.039-1.286h5.289zm6.676-.16c0 1.426-.16 1.989-.723 2.57-1.031 1.06-2.773 1.079-3.75.047-.61-.656-.723-1.023-.758-2.503l-.039-1.332h5.27zm6.656-.066c0 1.426-.133 1.941-.676 2.55-1.058 1.2-2.84 1.2-3.898 0-.543-.609-.676-1.124-.676-2.55v-1.152h5.25zm6.637.18c-.028 1.18-.055 1.386-.242 1.761-.883 1.688-2.973 2.035-4.266.696-.563-.582-.723-1.145-.723-2.57v-1.22h5.27zm6.656-.047c-.027 1.086-.074 1.367-.254 1.761-.906 2.024-3.672 2.09-4.723.102-.18-.336-.207-.563-.234-1.77l-.039-1.379h5.289zm6.656 0c-.035 1.078-.074 1.379-.254 1.761-.402.91-1.152 1.446-2.117 1.528-1.172.093-2.062-.395-2.57-1.395-.281-.574-.29-.62-.29-1.887v-1.293h5.278zM8.72 19.949c.61.356 1.367.516 2.25.469.695-.027.918-.082 1.46-.355a4.633 4.633 0 001.126-.797l.468-.489.622.582c.87.825 1.394 1.024 2.746 1.032.984 0 1.07-.02 1.68-.32a4.6 4.6 0 001.132-.813l.508-.508.25.328c.34.442 1.238 1.031 1.86 1.211.644.188 1.714.188 2.359 0 .62-.18 1.52-.77 1.86-1.21l.25-.329.507.508a4.6 4.6 0 001.133.812c.61.301.695.32 1.68.32 1.35-.007 1.874-.206 2.745-1.03l.622-.583.468.489c.282.28.739.609 1.125.797.543.273.766.328 1.461.355 1.32.066 2.242-.281 3.133-1.191l.45-.457.503.503c.528.528 1.024.829 1.672 1.016l.383.11.027 9.769.02 9.77H16.78v-7.93c0-8.778.028-8.336-.601-8.785l-.29-.207h-4.5c-4.96 0-4.753-.028-5.175.59-.16.246-.168.695-.195 8.289L6 39.938H4.781l.02-9.77.027-9.77.383-.109c.648-.187 1.144-.488 1.66-1.016l.488-.496.516.489c.281.261.664.57.844.683zm6.656 12.207v7.782H7.406V24.374h7.969zm30.945 9.461c.274.27.274.29.274 1.36v1.086H1.406v-1.086c0-1.07 0-1.09.274-1.36l.27-.273h44.1zm0 0" />
      <path d="M18.984 23.156c-.214.102-.468.328-.562.489-.18.3-.188.503-.188 6.261 0 5.551.008 5.973.168 6.262.094.168.301.395.47.488.292.18.554.188 10.901.188H40.38l.316-.215c.676-.441.649-.2.649-6.676 0-5.558-.008-5.832-.188-6.215-.14-.32-.273-.441-.601-.59-.403-.18-.61-.18-4.922-.16-4.266.028-4.5.035-4.688.207-.25.235-.261.739-.008.992.18.18.31.188 4.594.188h4.407v11.063h-20.25V24.374h8.69l.196-.215c.254-.273.262-.629.028-.918l-.176-.226-4.54-.028c-4.378-.02-4.534-.02-4.902.168zm0 0M13.172 30.676c-.367.195-.422.363-.422 1.226 0 .938.066 1.118.46 1.278.224.093.317.093.552-.032.355-.187.394-.289.394-1.226 0-.93-.039-1.04-.383-1.219-.312-.168-.359-.168-.601-.027zm0 0" />
    </svg>
  )
}

export default SvgComponent