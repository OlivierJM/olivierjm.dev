import React from "react"
import { useTrail, animated } from "react-spring"
import "../styles/components/projects.css"

const items = ["olivierjm", ".", "dev"]
const config = { mass: 5, tension: 2000, friction: 200 }

export default function BlogList() {
  const [toggle, set] = React.useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <section>
      <div className="cell medium-9 medium-cell-block-y">
        <div className="grid-container">
          <div className="trails-main" onClick={() => set(state => !state)}>
            <div>
              {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                  key={items[index]}
                  className="trails-text text-center "
                  style={{
                    ...rest,
                    transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
                  }}
                >
                  <animated.div style={{ height }}>{items[index]}</animated.div>
                </animated.div>
              ))}
              {!toggle && <h1 className="  subheader">🤗</h1>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
