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
                fieldsData.dateStart != '' ? reversDate(fieldsData.dateStart) : dates.dateStart
              }}</span>
            </h3>
            <input v-model="fieldsData.dateStart" type="date" class="s-admin__input" />
          </div>
          <div class="s-admin__column">
            <h3 class="s-admin__subtitle">
              Дата завершения периода:
              <span class="s-admin__date">{{
                fieldsData.dateEnd != '' ? reversDate(fieldsData.dateEnd) : dates.dateEnd
              }}</span>
            </h3>
            <input v-model="fieldsData.dateEnd" type="date" class="s-admin__input" />
          </div>
        </div>
        <div class="s-admin__row">
          <div class="s-admin__column">
            <h3 class="s-admin__subtitle">Загрузить:</h3>
            <input ref="fileToDownload" type="file" class="s-admin__input" @:change="handleFileUpload()" />
          </div>
        </div>
        <button
          :class="isFileLoaded === '' ? 's-admin__button s-admin__button-disabled' : 's-admin__button'"
          @click.prevent="sendForm"
        >
          отправить
        </button>
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

let fileToDownload = ref(null);
let isFileLoaded = ref('');

let fieldsData = reactive({
  dateStart: '',
  dateEnd: '',
  dateCurrent: '',
  fileImport: '',
});

const handleFileUpload = () => {
  isFileLoaded.value = fileToDownload.value.files[0].name;
};

const reversDate = (date) => {
  return date.split('-').reverse().join('.');
};

async function sendForm() {
  fieldsData.dateCurrent = reversDate(new Date().toISOString().split('T')[0]);
  fieldsData.dateStart = reversDate(fieldsData.dateStart);
  fieldsData.dateEnd = reversDate(fieldsData.dateEnd);

  if (fieldsData.dateStart === '') {
    fieldsData.dateStart = props.dates.dateStart;
  }
  if (fieldsData.dateEnd === '') {
    fieldsData.dateEnd = props.dates.dateEnd;
  }

  fieldsData.fileImport = await loadFile(fileToDownload.value.files[0]);
  addDate(fieldsData);

  isFileLoaded.value = '';
  navigateTo('/');
}

function loadFile(file) {
  return new Promise((resolve) => {
    let reader = new FileReader();
    reader.onload = function (event) {
      let data = event.target.result;
      resolve(data);
    };
    reader.readAsText(file);
  });
}
</script>

<style lang="scss">
@import './s-admin.scss';
</style>
