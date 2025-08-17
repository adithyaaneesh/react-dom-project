import React from 'react'
import '../styles/faq.css'
import {FaqList} from '../data/Faq'
import FaqCard from './FaqCard'

const Faq = () => {


  return (
    <section>
      <div className='faq container'>
        <div className='faq-head'>
          <h2>FAQ</h2>
          <p>Frequently Asked Questions</p>
        </div>
        <div className="faqcard-container">
          {
            FaqList.map((item, idx) => <FaqCard data={item} key={idx}/> )
          }
        </div>
      </div>   
    </section>
  )
}

export default Faq
