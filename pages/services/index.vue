<template>
  <div class="services-page">

    <brident_header></brident_header>

    <div class="content">
      <div class="container">
        <div class="row l-inner">
          <div class="xs-16">
            <div class="main-title">
              <h1 class="header">Услуги</h1>
            </div>
          </div>

          <div class="xs-16 md-8 lg-one-third">
            <div class="service-block block-1">
              <a href="/services/lechenie-zubov">
                <img src="~/assets/img/uslugi-1.jpg">
              <i class="fa fa-arrow-right"></i>
              </a>
              <h3 class="title">Лечение зубов</h3>
              <p class="description">С необходимостью лечения зубов в разном возрасте сталкиваются практически все люди.
                Как правило, самой распространенной причиной обращения к стоматологу является кариес. Также в нашей
                клинике проводят реставрацию и восстановление зубной эмали, лечение каналов.</p>
            </div>
          </div>
          <div class="xs-16 md-8 lg-one-third">
            <div class="service-block block-2">
              <a href="/services/lechenie-desen">
                <img src="~/assets/img/uslugi-2.jpg">
              <i class="fa fa-arrow-right"></i>
              </a>
              <h3 class="title">Лечение десен</h3>
              <p class="description">Воспаление дёсен – это достаточно распространённое заболевание полости рта, которым
                в той или иной степени страдают около 2/3 всех пациентов. Основные симптомы – покраснение и отёк дёсен,
                неприятный запах изо рта, иногда зуд или болезненные ощущения, а также кровоточивость дёсен.</p>
            </div>
          </div>
          <div class="xs-16 md-8 lg-one-third">
            <div class="service-block block-3">
              <a href="/services/udalenie-zubov">
                <img src="~/assets/img/uslugi-3.jpg">
              <i class="fa fa-arrow-right"></i>
              </a>
              <h3 class="title">Удаление зубов</h3>
              <p class="description">Удаление зубов – это экстренная мера, к которой хорошие стоматологи прибегают в
                самых крайних случаях при условии, что зуб невозможно отреставрировать, а также если он (зуб) растет
                неровно и разрушает соседние зубы. Если обратиться за квалифицированной помощью как можно быстрее, то
                можно повысить шансы спасти проблемный участок.</p>
            </div>
          </div>
          <div class="xs-16 md-8 lg-one-third">
            <div class="service-block block-4">
              <a href="/services/protezirovanie">
                <img src="~/assets/img/uslugi-4.jpg">
              <i class="fa fa-arrow-right"></i>
              </a>
              <h3 class="title">Протезирование</h3>
              <p class="description">Протезирование зубов — замена утерянных или частично разрушенных зубов их
                искусственными аналогами. Особенность современных съемных протезов – отсутствие необходимости удалять
                искусственные элементы перед сном. Снимать их следует лишь во время гигиенической обработки ротовой
                полости.</p>
            </div>
          </div>
          <div class="xs-16 md-8 lg-one-third">
            <div class="service-block block-5">
              <a href="/services/implantaciya">
                <img src="~/assets/img/uslugi-5.jpg">
              <i class="fa fa-arrow-right"></i>
              </a>
              <h3 class="title">Имплантация</h3>
              <p class="description">Наиболее рациональным решением при потере одного или нескольких зубов является
                установка искусственного заменителя – имплантата. Это исключает обточку под коронки соседних, здоровых
                зубов.</p>
            </div>
          </div>
          <div class="xs-16 md-8 lg-one-third">
            <div class="service-block block-6">
              <a href="/services/chistka-zubov">
                <img src="~/assets/img/uslugi-6.jpg">
              <i class="fa fa-arrow-right"></i>
              </a>
              <h3 class="title">Профессиональная чистка и отбеливание зубов</h3>
              <p class="description">Чистка проводится врачом при помощи чистящих и полировочных паст или системы
                AirFlow. Происходит полное удаление мягкого и твердого зубного налета. Отбеливание зубов представляет
                собой уникальную стоматологическую процедуру, которая позволяет безболезненно получить идеальный
                косметический эффект за короткий промежуток времени.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <brident_footer></brident_footer>

  </div>

</template>

<script>
  import brident_header from '~/components/header.vue'
  import brident_footer from '~/components/footer.vue'

  export default {
    components: {
      brident_header,
      brident_footer
    }
  }
</script>
