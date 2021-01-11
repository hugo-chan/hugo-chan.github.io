import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"
import Figure from "../../components/figure"

/**
 * Campus Page 2
 */
export default function Campus() {
  return (
    <div>
      <TopArrow link="/things/tv"></TopArrow>
      <Figure link="/hidden/campus.jpg" caption="This photo of campus I took in Freshman year"></Figure>
      <BottomArrow link="/things/arsenal"></BottomArrow>
    </div>

  )
}