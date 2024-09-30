<template>
  <div class="grid grid-cols-3 gap-3">
    <CardItem
      v-for="(card, index) in cards"
      :key="index"
      :title="card.title"
      :description="card.description"
      :image="card.image"
    />
  </div>
</template>

<script>
import CardItem from '@/components/commons/CardItem.vue';

export default {
  components: {
    CardItem
  },
  data() {
    return {
      cards: [
      {
          title: "Management",
          description: `What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: "https://via.placeholder.com/150"
        },
        {
          title: "Leadership",
          description: `Leadership is both a research area and a practical skill encompassing the ability of an individual, group, or organization.`,
          image: "https://via.placeholder.com/150"
        },
        {
          title: "Strategy",
          description: `Strategy is a high-level plan to achieve one or more goals under conditions of uncertainty.`,
          image: "https://via.placeholder.com/150"
        }
      ]
    };
  }
};
</script>
