<template>
  <section class="mfa-accordion">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex">
          <div
            :class="isOpen ? 'accordion open' : 'accordion'"
            @click="$emit('toggleAccordion', index)"
          >
            <div class="question">{{ accordion.title }}</div>
            <div class="answer" v-html="accordion.content"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Accordion',
  props: ['accordion', 'index', 'isOpen']
}
</script>

<style scoped>
.accordion {
  display: block;
  width: 100%;
  max-width: 991px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}
.accordion .question {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.5s linear;
}
.accordion .question::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%) rotate(0deg);
  width: 20px;
  height: 20px;
  background-image: url('../assets/arrow.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.5s linear;
}
.accordion.open .question {
  margin-bottom: 15px;
}
.accordion.open .question::after {
  transform: translateY(-50%) rotate(180deg);
}
.accordion .answer {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0;
  overflow-y: hidden;
  transition: all 0.5s ease-out;
}
.accordion.open .answer {
  opacity: 1;
  max-height: 1000px;
}
</style>
