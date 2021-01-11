import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"


/**
 * List item that is a link that produces a transition
 * In this case, the transition is a green cover with direction specified
 * @param {*} props 
 */
const AnimatedListLink = props => (
  <li style={{ display: `inline-block`, marginRight: props._marginRight }}>
    <AniLink cover direction={props._dir} bg="#36BAA0" duration={0.8} to={props.to}>{props.children}</AniLink>
  </li>
)

/**
 * A horizontal floating list of links
 * @param {*} props 
 */
export default function InternalLinks() {
  return (
    <div>
        <AnimatedListLink _dir="up" _marginRight="2rem" to="/about">
          About
        </AnimatedListLink>
        <AnimatedListLink _dir="up" to="/things">
          Things
        </AnimatedListLink>

    </div>
  )
}