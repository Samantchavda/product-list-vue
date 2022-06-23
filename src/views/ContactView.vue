<template>
  <div class="container py-4">
    <h4 class="mb-3  text-center">Conatct Us</h4>
    <form class="needs-validation" novalidate>
      <div class="row g-5">
        <div class="col-md-6 col-lg-6">

          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>

            <div class="col-12">
              <label for="mobilenumber" class="form-label">Mobile Number</label>
              <input type="text" class="form-control" id="mobilenumber" placeholder="0000000000"
                pattern="[7-9]{1}[0-9]{9}">
              <div class="invalid-feedback">
                Please enter a Mobile Number.
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 order-md-last">
          <div class="row g-3">
            <div class="col-12">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" rows="8"></textarea>
            </div>
          </div>

        </div>
      </div>
      <div class="text-center my-4">
        <button class="btn btn-primary btn-lg" type="submit">Submit Now</button>
      </div>
    </form>
    <hr class="my-4" />
    <div>
      <div class="row g-5">
        <div class="col-md-6 col-lg-6">

          <div class="row g-3">
            
          </div>
        </div>
        <div class="col-md-6 col-lg-6 order-md-last">
          <div class="row g-3">
            <div class=" col-md-1 col-xs-2 ">
              1
            </div>
            <div class="col-md-11 col-xs-10 ">
              <h5 class="mb-3  text-muted">Our Office Address</h5>
              <span>5 & 6, Lake View Corporate House, Asarwa, Ahmedabad, GJ 380016</span>
            </div>
            <div class=" col-md-1 col-xs-2 ">
              1
            </div>
            <div class="col-md-11 col-xs-10 ">
              <h5 class="mb-3  text-muted">General Enquiries</h5>
              <span>xyz@xyz.com</span>
            </div>
            <div class=" col-md-1 col-xs-2 ">
              1
            </div>
            <div class="col-md-11 col-xs-10 ">
              <h5 class="mb-3  text-muted">Call Us</h5>
              <span>0000000000</span>
            </div>
            <div class=" col-md-1 col-xs-2 ">
              1
            </div>
            <div class="col-md-11 col-xs-10 ">
              <h5 class="mb-3  text-muted">Our Timing</h5>
              <span>Mon - Sun : Open 24 hrs</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
