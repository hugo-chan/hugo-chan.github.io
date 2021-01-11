import React from "react"

import style from "../styles/index.module.css"

/**
 * Green arrow at the top of the page
 * @param {*} props 
 */
export default function TopArrow(props) {
  return (
    <div className={style.topDiv}>
        <a href={props.link} style={{backgroundImage:"none", margin:"auto"}}>
            <img className={style.arrowUpsideDown} src="/hidden/arrow.jpg" alt="Previous page"></img>
        </a>
    </div>
  )
}