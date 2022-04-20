import React from 'react'
import './Features.css'
import Feature from '../../components/feature/Feature'

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Become the tended active',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Message or am nothing',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among leave law built now. In built table in an rapid blush.',
  },
  {
    title: 'Really country bumpkin here',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
]

const Features = () => {
  const createFeatureData = () =>
    featuresData.map((item, index) => (
      <Feature key={item.title + index} title={item.title} text={item.text} />
    ))

  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to aget Started!</p>
      </div>
      <div className="gpt3__features-container">{createFeatureData()}</div>
    </div>
  )
}

export default Features
