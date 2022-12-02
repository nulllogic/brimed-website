<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="xs-16">
          <ul class="nav nav-horizontal" :class="{'opened' : opened}">
            <li class="hamburger" @click="open_mobile" :class="{'is-active' : opened}">
              <button>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </button>
            </li>
            <li class="nav-logo pull-left"><a href="/"><img src="~/assets/img/logo.png"></a></li>
            <li><a href="/" class="active">Главная</a></li>
            <li><a href="/about-us">О клинике</a></li>
            <li><a href="/services">Услуги</a></li>
            <li><a href="/contacts">Контакты</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        opened: false
      }
    },
    methods: {
      open_mobile: function() {
        this.opened = this.opened ? false : true;
      }
    }
  }
</script>
