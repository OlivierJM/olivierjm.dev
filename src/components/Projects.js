import React from "react"
import "../styles/components/projects.css"

const _quote = {
  quote:
    "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
  author: "Patrick Mckenzie",
}

export default function BlogList() {
  const [quote, setQuote] = React.useState(_quote)

  React.useEffect(() => {
    async function getQuote() {
      const res = await fetch(
        "http://quotes.stormconsultancy.co.uk/random.json"
      )
      const data = await res.json()
      const quoteData = {
        quote: data.quote,
        author: data.author,
      }
      setQuote(quoteData)
    }
    getQuote()
  }, [])

  return (
    <section>
      <div className="cell medium-9 medium-cell-block-y">
        <div className="grid-container">
          <div className="trails-main">
            <div>
              <h1 className="text-center subheader">{quote.quote}</h1>
              <p className="text-center">{quote.author}</p>
              {/* {trail.map(({ x, height, ...rest }, index) => (
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
              {!toggle && (
                <h1 className="  subheader">
                  <span role="img" aria-label="welcome emojis">
                    🤗
                  </span>
                </h1>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
