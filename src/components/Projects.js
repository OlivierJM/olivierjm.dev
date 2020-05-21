import React from "react"
import posed from "react-pose"
import SplitText from "react-pose-text"

const _quote = [
  {
    quote:
      "You should name a variable using the same care with which you name a first-born child.",
    author: "James O. Coplien",
  },
  {
    quote:
      "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    author: "Pele",
  },
]

const QuoteContainer = posed.div({
  exit: {
    x: "-100%",
  },
  enter: {
    x: "0%",
    beforeChildren: true,
    staggerChildren: 50,
  },
})

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 },
}

export default function BlogList() {
  function generateColor() {
    return (
      "#" +
      Math.random()
        .toString(16)
        .substr(-6)
    )
  }

  return (
    <section>
      <div className="cell medium-9 medium-cell-block-y">
        <div className="grid-container">
          <div
            style={{
              marginTop: "20%",
            }}
          >
            <QuoteContainer initialPose="exit" pose="enter">
              {_quote.map(quote => (
                <React.Fragment key={Math.random() + 1}>
                  <h1
                    style={{
                      color: generateColor(),
                    }}
                    className="text-center subheader"
                  >
                    <SplitText charPoses={charPoses}>{quote.quote}</SplitText>
                  </h1>
                  <span
                    style={{
                      color: generateColor(),
                      float: "right",
                    }}
                  >
                    <SplitText charPoses={charPoses}>{quote.author}</SplitText>
                  </span>
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </QuoteContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
