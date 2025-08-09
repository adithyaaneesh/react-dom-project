import React from 'react'
import '../styles/faq.css'
import { FaqList } from '../data/Faq'

const Faq = () => {
  return (
    <div className="faq-container">
        <div className="faq-item">
            <div className="faq-question">
                <h3>Question 1 Title</h3>
                <span className="toggle-icon">+</span>
            </div>
                <div className="faq-answer">
                <p>Answer to Question 1.</p>
            </div>
        </div>
    </div>

  )
}

export default Faq
