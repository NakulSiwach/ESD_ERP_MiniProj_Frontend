import React from 'react'

import '../styles/Login.css';


const Login = () => {
  return (
    <div className='mainLoginBody'>
      <div className='navbarLogin' >
        navdata
      </div>

      <div className='d-flex container'>
        <div>
          <img className='imglogin' src='https://img.freepik.com/free-vector/gradient-erp-illustration_23-2149368728.jpg?t=st=1732180783~exp=1732184383~hmac=f6d7387cfba11eaa4a155f33585cfc58d5d4f95cb04d46f74c6182234f2082d9&w=900 ' alt="hi" />
        </div>

        <section class="mainb py-3 py-md-5">
          <div class="">
          <div class="row justify-content-center">
              <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div class="card border border-light-subtle rounded-3 shadow-sm">
                  <div class="card-body p-3 p-md-4 p-xl-5">
                  <div class="text-center mb-3">
                      
                  </div>
                  <h2 class="fs-1 fw-normal text-center text-dark mb-4">Login</h2>
                  <form action="#!">
                      <div class="row gy-2 overflow-hidden">

                      <div class="col-12">
                          <div class="form-floating mb-3">
                          <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required/>
                          <label for="email" class="form-label text-secondary">Email</label>
                          </div>
                      </div>
                      <div class="col-12">
                          <div class="form-floating mb-3">
                          <input type="password" class="form-control" name="password" id="password" value="" placeholder="Password" required/>
                          <label for="password" class="form-label text-secondary">Password</label>
                          </div>
                      </div>
                      
                      <div class="col-12">
                          <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                              <label class="form-check-label" for="flexSwitchCheckChecked">
                                  I agree to the <a href="#!" class="link-primary text-decoration-none">terms and conditions</a>
                              </label>
                          </div>
                      </div>
                      <div class="col-12">
                          <div class="d-grid my-3">
                          <button class="btn btn-primary btn-lg" type="submit">Create Account</button>
                          </div>
                      </div>
                      <div class="col-12">
                          <p class="m-0 text-secondary text-center">Already have an account? <a href="#!" class="link-danger text-decoration-none fw-bold">Log in</a></p>
                      </div>
                      </div>
                  </form>
                  </div>
              </div>
              </div>
          </div>
          </div>
      </section>
      </div>
    </div>
  )
}

export default Login














// <section class="mainb py-3 py-md-5">
//         <div class="container">
//         <div class="row justify-content-center">
//             <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
//             <div class="card border border-light-subtle rounded-3 shadow-sm">
//                 <div class="card-body p-3 p-md-4 p-xl-5">
//                 <div class="text-center mb-3">
                    
//                 </div>
//                 <h2 class="fs-1 fw-normal text-center text-dark mb-4">Login</h2>
//                 <form action="#!">
//                     <div class="row gy-2 overflow-hidden">

//                     <div class="col-12">
//                         <div class="form-floating mb-3">
//                         <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required/>
//                         <label for="email" class="form-label text-secondary">Email</label>
//                         </div>
//                     </div>
//                     <div class="col-12">
//                         <div class="form-floating mb-3">
//                         <input type="password" class="form-control" name="password" id="password" value="" placeholder="Password" required/>
//                         <label for="password" class="form-label text-secondary">Password</label>
//                         </div>
//                     </div>
                    
//                     <div class="col-12">
//                         <div class="form-check form-switch">
//                             <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
//                             <label class="form-check-label" for="flexSwitchCheckChecked">
//                                 I agree to the <a href="#!" class="link-primary text-decoration-none">terms and conditions</a>
//                             </label>
//                         </div>
//                     </div>
//                     <div class="col-12">
//                         <div class="d-grid my-3">
//                         <button class="btn btn-primary btn-lg" type="submit">Create Account</button>
//                         </div>
//                     </div>
//                     <div class="col-12">
//                         <p class="m-0 text-secondary text-center">Already have an account? <a href="#!" class="link-danger text-decoration-none fw-bold">Log in</a></p>
//                     </div>
//                     </div>
//                 </form>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </div>
//     </section>
