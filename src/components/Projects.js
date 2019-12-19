import React from "react"

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
    const intervalId = setInterval(() => {
      getQuote()
    }, 10000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section>
      <div className="cell medium-9 medium-cell-block-y">
        <div className="grid-container">
          <div
            style={{
              marginTop: "20%",
            }}
          >
            <h1 className="text-center subheader">{quote.quote}</h1>
            <p className="text-center">{quote.author}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
