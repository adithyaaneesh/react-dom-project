import React from 'react'

const FaqCard = (props) => {

    const { data } = props
  return (
    <div className='faq-card'>
        <h4>{data.question}</h4>
        <p>{data.answer}</p>
    </div>
  )
}

export default FaqCard
