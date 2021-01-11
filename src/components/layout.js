import React from "react"

/**
 * Container for centered divs (specify margin on top)
 * @param {*} props 
 */
export default function Layout(props) {
  return (
    <div style={{ minWidth: 500, margin: `auto`, maxWidth: 700, padding: `0 1rem` }}>
      {props.children}
    </div>
  )
}