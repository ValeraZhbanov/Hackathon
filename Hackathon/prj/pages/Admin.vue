<template>
    <div class="container">
<br> <br>
<div class="row justify-content-between">
         
    <!-- карточка с картинкой и именем админа -->
    <div class="col col-md-3">
       <div class="card border-primary text-center">

            <b-img src="@/assets/admin.svg" fluid alt="Responsive image"></b-img>

                <div class="card-body">
                    <p class="card-text">Елена Борисовна А.</p>
                </div>

        </div>
    </div>
    
    <!-- карточка со временем -->
    <div class="col col-md-8 ">
        <div class="card border-primary text-left">
            <div class="row no-gutters">

                <div class="col col-md-5">
                    <div class="card-body">
                        <br>
                        <h4 class="card-text">До конца осталось:</h4>
                        <br>
                    </div>
                </div>

                <div class="col col-md-3">
                    <div class="card-body">
                        <br>
                        <h4 class="card-text">12:10:15</h4>
                        <br>
                    </div>
                </div>

                <div class="col col-md-1">
                    <div class="card-body">
                        <br>
                        <nuxt-link to="/index" class="btn btn-link">Редактировать</nuxt-link>
                        <br>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>


<br> <br>
<div class="row justify-content-between">

    <!-- карточка со список участников -->
    <div class="col col-md-3">

       <div class="card border-primary text-center">

                <div class="card-body">
                    <h5 class="card-title">Список участников</h5>
                    <nuxt-link to="/index" class="btn btn-info">Просмотреть</nuxt-link> <!--- заменить ссылку--->
                    <br> 
                </div>

        </div>
    </div>

    <!-- карточка с заданием -->
    <div class="col col-md-8">
        <div class="card border-primary text-center">
            <div class="row no-gutters">

                <div class="col col-md-8">
                    <div class="card-body">
                        <h4 class="card-text">Задание</h4>
                    </div>
                </div>

                <div class="col col-md-1">
                    <div class="card-body">
                        <nuxt-link to="/index" class="btn btn-link">Открыть</nuxt-link>
                    </div>
                </div>

            </div>
        </div>   
    </div>
</div>

<br> <br>
<div class="row justify-content-between">

     <!-- карточка с результатами -->
    <div class="col col-md-3">

       <div class="card border-primary text-center">

                <div class="card-body">
                    <h5 class="card-title">Результаты</h5>
                    <nuxt-link to="/index" class="btn btn-info">Просмотреть</nuxt-link> <!--- заменить ссылку--->
                    <br> 
                </div>

        </div>
    </div>

    <div class="col col-md-8">
        <div class="card border-primary text-center">
            <div class="row no-gutters">

                <div class="col col-md-8">
                    <div class="card-body">
                        <h4 class="card-text">Источники</h4>
                    </div>
                </div>

                <div class="col col-md-1">
                    <div class="card-body">
                        <nuxt-link to="/index" class="btn btn-link">Открыть</nuxt-link>
                    </div>
                </div>

            </div>
        </div> 
    </div>

</div>

<br> <br>
<div class="row justify-content-between">

     <!-- карточка с инструкциями -->
    <div class="col col-md-3">

       <div class="card border-primary text-center">

                <div class="card-body">
                    <h5 class="card-title">Видеоинструкция</h5>
                    <nuxt-link to="/index" class="btn btn-info">Просмотреть</nuxt-link> <!--- заменить ссылку--->
                    <br> 
                </div>

        </div>
    </div>

    <div class="col col-md-8">
        
        <div class="card border-primary text-center">
            <div class="row no-gutters">

                <div class="col col-md-8">
                    <div class="card-body">
                        <h4 class="card-text">Выполнение</h4>
                    </div>
                </div>

                <div class="col col-md-1">
                    <div class="card-body">
                        <nuxt-link to="/index" class="btn btn-link">Открыть</nuxt-link>
                    </div>
                </div>

            </div>
        </div> 
        
    </div>


</div>
<br>

    </div>
</template>
