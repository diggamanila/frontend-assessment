<template>
  <section class="mfa-card-deck">
    <div class="container my-6">
      <div class="row g-5 mb-5">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card mfa-featured-teaser_variant">
            <img
              src="https://via.placeholder.com/400x300"
              alt="placeholder card image"
              class="mfa-teaser-image card-img-top card-img-bottom"
            />
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat
                in. Faucibus a pellentesque sit amet porttitor. Erat velit scelerisque in dictum
                non. Ipsum dolor sit amet consectetur adipiscing elit ut. Vitae auctor eu augue ut.
                Iaculis urna id volutpat lacus.
              </p>
            </div>
            <div class="mfa-card-footer d-flex justify-content-center">
              <a class="btn mfa-button mfa-button-round" href="#" title="banner link">Read more</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card mfa-featured-teaser_variant">
            <img
              src="https://via.placeholder.com/400x300"
              alt="placeholder card image"
              class="mfa-teaser-image card-img-top card-img-bottom"
            />
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat
                in. Faucibus a pellentesque sit amet porttitor.
              </p>
            </div>
            <div class="mfa-card-footer d-flex justify-content-center">
              <a class="btn mfa-button mfa-button-round" href="#" title="banner link">Read more</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card mfa-featured-teaser_variant">
            <img
              src="https://via.placeholder.com/400x300"
              alt="placeholder card image"
              class="mfa-teaser-image card-img-top card-img-bottom"
            />
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat
                in. Faucibus a pellentesque sit amet porttitor. Erat velit scelerisque in dictum
                non. Ipsum dolor sit amet consectetur adipiscing elit ut.
              </p>
            </div>
            <div class="mfa-card-footer d-flex justify-content-center">
              <a class="btn mfa-button mfa-button-round" href="#" title="banner link">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
p {
  text-align: center;
  padding-top: 20px;
  font-weight: 500;
}
.mfa-card-footer {
  margin-bottom: 0;
  height: 50px;
}
.mfa-button {
  border: 2px solid black;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
  position: absolute;
  bottom: 15px;
  transition-duration: 0.4s;
}
.mfa-button:hover {
  background-color: #002664;
  color: white;
}
.card.mfa-featured-teaser_variant {
  display: block;
  position: relative;
  transition:
    border-color 0.2s,
    box-shadow 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.card.mfa-featured-teaser_variant:hover {
  box-shadow: 0 8px 33px -7px rgba(0, 0, 0, 0.27);
  z-index: 1;
}
.mfa-teaser-image {
  border-radius: 10px;
}
.card {
  padding: 20px;
  box-shadow: 0 0 5px rgba(196, 196, 196, 0.884);
  height: 100%;
  align-items: center;
}
.card-text {
  text-align: center;
}
@media (max-width: 768px) {
  .mfa-featured-teaser_variant {
    transition:
      border-color 0.2s,
      box-shadow 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .mfa-featured-teaser_variant:hover {
    box-shadow: 0 8px 33px -7px rgba(0, 0, 0, 0.27);
    z-index: 1;
  }
}
</style>
