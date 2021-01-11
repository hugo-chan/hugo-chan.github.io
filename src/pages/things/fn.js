import React from "react"
import TopArrow from "../../components/toparrow"
import Figure from "../../components/figure"
import LinkBar from "../../components/links/linkbar"

import style from "../../styles/index.module.css"
/**
 * Fn Page 6
 */
export default function Tv() {
  return (
    <div className={style.thingBody}>
      <div className={style.thingHead}>
        <TopArrow link="/things/hk"></TopArrow>
        <LinkBar></LinkBar>
      </div>
      <div className={style.thingContent}>
        <Figure link="/hidden/fn.png" caption="This Fortnite Creative map I spent hours in"></Figure>
      </div>
      <div className={style.thingFoot}>
      </div>
    </div>
  )
}