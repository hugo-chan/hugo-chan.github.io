import React from "react"

import style from "../styles/index.module.css"

/**
 * Green arrow at the bottom of the page
 * @param {*} props 
 */
export default function BottomArrow(props) {
  return (
    <div className={style.bottomDiv}>
        <a href={props.link} style={{backgroundImage:"none", margin:"auto"}}>
            <img className={style.arrow} src="/hidden/arrow.jpg" alt="Next page"></img>
        </a>
    </div>
  )
}