<template>
  <div>
    <main-section />
    <main-hr />

    <main-service :services="services" />
    <main-hr />


    <main-investors />
    <main-hr />
    <!-- <section class="module-small bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-8 col-lg-6 col-lg-offset-2">
            <div class="callout-text font-alt">
              <h3 class="callout-title">Want to see more works?</h3>
              <p>We are always open to interesting projects.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2">
            <div class="callout-btn-box"><a class="btn btn-w btn-round" href="portfolio_boxed_gutter_col_3.html">Lets
                view portfolio</a></div>
          </div>
        </div>
      </div>
    </section> -->
    <main-about />
    <main-hr />
    <!-- <hr class="divider-w">
    <section class="module" id="team">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <h2 class="module-title font-alt">Meet Our Team</h2>
            <div class="module-subtitle font-serif">A wonderful serenity has taken possession of my entire
              soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
          </div>
        </div>
        <div class="row">
          <div class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" onclick="wow fadeInUp">
            <div class="team-item">
              <div class="team-image"><img src="/images/team-1.jpg" alt="Member Photo" />
                <div class="team-detail">
                  <h5 class="font-alt">Hi all</h5>
                  <p class="font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus,
                    a&amp;nbsp;iaculis diam.</p>
                  <div class="team-social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i
                        class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-dribbble"></i></a><a href="#"><i
                        class="fa fa-skype"></i></a></div>
                </div>
              </div>
              <div class="team-descr font-alt">
                <div class="team-name">Jim Stone</div>
                <div class="team-role">Art Director</div>
              </div>
            </div>
          </div>
          <div class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" onclick="wow fadeInUp">
            <div class="team-item">
              <div class="team-image"><img src="/images/team-2.jpg" alt="Member Photo" />
                <div class="team-detail">
                  <h5 class="font-alt">Good day</h5>
                  <p class="font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus,
                    a&amp;nbsp;iaculis diam.</p>
                  <div class="team-social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i
                        class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-dribbble"></i></a><a href="#"><i
                        class="fa fa-skype"></i></a></div>
                </div>
              </div>
              <div class="team-descr font-alt">
                <div class="team-name">Andy River</div>
                <div class="team-role">Creative director</div>
              </div>
            </div>
          </div>
          <div class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" onclick="wow fadeInUp">
            <div class="team-item">
              <div class="team-image"><img src="/images/team-3.jpg" alt="Member Photo" />
                <div class="team-detail">
                  <h5 class="font-alt">Hello</h5>
                  <p class="font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus,
                    a&amp;nbsp;iaculis diam.</p>
                  <div class="team-social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i
                        class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-dribbble"></i></a><a href="#"><i
                        class="fa fa-skype"></i></a></div>
                </div>
              </div>
              <div class="team-descr font-alt">
                <div class="team-name">Adele Snow</div>
                <div class="team-role">Account manager</div>
              </div>
            </div>
          </div>
          <div class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" onclick="wow fadeInUp">
            <div class="team-item">
              <div class="team-image"><img src="/images/team-4.jpg" alt="Member Photo" />
                <div class="team-detail">
                  <h5 class="font-alt">Yes, it's me</h5>
                  <p class="font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus,
                    a&amp;nbsp;iaculis diam.</p>
                  <div class="team-social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i
                        class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-dribbble"></i></a><a href="#"><i
                        class="fa fa-skype"></i></a></div>
                </div>
              </div>
              <div class="team-descr font-alt">
                <div class="team-name">Dylan Woods</div>
                <div class="team-role">Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="module bg-dark-60" data-background="/images/section-3.jpg">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <h2 class="module-title font-alt">Scoreboard</h2>
            <div class="module-subtitle font-serif"></div>
          </div>
        </div>
        <div class="row multi-columns-row">
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="count-item mb-sm-40">
              <div class="count-icon"><span class="icon-wallet"></span></div>
              <h3 class="count-to font-alt" data-countto="6543"></h3>
              <h5 class="count-title font-serif">Dollars raised for charity</h5>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="count-item mb-sm-40">
              <div class="count-icon"><span class="icon-wine"></span></div>
              <h3 class="count-to font-alt" data-countto="8"></h3>
              <h5 class="count-title font-serif">Cups of wine consumed</h5>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="count-item mb-sm-40">
              <div class="count-icon"><span class="icon-camera"></span></div>
              <h3 class="count-to font-alt" data-countto="184"></h3>
              <h5 class="count-title font-serif">Photographs taken</h5>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="count-item mb-sm-40">
              <div class="count-icon"><span class="icon-map-pin"></span></div>
              <h3 class="count-to font-alt" data-countto="32"></h3>
              <h5 class="count-title font-serif">Locations covered</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="module" id="pricing">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <h2 class="module-title font-alt">Our Prices</h2>
            <div class="module-subtitle font-serif">A wonderful serenity has taken possession of my entire
              soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
          </div>
        </div>
        <div class="row multi-columns-row">
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="price-table font-alt">
              <h4>Light</h4>
              <div class="borderline"></div>
              <p class="price"><span>$</span>9
              </p>
              <ul class="price-details">
                <li>Free Support</li>
                <li>15 Demos Included</li>
                <li><span>Newsletter</span></li>
                <li><span>Working Contact Form</span></li>
                <li><span>Unlimited Domains</span></li>
              </ul><a class="btn btn-d btn-round" href="#">Sign Up</a>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="price-table font-alt">
              <h4>Basic</h4>
              <div class="borderline"></div>
              <p class="price"><span>$</span>29
              </p>
              <ul class="price-details">
                <li>Free Support</li>
                <li>15 Demos Included</li>
                <li>Newsletter</li>
                <li><span>Working Contact Form</span></li>
                <li><span>Unlimited Domains</span></li>
              </ul><a class="btn btn-d btn-round" href="#">Sign Up</a>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="price-table font-alt best">
              <h4>Advanced</h4>
              <p class="small">Best Choice</p>
              <div class="borderline"></div>
              <p class="price"><span>$</span>64
              </p>
              <ul class="price-details">
                <li>Free Support</li>
                <li>15 Demos Included</li>
                <li>Newsletter</li>
                <li>Working Contact Form</li>
                <li><span>Unlimited Domains</span></li>
              </ul><a class="btn btn-d btn-round" href="#">Sign Up</a>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="price-table font-alt">
              <h4>Ultimate</h4>
              <div class="borderline"></div>
              <p class="price"><span>$</span>119
              </p>
              <ul class="price-details">
                <li>Free Support</li>
                <li>15 Demos Included</li>
                <li>Newsletter</li>
                <li>Working Contact Form</li>
                <li>Unlimited Domains</li>
              </ul><a class="btn btn-d btn-round" href="#">Sign Up</a>
            </div>
          </div>
        </div>
        <div class="row mt-40">
          <div class="col-sm-6 col-sm-offset-3 align-center">
            <p>Everyone realizes why a new common language would be desirable: one could refuse to pay
              expensive translators. To achieve this, it would be necessary to have uniform grammar,
              pronunciation and more common words.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="module bg-dark-60 pt-0 pb-0 parallax-bg testimonial" data-background="/images/testimonial_bg.jpg">
      <div class="testimonials-slider pt-140 pb-140">
        <ul class="slides">
          <li>
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <div class="module-icon"><span class="icon-quote"></span></div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8 col-sm-offset-2">
                  <blockquote class="testimonial-text font-alt">I am alone, and feel the charm of
                    existence in this spot, which was created for the bliss of souls like mine.
                  </blockquote>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4 col-sm-offset-4">
                  <div class="testimonial-author">
                    <div class="testimonial-caption font-alt">
                      <div class="testimonial-title">Jack Woods</div>
                      <div class="testimonial-descr">SomeCompany INC, CEO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <div class="module-icon"><span class="icon-quote"></span></div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8 col-sm-offset-2">
                  <blockquote class="testimonial-text font-alt">I should be incapable of drawing a
                    single stroke at the present moment; and yet I feel that I never was a greater
                    artist than now.</blockquote>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4 col-sm-offset-4">
                  <div class="testimonial-author">
                    <div class="testimonial-caption font-alt">
                      <div class="testimonial-title">Jim Stone</div>
                      <div class="testimonial-descr">SomeCompany INC, CEO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <div class="module-icon"><span class="icon-quote"></span></div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8 col-sm-offset-2">
                  <blockquote class="testimonial-text font-alt">I am so happy, my dear friend, so
                    absorbed in the exquisite sense of mere tranquil existence, that I neglect my
                    talents.</blockquote>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4 col-sm-offset-4">
                  <div class="testimonial-author">
                    <div class="testimonial-caption font-alt">
                      <div class="testimonial-title">Adele Snow</div>
                      <div class="testimonial-descr">SomeCompany INC, CEO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="module" id="news">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <h2 class="module-title font-alt">Latest blog posts</h2>
            <div class="module-subtitle font-serif">A wonderful serenity has taken possession of my entire
              soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
          </div>
        </div>
        <div class="row multi-columns-row post-columns">
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="post mb-20">
              <div class="post-thumbnail"><a href="#"><img src="/images/post-1.jpg" alt="Blog-post Thumbnail" /></a>
              </div>
              <div class="post-header font-alt">
                <h2 class="post-title"><a href="#">Our trip to the Alps</a></h2>
                <div class="post-meta">By&nbsp;<a href="#">Mark Stone</a>&nbsp;| 23 November | 3
                  Comments
                </div>
              </div>
              <div class="post-entry">
                <p>A wonderful serenity has taken possession of my entire soul, like these sweet
                  mornings of spring which I enjoy with my whole heart.</p>
              </div>
              <div class="post-more"><a class="more-link" href="#">Read more</a></div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="post mb-20">
              <div class="post-thumbnail"><a href="#"><img src="/images/post-2.jpg" alt="Blog-post Thumbnail" /></a>
              </div>
              <div class="post-header font-alt">
                <h2 class="post-title"><a href="#">Shore after the tide</a></h2>
                <div class="post-meta">By&nbsp;<a href="#">Andy River</a>&nbsp;| 11 November | 4
                  Comments
                </div>
              </div>
              <div class="post-entry">
                <p>A wonderful serenity has taken possession of my entire soul, like these sweet
                  mornings of spring which I enjoy with my whole heart.</p>
              </div>
              <div class="post-more"><a class="more-link" href="#">Read more</a></div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="post mb-20">
              <div class="post-thumbnail"><a href="#"><img src="/images/post-3.jpg" alt="Blog-post Thumbnail" /></a>
              </div>
              <div class="post-header font-alt">
                <h2 class="post-title"><a href="#">We in New Zealand</a></h2>
                <div class="post-meta">By&nbsp;<a href="#">Dylan Woods</a>&nbsp;| 5 November | 15
                  Comments
                </div>
              </div>
              <div class="post-entry">
                <p>A wonderful serenity has taken possession of my entire soul, like these sweet
                  mornings of spring which I enjoy with my whole heart.</p>
              </div>
              <div class="post-more"><a class="more-link" href="#">Read more</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="module-small bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-4 col-lg-offset-2">
            <div class="callout-text font-alt">
              <h3 class="callout-title">Subscribe now</h3>
              <p>We will not spam your email.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="callout-btn-box">
              <form id="subscription-form" role="form" method="post" action="php/subscribe.php">
                <div class="input-group">
                  <input class="form-control" type="email" id="semail" name="semail" placeholder="Your Email"
                    data-validation-required-message="Please enter your email address." required="true" /><span
                    class="input-group-btn">
                    <button class="btn btn-g btn-round" id="subscription-form-submit"
                      type="submit">Submit</button></span>
                </div>
              </form>
              <div class="text-center" id="subscription-response"></div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <contact-form />
  </div>

</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const lang = useCookie('lang')

// Инициализация с текущим языком из куки или дефолтным значением
if (lang.value) {
  locale.value = lang.value
}



const createServices = () => [
  { name: t('service_1_title'), image: "/images/service_1.jpg", text: t('service_1_text') },
  { name: t('service_2_title'), image: "/images/service_2.jpg", text: t('service_2_text') },
  { name: t('service_3_title'), image: "/images/service_3.jpg", text: t('service_3_text') },
  { name: t('service_4_title'), image: "/images/service_4.jpg", text: t('service_4_text') }
]

// Локализованный список виджетов
const services = ref(createServices())

// Наблюдение за изменением языка и обновление виджетов
watch(locale, () => {
  services.value = createServices()
})

// Функция смены языка
const changeLanguage = (newLang: string) => {
  locale.value = newLang
  lang.value = newLang
}

</script>
