import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"
import Figure from "../../components/figure"
import LinkBar from "../../components/links/linkbar"

import style from "../../styles/index.module.css"
/**
 * Madeon Page 4
 */
export default function Madeon() {
  return (
    <div className={style.thingBody}>
      <div className={style.thingHead}>
        <TopArrow link="/things/arsenal"></TopArrow>
        <LinkBar></LinkBar>
      </div>
      <div className={style.thingContent}>
        <Figure link="/hidden/madeon.jpg" caption="This Madeon set (22/11/19 Concord Music Hall)" alt="Madeon"></Figure>
      </div>
      <div className={style.thingFoot}>
        <BottomArrow link="/things/hk"></BottomArrow>
      </div>
    </div>
  )
}