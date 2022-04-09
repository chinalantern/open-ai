import React from 'react'
import { Feature } from '../../components'
import './WhatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is gpt3?"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Gentrify activated charcoal scenester. Tousled church-key shabby chic pinterest heirloom cray PBR disrupt tumeric neutra occupy viral bushwick actually snackwave. Bitters artisan cred literally. Readymade selfies hexagon, YOLO"
        />
        <Feature
          title="Knowledge-Base"
          text="Edison bulb shoreditch cloud bread roof party 8-bit +1 dreamcatcher raclette wayfarers direct trade pabst. Lo-fi before they sold out whatever tilde disrupt put a bird on it man bun vaporware echo park."
        />
        <Feature
          title="Education"
          text="Lyft lo-fi fam bitters bicycle rights church-key. Distillery gochujang echo park, tacos air plant fixie keffiyeh poke williamsburg tbh. Tote bag chia aesthetic glossier mixtape four loko disrupt salvia."
        />
      </div>
    </div>
  )
}

export default WhatGPT3
