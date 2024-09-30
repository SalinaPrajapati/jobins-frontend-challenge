<template>
  <div>
    <h3 class="font-semibold mb-3">Other Management</h3>
    <div class="grid grid-cols-3 gap-3">
      <CardItem
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :description="card.description"
      />
    </div>
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
          title: "Leadership",
          description: `Leadership is both a research area and a practical skill encompassing the ability of an individual, group, or organization to "lead" or guide other individuals, teams, or entire organizations.`
        },
        {
          title: "Strategy",
          description: `Strategy is a high-level plan to achieve one or more goals under conditions of uncertainty. In the sense of the "art of the general", which included several subsets of skills including tactics, siegecraft, logistics, etc.`
        },
        {
          title: "Brand",
          description: `Brand is a high-level plan to achieve one or more goals under conditions of uncertainty. In the sense of the "art of the general", which included several subsets of skills including tactics, siegecraft, logistics, etc.`
        }
      ]
    };
  }
};
</script>
