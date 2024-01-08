<template>
  <div v-if="!isMobile()" class="tabs__wrapper">
    <InfoTabs>
      <div v-for="section in sections" :key="section.title">
        <InfoTab :title="section.title"><div v-html="section.content"></div></InfoTab>
      </div>
    </InfoTabs>
  </div>
  <div v-else>
    <div class="accordions_wrapper">
      <Accordion
        v-for="(accordion, i) in sections"
        :key="i"
        :accordion="accordion"
        :index="i"
        :isOpen="accordion.isActive"
        @toggleAccordion="toggleAccordion"
      />
    </div>
  </div>
  <div v-show="hasResizeConfig">{{ windowWidth }}</div>
</template>

<script>
import InfoTabs from '../components/InfoTabs.vue'
import InfoTab from '../components/InfoTab.vue'
import Accordion from '../components/Accordion.vue'
import sectionData from '../data/data.json'

export default {
  components: {
    InfoTabs,
    InfoTab,
    Accordion
  },
  data() {
    return {
      sections: sectionData,
      windowWidth: window.innerWidth,
      hasResizeConfig: false
    }
  },
  methods: {
    isMobile() {
      if (window.innerWidth < 992) {
        return true
      } else {
        return false
      }
    },
    onResize() {
      this.windowWidth = window.innerWidth
    },
    toggleAccordion: function (index) {
      this.sections = this.sections.map((accordion, i) => {
        if (index === i) {
          accordion.isActive = !accordion.isActive
        } else {
          accordion.isActive = false
        }
        return accordion
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })

    if (this.isMobile) {
      this.sections = this.sections.map((accordion, i) => {
        if (i === 0) {
          accordion.isActive = true
        }
        return accordion
      })
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style scoped>
.tabs__wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  margin: 0;
  padding: 20px;
}
</style>
