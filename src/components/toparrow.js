import React from "react"

import style from "../styles/index.module.css"

/**
 * Green arrow at the top of the page
 * @param {*} props 
 */
export default function TopArrow(props) {
  return (
    <div className={style.topDiv}>
        <a href={props.link} style={{backgroundImage:"none"}}>
            <img className={style.rotate180} src="/hidden/arrow.png" width="40" height="40" alt="Next page"></img>
        </a>
    </div>
  )
}