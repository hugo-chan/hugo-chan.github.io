import React from "react"
import BottomArrow from "../components/bottomarrow"

import style from "../styles/index.module.css"

/**
 * Things I like to think about page
 */
export default function Things() {
  return (
    <div>
        <div className={style.almostCenterDiv}>
            <h1>Things I like to think about</h1>
        </div>
        <BottomArrow link="/things/tv"></BottomArrow>
    </div>
  )
}
