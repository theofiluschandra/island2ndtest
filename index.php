<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tech Test Round 2 - Theofilus Chandra</title>
  <link rel="stylesheet" href="/techtwo/css/style.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  <script src="https://unpkg.com/feather-icons"></script>
  <script src="/techtwo/js/app.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sal.js"></script>
</head>

<body>
  <div class="landing-wrapper">
    <header class="sticky-header main-header z-index-top" id="header">
      <div class="row-wrapper w-80 mg-side-auto d-flex py-20 justify-between align-items-center">
        <div class="col-wrapper col-left">
          <div class="logo-wrapper">
            <img src="/techtwo/assets/logo.svg" alt="Main Site Logo" />
          </div>
        </div>
        <div class="col-wrapper col-right">
          <div class="main-menu d-flex">
            <a href="#" class="menu-item">About</a>
            <a href="#" class="menu-item">Menu</a>
            <a href="#" class="menu-item">Moods</a>
            <a href="#" class="menu-item">Blog</a>
            <a href="#" class="menu-item">Contact</a>
            <div class="search-wrapper">
              <input type="text" class="input-reactive input-initial-state" />
              <i data-feather="search" class="icon-search"></i>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="section-banner-home" style="background-image: url('/techtwo/assets/header-image.jpg')">
      <div class="row-wrapper w-90 mg-side-auto">
        <h2 class="banner-title" data-sal="slide-up" data-sal-duration="500" data-sal-easing="ease-out">Life begins after Coffe.</h2>
        <div class="btn-wrapper mg-side-auto">
          <a href="" id="btn-view-menu" class="btn-view-menu">VIEW MENU</a>
        </div>
      </div>
    </div>

    <div class="section-menu">
      <div class="row-wrapper w-90 mg-side-auto">
        <div class="row-content" data-sal="flip-down" data-sal-delay="300">
          <h3 class="section-title">What would you like to have?</h3>
          <p class="section-content">Coffee plunger pot sweet barista, grounds acerbic coffee instant crema cream in half and half. Spoon lungo variety, as, siphon, ristretto, iced brewed and acerbic affogato grinder.</p>
        </div>
        <div class="row-menu">
          <div class="big-menu-wrapper d-grid">
            <?php
            // Read JSON file
            $json_data = file_get_contents('menu.json');
            $menu_items = json_decode($json_data, true);


            // Check if 'items' index exists
            if (isset($menu_items['items']) && is_array($menu_items['items'])) {
              // Output items
              // foreach ($menu_items['items'] as $item) 
              foreach ($menu_items['items'] as $index => $item) {
                $imageNumber = $index + 1; ?>
                <!-- echo '<li>' . $item . '</li>'; -->
                <div class="menu-card position-relative">
                  <div class="card-title"><?php echo $item ?></div>
                  <div class="overlay-wrapper"></div>
                  <div class="background-wrapper">
                    <img src="/techtwo/assets/gallery-<?php echo $imageNumber ?>.jpg" alt="<?php echo $item ?>" />
                  </div>
                </div>
            <?php }
            } else {
              echo 'Error: Missing or invalid "items" in the JSON file.';
            }
            ?>
            <!-- <div class="menu-card position-relative">
              <div class="card-title">COFFEE</div>
              <div class="overlay-wrapper"></div>
              <div class="background-wrapper">
                <img src="/techtwo/assets/gallery-1.jpg" alt="coffee" />
              </div>
            </div>
            <div class="menu-card position-relative">
              <div class="card-title">BREAKFAST</div>
              <div class="overlay-wrapper"></div>
              <div class="background-wrapper">
                <img src="/techtwo/assets/gallery-2.jpg" alt="coffee" />
              </div>
            </div>
            <div class="menu-card position-relative">
              <div class="card-title">SANDWICH</div>
              <div class="overlay-wrapper"></div>
              <div class="background-wrapper">
                <img src="/techtwo/assets/gallery-3.jpg" alt="coffee" />
              </div>
            </div>
            <div class="menu-card position-relative">
              <div class="card-title">JUICE</div>
              <div class="overlay-wrapper"></div>
              <div class="background-wrapper">
                <img src="/techtwo/assets/gallery-4.jpg" alt="coffee" />
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="section-extraction">
      <div class="row-wrapper w-90 mg-side-auto">
        <h3 class="section-title">Extraction instant that variety white robusta strong</h3>
        <p class="section-content">Coffee plunger pot sweet barista, grounds acerbic coffee instant crema cream in half and half. Spoon lungo variety, as, siphon, ristretto, iced brewed and acerbic affogato grinder. Mazagran café au lait wings spoon, percolator milk latte dark strong. Whipped, filter latte, filter aromatic grounds doppio caramelization half and half.</p>
        <div class="btn-contact-wrapper">
          <a href="#" class="btn-contact">CONTACT US</a>
        </div>
      </div>
    </div>

    <div class="section-benefit">
      <div class="row-wrapper w-90 mg-side-auto text-align-center">
        <h3 class="section-title">Health Benefits of Coffee</h3>
        <div class="row-3-col d-flex">
          <div class="benefit-card d-flex">
            <div class="icon-wrapper">
              <img src="/techtwo/assets/battery-full.svg" alt="Boost Energy Level" />
            </div>
            <div class="benefit-title">BOOST ENERGY LEVEL</div>
          </div>
          <div class="benefit-card d-flex">
            <div class="icon-wrapper">
              <img src="/techtwo/assets/sun.svg" alt="Reduce Depression" />
            </div>
            <div class="benefit-title">REDUCE DEPRESSION</div>
          </div>
          <div class="benefit-card d-flex">
            <div class="icon-wrapper">
              <img src="/techtwo/assets/weight.svg" alt="Aid in Weight Loss" />
            </div>
            <div class="benefit-title">AID IN WEIGHT LOSS</div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-blog">
      <div class="row-wrapper mg-side-auto d-grid">
        <div class="col-wrapper col-left">
          <div class="image-wrapper">
            <img src="/techtwo/assets/blog-1.jpg" alt="Blog Image" />
          </div>
        </div>
        <div class="col-wrapper col-right">
          <div class="content-wrapper">
            <div class="blog-header">
              <p class="section-subtitle">BLOG</p>
              <p class="blog-title">Qui espresso, grounds to go</p>
              <p class="blog-details">December 12, 2019 | Espresso</p>
            </div>
            <div class="blog-content">
              <p>Skinny caffeine aged variety filter saucer redeye, sugar sit steamed eu extraction organic. Beans, crema half and half fair trade carajillo in a variety dripper doppio pumpkin spice cup lungo, doppio, est trifecta breve and, rich, extraction robusta a eu instant. Body sugar steamed, aftertaste, decaffeinated coffee fair trade sit, white shop fair trade galão, dark crema breve frappuccino iced strong siphon trifecta in a at viennese.</p>
            </div>
            <div class="blog-footer">
              <div class="read-more-wrapper">
                <a href="#" class="btn-read-more">
                  Read More
                  <i data-feather="arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="main-footer">
      <div class="row-wrapper d-grid">
        <div class="col-wrapper col-footer-logo">
          <div class="logo-wrapper">
            <img src="/techtwo/assets/logo.svg" alt="Footer Logo" />
          </div>
        </div>
        <div class="col-wrapper col-footer-details">
          <div class="content-details">
            <p class="address">2800 S White Mountain Rd | Show Low AZ 85901</p>
            <p class="phone">
              <a href="tel:+9285371425">(928) 537-1425</a>
              |
              <a href="mailto:info@grinder-coffee.com">info@grinder-coffee.com</a>
            </p>
          </div>
          <div class="social-icon-wrapper">
            <i data-feather="instagram" class="social-icon social-instagram"></i>
            <i data-feather="facebook" class="social-icon social-facebook"></i>
          </div>
        </div>
        <div class="col-wrapper col-newsletter">
          <p class="col-title">NEWSLETTER</p>
          <div class="newsletter-wrapper">
            <input type="email" id="email" name="email" placeholder="YOUR EMAIL ADDRESS" />
            <button type="submit" class="btn-subs">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <script>
    feather.replace();
    // sal();
  </script>
</body>

</html>