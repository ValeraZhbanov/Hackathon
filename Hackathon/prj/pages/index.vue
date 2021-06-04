<template>
  <div class="container">
    <br />
    <br />
    <!--  -->
    <div class="row justify-content-around">
      <div class="col col-md-6">
        <h4>Электронный образовательный ресурс</h4>
      </div>

      <div class="col col-md-6"></div>
    </div>

    <div class="row justify-content-between">
      <div class="col col-md-5">
        <h4 align="center">Cвоими руками</h4>
      </div>

      <div class="col col-md-4">
        <h4>Этапы проведения</h4>
      </div>
    </div>
    <!--  -->
    <br />
    <div class="row justify-content-between">
      <div class="col-md-5">
        <b-img src="@/assets/Kartinka.png" fluid alt="Responsive image"></b-img>
      </div>
      <div class="col-md-5">
        <h5>1. Регистрация команд</h5>
        <h5 class="grayTXT">(С 10.00 до 17.00 13 апреля 2021)</h5>
        <h5>2. Получение заданий и их решение</h5>
        <h5 class="grayTXT">(С 12.00 до 15.30 14 апреля 2021)</h5>
        <h5>3. Защита работ и экспертная оценка</h5>
        <h5 class="grayTXT">(С 15.30 до 16.30 14 апреля 2021)</h5>
        <h5>4. Зрительское голосование</h5>
        <h5 class="grayTXT">(С 15.30 до 16.30 14 апреля 2021)</h5>
      </div>
    </div>

    <br /><!--  -->
    <div class="row justify-content-end">
      <div class="col-md-4">
        <b-button
          pill
          variant="primary btn-lg"
          @click="$bvModal.show('Registration')"
          >Зарегистрироваться</b-button
        >
      </div>
    </div>

    <br />
    <!--  -->

    <b-modal id="Registration" size="lg" centered hide-footer hide-header>
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
        @click="$bvModal.hide('Registration')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <br /><br />
      <div class="alert alert-success" role="alert">
        <h6>Внимание!</h6>
        Регистрацию проходит только капитан команды. В дальнейшем, он добавляет
        участников команды через настройки команды в личном кабинете.
      </div>

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Email"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            placeholder="exemple@mail.ru"
            v-model="form.email"
            required
          ></b-form-input>
        </b-form-group>
      </form>

      <b-button @click.prevent="register" variant="primary"
        >Зарегистрироваться</b-button
      >
    </b-modal>
  </div>
</template>

<style scoped>
.grayTXT {
  color: #6c757d;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        email: 'werwerwer',
      },
    }
  },
  methods: {
    register() {
      this.$store
        .dispatch('auth/register', this.form)
        .then(() => {
          this.$toasted.success('Реистрация выполнена успешкно.', {
            duration: 3000,
          })
          this.$router.push('/login')
        })
        .catch(() =>
          this.$toasted.error(
            'Ошибка регистрации: данный email уже используется.',
            { duration: 3000 }
          )
        )
    },
  },
}
</script>

