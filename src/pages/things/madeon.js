import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"
import Figure from "../../components/figure"

/**
 * Madeon Page 4
 */
export default function Madeon() {
  return (
    <div>
      <TopArrow link="/things/arsenal"></TopArrow>
      <Figure link="/hidden/madeon.jpg" caption="This Madeon set (22/11/19 Concord Music Hall)"></Figure>
      <BottomArrow link="/things/hk"></BottomArrow>
    </div>

  )
}