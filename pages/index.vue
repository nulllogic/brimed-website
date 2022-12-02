<template>
	<div class="main-page">

		<brident_header></brident_header>


		<div class="content" style="margin-top:90px;">

			<div id='av_section_1'>

				<CanvasVideo
						:src="path"
						:autoplay="true"
						:loop="true"
						:fps="25" class="video"></CanvasVideo>

				<div class="overlay"></div>

				<div class="inner-content">
					<h1 class="av-special-heading-tag" itemprop="headline">Стоматологическая клиника <br /><strong>“Здравница зубная”</strong><br /> во
						Владикавказе</h1>
					<p>Добро пожаловать на наш сайт !</p>

				</div>


			</div>
			<div class="container">
				<div class="row l-inner">

					<div id='av_section_2'
					     class='avia-section main_color avia-section-large avia-no-border-styling avia-bg-style-scroll  avia-builder-el-2  el_after_av_section  el_before_av_section  container_wrap fullsize'
					     data-section-bg-repeat='no-repeat'>
						<div class='container'>
							<div class='row'>
								<div class='post-entry post-entry-type-page post-entry-15'>
									<div class='row'>
										<div
												class="md-10">
											<no-ssr>
												<carousel :per-page="1" :mouse-drag="true" :autoplay="true"
												          :navigationEnabled="true" :loop="true">
													<slide>
														<img src="~/assets/img/home4.jpg"/>
													</slide>
													<slide>
														<img src="~/assets/img/home1.jpg"/>
													</slide>
													<slide>
														<img src="~/assets/img/home2.jpg"/>
													</slide>
													<slide>
														<img src="~/assets/img/home3.jpg"/>
													</slide>
												</carousel>
											</no-ssr>
										</div>
										<div class="md-6">
											<div style='padding-bottom:0px;'
											     class='av-special-heading av-special-heading-h2  blockquote modern-quote  avia-builder-el-6  el_before_av_textblock  avia-builder-el-first  '>
												<h2 class='av-special-heading-tag' itemprop="headline"
												    style="margin:0;">Стоматология
													<span
															class='special_amp'>&#8220;</span>Здравница зубная<span
															class='special_amp'>&#8221;</span></h2>
												<div class='special-heading-border'>
													<div class='special-heading-inner-border'></div>
												</div>
											</div>
											<section class="av_textblock_section" itemscope="itemscope"
											         itemtype="https://schema.org/CreativeWork">
												<div class='avia_textblock ' itemprop="text"><p>Наша стоматологическая
													клиника &#8211; это гарантия высокого качества и безболезненного
													лечения. Вы получите отличный результат, который будет радовать Вас
													и
													Ваших близких долгое время, ведь в нашей клинике используются только
													высококачественные материалы. Благодаря современному оборудованию,
													которое используется врачом-специалистом, лечение зубов является не
													только эффективным, но и комфортным для наших пациентов.</p>
													<p>В стоматологической клинике &#8220;Здравница зубная&#8221;
														представлены всевозможные виды услуг, что позволяет подобрать
														для
														каждого пациента наиболее подходящий метод лечения,
														восстановления,
														реставрации зубов.</p>
												</div>
											</section>
										</div>
										<div class="row" style="margin-top:25px;">
											<div class="md-one-third">
												<article
														class="iconbox iconbox_top main_color   avia-builder-el-9  avia-builder-el-no-sibling "
														itemscope="itemscope"
														itemtype="https://schema.org/CreativeWork">
													<div class="iconbox_content">
														<div class="iconbox_icon heading-color"><i class="fa fa-star"
														                                           aria-hidden="true"></i>
														</div>
														<div class='iconbox_content_container ' itemprop="text"><h2
																style="text-align: center;">Гарантия качества услуг</h2>
														</div>
													</div>

												</article>
											</div>
											<div class="md-one-third">
												<article
														class="iconbox iconbox_top main_color   avia-builder-el-11  avia-builder-el-no-sibling "
														itemscope="itemscope"
														itemtype="https://schema.org/CreativeWork">
													<div class="iconbox_content">
														<div class="iconbox_icon heading-color"><i class="fa fa-star"
														                                           aria-hidden="true"></i>
														</div>
														<div class='iconbox_content_container ' itemprop="text"><h2
																style="text-align: center;">Безболезненная
															стоматология</h2>
														</div>
													</div>

												</article>
											</div>
											<div class="md-one-third">
												<article
														class="iconbox iconbox_top main_color   avia-builder-el-13  avia-builder-el-no-sibling "
														itemscope="itemscope"
														itemtype="https://schema.org/CreativeWork">
													<div class="iconbox_content">
														<div class="iconbox_icon heading-color"><i class="fa fa-star"
														                                           aria-hidden="true"></i>
														</div>
														<div class='iconbox_content_container ' itemprop="text"><h2
																style="text-align: center;">Надежность на долгие
															годы</h2>
														</div>
													</div>

												</article>
											</div>

										</div>
									</div>
								</div>
							</div><!-- close content main div --></div>
					</div>
				</div>
			</div>

			<div class='parallax'>
				<div class="overlay"></div>
				<div class='post-entry post-entry-type-page post-entry-15'>
					<div class='entry-content-wrapper clearfix'>
						<section class="av_textblock_section" itemscope="itemscope"
						         itemtype="https://schema.org/CreativeWork">
							<div class='avia_textblock  av_inherit_color' style='color:#ffffff; '
							     itemprop="text"><h2
									style="text-align: center; font-size: 40px; line-height: 60px;">
								<strong>Стоматология без боли</strong><br/>
								<span style="color: #167ac6;">&#8220;</span>Здравница зубная<span
									style="color: #167ac6;">&#8220;</span></h2>
							</div>
						</section>
					</div>
				</div>
			</div>

			<div class='container'>
				<div class='template-page content  av-content-full alpha units'
				     style="margin:0;text-align: center; padding: 40px 0;">
					<div class='post-entry post-entry-type-page post-entry-15'>
						<div class="row">
							<div class="md-one-third">
								<div
										class="avia-animated-number av-force-default-color avia-color-  avia-builder-el-19  avia-builder-el-no-sibling  avia_animate_when_visible">
									<strong class="heading avia-animated-number-title"
									        style='font-size:60px'><span class="avia-single-number"
									                                     data-number="6245">6245</span></strong>
									<div class='avia-animated-number-content' style='font-size:25px'><p>
										Вылеченных пациентов</p>
									</div>
								</div>
							</div>
							<div class="md-one-third">
								<div
										class="avia-animated-number av-force-default-color avia-color-  avia-builder-el-21  avia-builder-el-no-sibling  avia_animate_when_visible">
									<strong class="heading avia-animated-number-title"
									        style='font-size:60px'><span class="avia-single-number"
									                                     data-number="7013">7013</span></strong>
									<div class='avia-animated-number-content' style='font-size:25px'><p>
										Подарено
										улыбок</p>
									</div>
								</div>
							</div>
							<div class="md-one-third">
								<div
										class="avia-animated-number av-force-default-color avia-color-  avia-builder-el-23  avia-builder-el-no-sibling  avia_animate_when_visible">
									<strong class="heading avia-animated-number-title"
									        style='font-size:60px'><span class="avia-single-number"
									                                     data-number="16">16</span></strong>
									<div class='avia-animated-number-content' style='font-size:25px'><p>Лет
										профессионального стажа</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="container">
				<div class="row">


					<div id='av_section_5'
					     class='avia-section main_color avia-section-default avia-no-border-styling avia-bg-style-scroll  avia-builder-el-24  el_after_av_section  avia-builder-el-last  container_wrap fullsize'>
						<div class='container'>
							<div class='template-page content  av-content-full alpha units' style="margin:0;">
								<div class='post-entry post-entry-type-page post-entry-15'>
									<div class='entry-content-wrapper clearfix'>
										<div style='padding-bottom:10px;'
										     class='av-special-heading av-special-heading-h2  blockquote modern-quote modern-centered  avia-builder-el-25  el_before_av_textblock  avia-builder-el-first  '>
											<h2 class='av-special-heading-tag text-center' itemprop="headline">Спасибо
												за то, что
												посетили наш сайт!</h2>
											<div class='special-heading-border'>
												<div class='special-heading-inner-border'></div>
											</div>
										</div>
										<section class="av_textblock_section" itemscope="itemscope"
										         itemtype="https://schema.org/CreativeWork">
											<div class='avia_textblock ' itemprop="text"><p style="text-align: center;">
												Будем рады видеть вас в нашей стоматологической клинике!<br/>
												Если у Вас возникли какие-либо вопросы относительно деталей проводимых
												стоматологических услуг, свяжитесь с нами.</p>
											</div>
										</section>
										<div
												class='avia-button-wrap avia-button-center  avia-builder-el-27  el_after_av_textblock  avia-builder-el-last text-center'>
											<a href='/contacts'
											   class='btn btn-primary'><span
													class='avia_iconbox_title'>Контакты</span></a></div>

									</div>
								</div>
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
    },

    data() {
      return {
        path: '/video.mp4',
        resize: true,
        fitparent: true,
        mute: true,
        playerWidth: '100%',
        playerVars: {
          autoplay: 1, // Auto-play the video on load
          controls: 0, // Show pause/play buttons in player
          showinfo: 0, // Hide the video title
          modestbranding: 0, // Hide the Youtube Logo
          loop: 1, // Run the video in a loop
          fs: 0, // Hide the full screen button
          cc_load_policy: 0, // Hide closed captions
          iv_load_policy: 3, // Hide the Video Annotations
          autohide: 0, // Hide video controls when playing
          rel: 0
        }
      }
    },

    mounted() {

      var parallax = document.querySelector(".parallax");

      window.addEventListener("scroll", function () {


        var scrolledHeight = window.pageYOffset,
          limit = parallax.offsetTop + parallax.offsetHeight;

        // if(scrolledHeight > ( parallax.offsetTop - 400 ) && scrolledHeight <= limit) {
        //   parallax.style.backgroundPositionY=  (scrolledHeight - parallax.offsetTop) /1.5+ "px";
        //
        // } else {
        //   parallax.style.backgroundPositionY=  "0";
        // }
        //
        // console.log(scrolledHeight);

        // let scrollPosition = this.setPosition();
        if (scrolledHeight <= limit) {
          parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 2 + "px";
        }
      });
    }

  }
</script>
