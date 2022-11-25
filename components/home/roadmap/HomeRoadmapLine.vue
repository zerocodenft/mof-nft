<template>
  <div class="w-100 position-relative roadmap-line">
    <div class="d-flex w-100 position-absolute roadmap-line-circles">
      <div
        v-for="(item,index) in tabs"
        :key="index">
        <template v-if="item.active">
          <RoadmapActiveCircle
            :item="item"
            :index="index"
            @changeTab="changeTab"/>
        </template>
        <template v-else>
          <RoadmapDefaultCircle
            :item="item"
            :index="index"
            @changeTab="changeTab"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import RoadmapActiveCircle from "~/components/home/roadmap/circles/RoadmapActiveCircle";
import RoadmapDefaultCircle from "~/components/home/roadmap/circles/RoadmapDefaultCircle";

export default {
  name: "RoadmapLine",
  components: {RoadmapDefaultCircle, RoadmapActiveCircle},
  props:{
    tabs:{
      type: Array,
      default: () => []
    }
  },
  emits:['changeTab'],
  setup(_,{emit}){
    const changeTab = (componentName, index) =>{
      emit('changeTab', componentName , index)
    }
    return {changeTab}
  }
}
</script>
