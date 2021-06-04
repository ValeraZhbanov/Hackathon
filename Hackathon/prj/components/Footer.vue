<template>

<div class = "fixed-bottom">

<div class="row justify-content-center">
<p text-align="center" class = "my" id="mod" @click="$bvModal.show('modal-footer')"> © DeCode & INIT</p>

</div>


<b-modal id="modal-footer" size="lg" centered hide-footer hide-header>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" 
      @click="$bvModal.hide('modal-footer')">
         <span aria-hidden="true">&times;</span>
      </button>
     <br>
     <p> Турнир проводится при информационной поддержке 
       ООО «Инновационные информационные технологии (ИНИТ)» и 
       программно-технической поддержке группы свободных разработчиков “DeCode”. </p> <br>
      
       <div class="row">
      <div class="col-md-4"><b-img class="imgF" src="@/assets/CodeDesign.svg" fluid alt="Responsive image"></b-img></div>
      <div class="col-md-4 ml-auto"><b-img class="imgF" src="@/assets/LogoITU.svg" fluid alt="Responsive image"></b-img></div>
    </div>

        <!-- <div class="col-md"> -->
        
        <!-- </div> -->
          
          <!-- <div class="col-m-4"> -->
         
          <!-- </div> -->
       
       

  </b-modal>

</div>
  <!--<div class="fixed-bottom">

   <b-card
      overlay
      img-src="@/assets/Footer.svg"
      img-alt="Card Image"
      text-variant="white"
    >

    
    </b-card>
 

  </div>-->

</template>

<style scoped>
.my:hover{
  cursor:pointer;
}

.imgF{
  width: 50%;
  height: 50%;
  margin-left: 10%;
}
</style>