<template>
  <section class="s-admin">
    <div class="s-admin__container l-wide">
      <h1 class="s-admin__title">Панель администратора:</h1>
      <div class="s-admin__top">
        <div class="s-admin__row">
          <div class="s-admin__column">
            <h3 class="s-admin__subtitle">
              Дата начала периода:
              <span class="s-admin__date">{{
                fieldsData.dateStart != '' ? fieldsData.dateStart : dates.dateStart
              }}</span>
            </h3>
            <input v-model="fieldsData.dateStart" type="date" class="s-admin__input" />
          </div>
          <div class="s-admin__column">
            <h3 class="s-admin__subtitle">
              Дата завершения периода:
              <span class="s-admin__date">{{ fieldsData.dateEnd != '' ? fieldsData.dateEnd : dates.dateEnd }}</span>
            </h3>
            <input v-model="fieldsData.dateEnd" type="date" class="s-admin__input" />
          </div>
        </div>
        <button @click.prevent="sendForm">отправить</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import addDate from '~/api/addDate';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  dates: {
    type: Object,
    default() {
      return {};
    },
  },
});

let fieldsData = reactive({
  dateStart: '',
  dateEnd: '',
  dateCurrent: '',
});

// eslint-disable-next-line no-shadow
async function sendForm() {
  /* Добавляю текущую дату в выбор пользователя (перезаписываю в db) */
  fieldsData.dateCurrent = new Date().toISOString().split('T')[0];

  if (fieldsData.dateStart === '') {
    fieldsData.dateStart = props.dates.dateStart;
  }
  if (fieldsData.dateEnd === '') {
    fieldsData.dateEnd = props.dates.dateEnd;
  }
  addDate(fieldsData);
}
</script>

<style lang="scss">
@import './s-admin.scss';
</style>
