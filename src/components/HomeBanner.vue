<template>
  <section class="mfa-home-banner">
    <div class="row">
      <div class="col-12">
        <aside class="mfa-banner-container mfa-banner-container--large_overlay" aria-label="banner">
          <div class="mfa-banner__fullbleed-banner">
            <div class="mfa-banner">
              <img
                class="img-fluid img-web-rendition"
                src="https://via.placeholder.com/1920x650"
                alt="placeholder desktop image"
              />
              <img
                class="img-fluid img-mobile-rendition"
                src="https://via.placeholder.com/600x600"
                alt="placeholder mobile image"
              />

              <div class="mfa-banner__content large-overlay" tabindex="0">
                <div class="banner__content-container">
                  <h1>Hello Developer!</h1>
                  <p>Lorem, ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mfa-banner {
  position: relative;
  display: flex;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.mfa-banner .img-fluid {
  width: 100%;
  max-width: none;
  min-height: 240px;
  max-height: 420px;
}
.mfa-banner .mfa-banner__content {
  position: absolute;
}
.mfa-banner .large-overlay {
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  background: rgba(0, 0, 0, 0.3);
  min-height: 240px;
  max-height: 420px;
  color: white;
}
.mfa-banner .large-overlay .banner__content-container {
  left: auto;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -240px;
  vertical-align: middle;
  text-align: center;
}
.mfa-banner-container .mfa-banner__fullbleed-banner {
  box-shadow: none;
}
.mfa-banner-container {
  position: relative;
  z-index: 0;
  margin-bottom: 40px;
}
.mfa-banner-container .mfa-banner__content {
  -webkit-box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.23);
  width: 100%;
  padding: 20px;
  display: block;
  padding-top: 40px;
}
h1 {
  font-weight: 700;
}
.banner__content-container {
  font-size: 20px;
}
@media screen and (min-width: 768px) {
  .mfa-banner-container--large_overlay .img-mobile-rendition {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .mfa-banner-container--large_overlay .img-web-rendition {
    display: none;
  }
}
@media screen and (width: 768px) {
  .mfa-banner-container--large_overlay .img-web-rendition {
    display: block;
  }
}
@media screen and (max-width: 768px) {
  .mfa-banner .large-overlay .banner__content-container {
    max-width: 95%;
  }
}
</style>
