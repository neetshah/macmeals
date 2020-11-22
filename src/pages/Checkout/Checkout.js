import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ToastProvider, useToasts } from 'react-toast-notifications'

const Checkout = ({setCartItems}) => {
    const [values, setValues] = useState({name: "", number: "", exp: "", yy: "", cvv: ""})
    const { addToast } = useToasts()

    const Submit = (setCartItems) => {
        console.log("VALUES: ",values)
        if (values.number.length < 12 || values.number.length > 20 || parseInt(values.exp) > 12 || parseInt(values.exp) < 0 || parseInt(values.yy) < 0 ||
        parseInt(values.yy) > 99 || parseInt(values.cvv) > 999 || parseInt(values.cvv) < 0) {
        addToast('Order Error, check payment info again', { appearance: 'error' })
        } else {
            addToast('Order Placed!', { appearance: 'success' })
            setCartItems([])
        }
    }

      return (
        <div className="container py-5">
          {/* For demo purpose */}
          <div className="row mb-4">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4">Payment</h1>
            </div>
          </div> {/* End */}
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="card ">
                <div className="card-header">
                  <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                    {/* Credit card form tabs */}
                    <ul role="tablist" className="nav bg-light nav-pills rounded nav-fill mb-3">
                      <li className="nav-item"> <a data-toggle="pill" className="nav-link active "> <i className="fas fa-credit-card mr-2" /> Credit Card </a> </li>
                    </ul>
                  </div> {/* End */}
                  {/* Credit card form content */}
                  <div className="tab-content">
                    {/* credit card info*/}
                    <div id="credit-card" className="tab-pane fade show active pt-3">
                      <form role="form">
                        <div className="form-group"> <label htmlFor="username">
                            <h6>Card Owner</h6>
                          </label> <input type="text" name="username" placeholder="Card Owner Name" required className="form-control" onChange={(e) => setValues({...values, name: e.target.value})}/> </div>
                        <div className="form-group"> <label htmlFor="cardNumber">
                            <h6>Card number</h6>
                          </label>
                          <div className="input-group"> <input type="number" name="cardNumber" placeholder="Valid card number" className="form-control " onChange={(e) => setValues({...values, number: e.target.value})}required />
                            <div className="input-group-append"> <span className="input-group-text text-muted"> <i className="fab fa-cc-visa mx-1" /> <i className="fab fa-cc-mastercard mx-1" /> <i className="fab fa-cc-amex mx-1" /> </span> </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-8">
                            <div className="form-group"> <label><span className="hidden-xs">
                                  <h6>Expiration Date</h6>
                                </span></label>
                              <div className="input-group"> <input type="number" placeholder="MM" name className="form-control" required onChange={(e) => setValues({...values, exp: e.target.value})}/> <input type="number" placeholder="YY" name className="form-control" required onChange={(e) => setValues({...values, yy: e.target.value})}/> </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                <h6>CVV <i className="fa fa-question-circle d-inline" /></h6>
                              </label> <input type="text" required className="form-control" onChange={(e) => setValues({...values, cvv: e.target.value})}/> </div>
                          </div>
                        </div>
                        <div className="card-footer"> <button type="button" className="subscribe btn btn-primary btn-block shadow-sm" onClick={() => Submit(setCartItems)}> Confirm Payment </button>
                        </div></form>
                    </div> {/* End */}
                    
                  </div>
                </div>
              </div>
            </div>
          </div></div>
      );
  }
  export default Checkout