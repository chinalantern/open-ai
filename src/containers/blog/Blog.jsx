import React from 'react'
import './Blog.css'

import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import { Article } from '../../components/'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Mar 22, 2022"
            title="GPT-3 and Apen AI is the future. Let us explore how?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Mar 22, 2022"
            title="GPT-3 and Apen AI is the future. Let us explore how?"
          />
          <Article
            imgUrl={blog03}
            date="Mar 22, 2022"
            title="GPT-3 and Apen AI is the future. Let us explore how?"
          />
          <Article
            imgUrl={blog04}
            date="Mar 22, 2022"
            title="GPT-3 and Apen AI is the future. Let us explore how?"
          />
          <Article
            imgUrl={blog05}
            date="Mar 22, 2022"
            title="GPT-3 and Apen AI is the future. Let us explore how?"
          />
        </div>
      </div>
    </div>
  )
}

export default Blog
