import React from "react"

import style from "../styles/index.module.css"

/**
 * Green arrow at the top of the page
 * @param {*} props 
 */
export default function Figure(props) {
  return (
      <div className={style.temp}>
        <img className={style.thingImg} src={props.link} alt='fortnite'/>
        <p className={style.thingCaption}>{props.caption}</p>
      </div>

  )
}