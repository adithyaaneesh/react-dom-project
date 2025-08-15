import React from 'react'
import '../styles/Gift.css'
import Counter from './Counter'
const Gift = () => {
  return (
    <section>
        <div className='gift container'>
            <div>
                <img src='https://static.wixstatic.com/media/e90a2a_c3de803545f340df9dd4aa88a72e0718~mv2.png/v1/fill/w_677,h_451,al_c,lg_1,q_85,enc_auto/e90a2a_c3de803545f340df9dd4aa88a72e0718~mv2.png'></img>
            </div>
            <div className='form-data'>
                <div className='card-head'>
                    <h1>eGift Card</h1>
                    <span>$25</span>
                    <p>You can't go wrong with a gift card. Choose an amount and write a personalized message to make this gift your own.</p>
                </div>
                <div className='price'>
                    <p>Amount</p>
                    <div className='price-button'>
                        <button>$25</button>
                        <button>$50</button>
                        <button>$100</button>
                        <button>$150</button>
                        <button>$200</button>
                    </div>
                    <div className='counting'>
                        <p>Quantity</p>
                        <div>
                            <Counter/>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className='card-for'>
                        <p>Who is the gift card for?</p>
                        <div>
                            <button>For someone else</button>
                            <button>For My self</button>
                        </div>
                    </div>
                    <div>
                        <form className='gift-form'>
                            <label>Recipient email*</label>
                            <input type='email' id='email' name='email'/>
                            <label>Recipient name</label>
                            <input type='text' id='name' name='name'/>
                            <label>Delivery date</label>
                            <input type='date' id="date"></input>
                            <label>Message</label>
                            <textarea type="text" name="message" id="message"></textarea>
                            <button>Add to cart</button>
                            <button>Buy Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Gift