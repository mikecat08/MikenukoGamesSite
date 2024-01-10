$(function () {

  //-------------------------------------
  // fade upの動き
  //-------------------------------------

  //ウィンドウがスクロールされたタイミングで下記の処理が動きます。
  $(window).scroll(function () {

    //ページ上端からウィンドウ上端までの距離を取得します。
    var scrollTop = $(this).scrollTop();

    //ページ上端からウィンドウ下端までの距離を取得します。
    var scrollBottom = scrollTop + $(this).height();

    //fadeup-targetというクラスを持つ要素それぞれに下記の処理を行います。
    //.each()が無いと全部のfadeup-targetクラスに対して一気に処理が行われてしまいます。
    $('.fadeup-target').each(function () {

      //ウィンドウ下端に対象要素が250px分見えたタイミングで、in-viewというクラスが付与されます。
      if (scrollBottom > $(this).offset().top + 250) {
        $(this).addClass('in-view');
        //in-viewというクラスが付与されると、cssのアニメーションが動き始めます。
      }
    });
  });


  //-------------------------------------
  // ハンバーガーボタン開閉の動き
  //-------------------------------------

  //何度も指定するのでボタンとメニューの要素指定を変数に格納します。
  var $burgerBtn = $('#burger-btn');
  var $burgerMenu = $('#burger-menu');

  //ハンバーガーボタンをクリックした時の処理
  $burgerBtn.on('click', function () {

    //ハンバーガーメニューがopenedというクラスを持っている場合
    if ($burgerMenu.hasClass('opened')) {

      //ハンバーガーメニューからopenedというクラスを削除します。
      $burgerMenu.removeClass('opened');
      
      //暗くなっている背景を元に戻す目的で、dark-maskというidを持つ要素からactiveというクラスを取り除きます。
      $('#dark-mask').removeClass('active');
      
      //ハンバーガーボタンからactiveというクラスを削除します。
      $burgerBtn.removeClass('active');

      //ボタンの中のテキストを取得して書き換えます。
      $burgerBtn.children('span').text('メニュー');

      //ハンバーガーメニューがopenedというクラスを持っていない場合
    } else {

      //ハンバーガーメニューにopenedというクラスを付与します。
      $burgerMenu.addClass('opened');
      
      //背景を暗くする目的で、bgというidを持つ要素にactiveというクラスを付与します。
      $('#dark-mask').addClass('active');
      
      //ハンバーガーボタンにactiveというクラスを付与します。
      $burgerBtn.addClass('active');

      //ボタンの中のテキストを取得して書き換えます。
      $burgerBtn.children('span').text('閉じる');
    }
  });


  //-------------------------------------
  // swiperの設定
  //-------------------------------------
  
  // pc表示のswiper初期化
  const gamesSwiper = new Swiper("#games-swiper-pc", {

    // ループ設定
    loop: true,

    // スライドが切り替わるスピード
    speed: 2000,

    // スライドを1画面に何枚分表示させるか設定
    slidesPerView: 1,

    // スライド間の余白
    spaceBetween: 50,
    
    // 自動再生の設定
    autoplay: {

      // スライド切り替わりの間隔
      delay: 6000,

      // スライド操作中は自動再生が停止する設定
      disableOnInteraction: true,
    },
    
    // ナビボタンの設定
    navigation: {
      nextEl: "#swiper-button-next-pc",
      prevEl: "#swiper-button-prev-pc"
    }
  });

  // sp表示のswiper初期化
  const gamesSwiperSp = new Swiper("#games-swiper-sp", {

    // ループ設定
    loop: true,

    // スライドが切り替わるスピード
    speed: 2000,

    // スライドを1画面に何枚分表示させるか設定
    slidesPerView: 1,

    // スライド間の余白
    spaceBetween: 50,
    
    // 自動再生の設定
    autoplay: {

      // スライド切り替わりの間隔
      delay: 6000,

      // スライド操作中は自動再生が停止する設定
      disableOnInteraction: true,
    },
    
    // ナビボタンの設定
    navigation: {
      nextEl: "#swiper-button-next-sp",
      prevEl: "#swiper-button-prev-sp"
    }
  });
});