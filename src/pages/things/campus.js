import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"
import Figure from "../../components/figure"

import style from "../../styles/index.module.css"
/**
 * Campus Page 2
 */
export default function Campus() {
  return (
    <div className={style.thingBody}>
      <div className={style.thingHead}>
        <TopArrow link="/things/tv"></TopArrow>
      </div>
      <div className={style.thingContent}>
        <Figure link="/hidden/campus.jpg" caption="This photo of campus I took in Freshman year"></Figure>
      </div>
      <div className={style.thingFoot}>
      <BottomArrow link="/things/arsenal"></BottomArrow>
      </div>
    </div>

  )
}