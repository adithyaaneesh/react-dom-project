import React from 'react'
import '../styles/Gift.css'
const Gift = () => {
  return (
    <div className='gift'>
        <div>
            <img src='https://static.wixstatic.com/media/e90a2a_c3de803545f340df9dd4aa88a72e0718~mv2.png/v1/fill/w_677,h_451,al_c,lg_1,q_85,enc_auto/e90a2a_c3de803545f340df9dd4aa88a72e0718~mv2.png'></img>
        </div>
        <div>
            <div>
                <h1>Gift Card</h1>
                <p>$25</p>
                <p>You can't go wrong with a gift card. Choose an amount and write a personalized message to make this gift your own.</p>
            </div>
            <div>
                <div>
                    <div>$25</div>
                    <div>$50</div>
                    <div>$100</div>
                    <div>$150</div>
                    <div>$200</div>
                </div>
                <div>
                    <div>$25</div>
                </div>
                <div>
                </div>
                <div>
                    <button>For someone else</button>
                    <button>For My self</button>
                </div>
                <div>
                    <form>
                        <label>Recipient email*</label>
                        <input type='email'></input>
                        <label>Recipient name</label>
                        <input type='text'></input>
                        <label>Delivery date</label>
                        <input type='date' placeholder='Now'></input>
                        <label>Message</label>
                        <input type='text'></input>
                        <button>Add to cart</button>
                        <button>By Now</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Gift