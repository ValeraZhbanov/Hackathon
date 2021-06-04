<template>
  <div class="container">
    <br />
    <!-- NAVBAR -->
    <div class="row">
      <div class="col-md-4 align-self-center">
        <h6 align="center">
          Онлайн Хакатон <br />
          новых образовательных решений
        </h6>
      </div>

      <div class="col-md-2 align-self-center">
        <h6 class="my" id="mod" @click="$bvModal.show('modal-rule')">
          Правила
        </h6>
      </div>

      <div class="col-md-2 align-self-center">
        <nuxt-link class="ButNav" to="VoiceMenu">
          <h6>Голосование</h6>
        </nuxt-link>
      </div>

      <div class="col-md-3 align-self-center">
        <h6 class="my" id="mod" @click="$bvModal.show('modal-voice')">
          Результаты
        </h6>
      </div>

      <div class="col-md-1 align-self-end">
        <b-button pill variant="outline-primary" @click="$bvModal.show('Enter')"
          >Вход</b-button
        >
      </div>
    </div>

    <!--  -->
    <b-modal id="modal-rule" centered hide-footer hide-header>
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
        @click="$bvModal.hide('modal-rule')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 align="center">Правила</h4>
      <br />
      <h6>1. Турнир проводится в два этапа</h6>
      <br />
      <h6>2. Количество участников в команде - не более 3</h6>
      <br />
      <h6>
        3. Запрещается привлечение третьих лиц для решения поставленной задачи
      </h6>
      <br />
    </b-modal>
    <!--  -->
    <b-modal id="modal-voice" size="lg" hide-footer hide-header>
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
        @click="$bvModal.hide('modal-voice')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <br />
      <div class="row">
        <div class="col-md"><h6>Место</h6></div>
        <div class="col-md"><h6>Название</h6></div>
        <div class="col-md"><h6>Оценки экспертов</h6></div>
        <div class="col-md"><h6>Оценки зрителей</h6></div>
      </div>
      <hr />
      <br />
    </b-modal>

    <!--  -->
    <b-modal id="Enter" size="lg" centered hide-footer hide-header>
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
        @click="$bvModal.hide('Enter')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <br /><br />
      <div class="alert alert-warning" role="alert">
        Внимание! Если вы забыли пароль, обратитесь к <b><u>организаторам</u></b
        >.
      </div>

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Логин"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            placeholder="exemple@mail.ru"
            v-model="form.email"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Пароль"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="form.password"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>

      <b-button @click.prevent="login" variant="primary">Вход</b-button>
    </b-modal>
  </div>
</template>

<style scoped>
.my:hover {
  cursor: pointer;
}
.ButNav {
  color: black;
  text-decoration: none;
}
</style>


<script>
export default {
  data() {
    return {
      form: {
        email: 'valerazbanovqs@gmail.com',
        password: 'C?)U=i1№)aY23=e7Waq_',
      },
    }
  },
  methods: {
    login() {
      console.log('страница')
      console.log(this.form)
      this.$store
        .dispatch('auth/login', this.form)
        .then(() => {
          this.$router.push('/desk')
        })
        .catch(() =>
          this.$toasted.error('Неверный пользователь или пароль', {
            duration: 3000,
          })
        )
    },
  },
}
</script>
