<template>
  <section class="s-list">
    <div class="s-list__container l-wide">
      <ul class="s-list__box">
        <li v-for="(item, index) in resp" :key="index" class="s-list__item" :class="`s-list__item-${index + 1}`">
          <p class="s-list__item-number">
            <span>{{ index + 1 }}</span>
          </p>
          <p class="s-list__item-name">{{ item[0] }}</p>
          <p class="s-list__item-work">{{ item[1] }}</p>
          <p class="s-list__item-price">{{ item[2] }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  content: {
    type: String,
    default() {
      return '';
    },
  },
});
const resp = ref([]);

const getContentInfo = () => {
  let arr = props.content.split(';').slice(4);
  let result = arr.map((el, i) => {
    if ((i + 2) % 3 != true) {
      return el;
    } else {
      // console.log(el.split('\r\n'));
      return el.split('\r\n')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
  });
  // console.log(result);
  function chunkArray(array, chunk) {
    const newArray = [];
    for (let i = 0; i < array.length; i += chunk) {
      newArray.push(array.slice(i, i + chunk));
    }
    return newArray;
  }

  const res = chunkArray(result, 3);
  resp.value = res;
};
watch(() => {
  getContentInfo();
});
</script>

<style lang="scss">
@import './s-list.scss';
</style>
