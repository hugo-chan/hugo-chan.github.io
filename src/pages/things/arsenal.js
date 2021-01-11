import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"
import Figure from "../../components/figure"

/**
 * Arsenal Page 3
 */
export default function Arsenal() {
  return (
    <div>
      <TopArrow link="/things/campus"></TopArrow>
      <Figure link="/hidden/arsenal.jpg" caption="This Arsenal vs Crystal Palace game I saw live where Giroud scored the famous scorpion kick goal"></Figure>
      <BottomArrow link="/things/madeon"></BottomArrow>
    </div>

  )
}