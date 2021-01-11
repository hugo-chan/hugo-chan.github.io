import React from "react"
import BottomArrow from "../components/bottomarrow"
import LinkBar from "../components/links/linkbar"

import style from "../styles/index.module.css"

/**
 * Things I like to think about page
 */
export default function Things() {
  return (
    <div>
        <LinkBar></LinkBar>
        <div className={style.almostCenterDiv}>
            <h1 style={{ textAlign: `center` }}>Things I like to think about</h1>
        </div>
        <BottomArrow link="/things/tv"></BottomArrow>
        {/* Prefetching images */}
        <link rel="prefetch" href="/hidden/tv.jpg"/>
        <link rel="prefetch" href="/hidden/campus.jpg"/>
        <link rel="prefetch" href="/hidden/arsenal.jpg"/>
        <link rel="prefetch" href="/hidden/madeon.jpg"/>
        <link rel="prefetch" href="/hidden/hk.jpg"/>
        <link rel="prefetch" href="/hidden/fn.jpg"/>
    </div>
  )
}
