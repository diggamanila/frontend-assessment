<template>
  <section class="mfa-tabs">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex">
          <div class="tabs-theme">
            <ul class="tabs-header">
              <li
                v-for="(infotab, index) in infotabs"
                :key="infotab.title"
                @click="selectTab(index)"
                :class="{ tab__selected: index === selectedIndex }"
              >
                {{ infotab.title }}
              </li>
            </ul>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sectionData from '../data/data.json'

export default {
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab
      infotabs: [] // all of the tabs
    }
  },
  mounted() {
    this.selectTab(0)
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i

      //loop over all the tabs
      this.infotabs.forEach((infotab, index) => {
        infotab.isActive = index === i
      })
    }
  }
}
</script>

<style>
ul.tabs-header {
  display: block;
  list-style: none;
  margin: 0 0 0 20px;
  padding: 0;
}
ul.tabs-header > li {
  padding: 15px 30px;
  border-radius: 10px;
  margin: 0;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
}
ul.tabs-header > li.tab__selected {
  font-weight: bold;
  border-radius: 10px 10px 0 0;
  border-bottom: 8px solid transparent;
}
.tab {
  display: inline-block;
  color: #000000;
  padding: 20px;
  width: 1000px;
  border-radius: 10px;
  min-height: 400px;
  width: 100%;
}
.tabs-theme .tab {
  background-color: #fff;
}
.tabs-theme .tabs-header li {
  background-color: #ddd;
  color: #000000;
}
.tabs-theme li.tab__selected {
  background-color: #fff;
  color: #000000;
}
</style>
