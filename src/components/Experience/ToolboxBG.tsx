import * as React from "react"
const ToolboxBG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={700}
    height={700}
    opacity={0.73}
    className="min-h-full min-w-full"
  >
    <defs>
      <filter
        id="a"
        width="140%"
        height="140%"
        x="-20%"
        y="-20%"
        colorInterpolationFilters="linearRGB"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
      >
        <feTurbulence
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          baseFrequency={0.102}
          numOctaves={4}
          result="turbulence"
          seed={15}
          stitchTiles="stitch"
        />
        <feSpecularLighting
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          in="turbulence"
          lightingColor="#fff"
          result="specularLighting"
          specularConstant={0.75}
          specularExponent={20}
          surfaceScale={15}
        >
          <feDistantLight azimuth={3} elevation={100} />
        </feSpecularLighting>
      </filter>
    </defs>
    <path fill="hsl(193, 82%, 31%)" d="M0 0h700v700H0z" />
    <path fill="#fff" d="M0 0h700v700H0z" filter="url(#a)" />
  </svg>
)
export default ToolboxBG;
