<template>
  <div
    class="rounded-pill roadmap-line__big-circle"
    @click="changeActiveTab" >
    <div class="position-absolute roadmap-line__block">
      <p class="roadmap-line__block-title text-uppercase text-white font-weight-bold">{{item.title}}</p>
      <p class="roadmap-line__block-subtitle text-uppercase font-weight-bold mb-0">{{item.subTitle}}</p>
    </div>
    <div class="position-absolute roadmap-line__vertical-line"/>
    <div class="position-absolute rounded-pill roadmap-line__small-circle"/>
  </div>
</template>

<script>
export default {
  name: "HomeRoadmapActiveCircle",
  props:{
    item:{
      type: Object
    },
    index:{
      type: Number
    }
  },
  emits:['changeTab'],
  setup(props, {emit}){
    const changeActiveTab = () => {
      emit('changeTab', props.item.componentName, props.index)
    }
    return{ changeActiveTab}
  }
}
</script>

