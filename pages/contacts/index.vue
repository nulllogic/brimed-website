<template>
  <div class="contact-page">

    <brident_header></brident_header>

    <div class="content">
      <div class="container">
        <div class="row l-inner">
          <div class="xs-16">
            <div class="main-title">
              <h1 class="header">Контакты</h1>
              <h2 class="subheader"></h2>
            </div>
          </div>
          <div class="xs-16 md-10">
            <div class="map">
              <iframe src="https://yandex.ru/map-widget/v1/-/CBuWF0CFKD" frameborder="1"
                      allowfullscreen="true"></iframe>
            </div>
          </div>

          <div class="xs-16 md-6">
            <div class="contacts">
              <div class="block">
                <h3 class="title ">Адрес:</h3>
                <span>г. Владикавказ, ул. Джанаева, д. 16</span>
              </div>
              <div class="block">
                <h3 class="title">Контактный телефон:</h3>
                <span>
                  <a href="tel:+79188242799">+7(918)824-27-99</a>
                </span>
              </div>
              <div class="block">
                <h3 class="title">Врач:</h3>
                <span>Бритаев Сергей Данилович</span>
              </div>
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