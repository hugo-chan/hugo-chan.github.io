import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"
import Figure from "../../components/figure"

import style from "../../styles/index.module.css"
/**
 * Arsenal Page 3
 */
export default function Arsenal() {
  return (
    <div className={style.thingBody}>
      <div className={style.thingHead}>
        <TopArrow link="/things/campus"></TopArrow>
      </div>
      <div className={style.thingContent}>
        <Figure link="/hidden/arsenal.jpg" caption="This Arsenal vs Crystal Palace game I saw live where Giroud scored the famous scorpion kick goal"></Figure>
      </div>
      <div className={style.thingFoot}>
        <BottomArrow link="/things/madeon"></BottomArrow>
      </div>
    </div>
  )
}