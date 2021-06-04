<template>
<div class="container">
<br><br>

   <div class="row justify-content-center">

  <div class="col-md-4 align-self-center ">

    <b-card title="Боевые хомяки"  border-variant="info" class="text-center">
        <br>
    <b-card-text>
      Проект: Обучающий курс <br> “Мой родной край”
    </b-card-text>

  <b-button variant="primary" @click="$bvModal.show('Voice-modal')">Просмотреть</b-button>
  </b-card>

  </div>

  <div class="col-md-4">
        <b-card title="Боевые хомяки"  border-variant="info" class="text-center">
        <br>
    <b-card-text>
      Проект: Обучающий курс <br> “Мой родной край”
    </b-card-text>

  <b-button variant="primary">Просмотреть</b-button>
  </b-card>
  </div>

  <div class="col-md-4">
        <b-card title="Боевые хомяки"  border-variant="info" class="text-center">
        <br>
    <b-card-text>
      Проект: Обучающий курс <br> “Мой родной край”
    </b-card-text>

  <b-button variant="primary">Просмотреть</b-button>
  </b-card>
  </div>

</div>

<br>

<div class="row justify-content-center">

  <div class="col-md-4 align-self-center ">

    <b-card title="Боевые хомяки"  border-variant="info" class="text-center">
        <br>
    <b-card-text>
      Проект: Обучающий курс <br> “Мой родной край”
    </b-card-text>

  <b-button variant="primary">Просмотреть</b-button>
  </b-card>

  </div>

  <div class="col-md-4">
        <b-card title="Боевые хомяки"  border-variant="info" class="text-center">
        <br>
    <b-card-text>
      Проект: Обучающий курс <br> “Мой родной край”
    </b-card-text>

  <b-button variant="primary">Просмотреть</b-button>
  </b-card>
  </div>

  <div class="col-md-4">
        <b-card title="Боевые хомяки"  border-variant="info" class="text-center">
        <br>
    <b-card-text>
      Проект: Обучающий курс <br> “Мой родной край”
    </b-card-text>

  <b-button variant="primary">Просмотреть</b-button>
  </b-card>
  </div>

</div>

<b-modal id="Voice-modal" size="lg" centered hide-footer hide-header>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" 
      @click="$bvModal.hide('Voice-modal')">
         <span aria-hidden="true">&times;</span>
      </button>
      <br>
      
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Название"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Участники"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Название проекта"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Ссылка на ресурс"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Ссылка на презентацию"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>



<b-button variant="success">Проголосовать</b-button>
  </b-modal>

</div>
</template>