//スムーズスクロール
{
  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
}

//ロード時にフェードイン
$(function(){
  $('html, body').animate({scrollTop: 0}, '1');
  $('.load_fade').addClass('done_load');
});

//スクロール時にフェードイン
$(function(){
  $(window).scroll(function (){
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    $('.scroll_fade').each(function(){
      var position = $(this).offset().top;
      if (scroll > position - windowHeight + 50){
        $(this).addClass('done_scroll');
      }
    });
  });
});

//Topへ戻るボタン
$(function(){
  var pageTopButton = $('#top_btn');
  //100pxスクロールしたらボタンを表示する
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 100){
      pageTopButton.fadeIn(500);
    } else {
      pageTopButton.fadeOut(500);
    }
  });
  //ボタンをクリックしたらスクロールしてTopへ戻る
  pageTopButton.on('click', function(){
    $('html, body').animate({scrollTop: 0}, 500);
    return false;
  });
});

  //ハンバーガーメニュー表示時に背景のスクロールを防止する
  $(function(){
    var hamburgerMenu = $('.hbg_menu');
    hamburgerMenu.on('click', function(){
      $('html').toggleClass('scroll_prevent');
    });
  });

  //ハンバーガーメニューの項目をクリックしたらハンバーガーメニューを隠す
  $(function() {
    var hbgList = $('.hbg_list');
    var menuCheckbox = $('#menu');
    hbgList.on('click', function(){
      menuCheckbox.removeAttr('checked').prop('checked', false).change();
      $('html').removeClass('scroll_prevent');
    });
  });

  //モーダルウィンドウの表示
  $(function(){
    var work_01 = $('#work_01');
    var modal_01 = $('#modal_01');
    work_01.on('click', function(){
      modal_01.fadeIn(500);
    });
    var work_02 = $('#work_02');
    var modal_02 = $('#modal_02');
    work_02.on('click', function(){
      modal_02.fadeIn(500);
    });
    var work_03 = $('#work_03');
    var modal_03 = $('#modal_03');
    work_03.on('click', function(){
      modal_03.fadeIn(500);
    });
  });

  //モーダルウィンドウの背景マスク表示・非表示
  $(function(){
    var work = $('.work');
    var mask = $('#mask');
    var modal = $('.modal');
    var close_modal = $('.close_modal');
    var html = $('html');
    //workをクリックした際
    work.on('click', function(){
      mask.fadeIn(500); //マスクを表示する
      html.addClass('scroll_prevent'); //背景スクロールを防止する
    });
    //マスクをクリックした際
    mask.on('click', function(){
      mask.fadeOut(500); //マスクを非表示にする
      modal.fadeOut(500); //モーダルウィンドウを非表示にする
      html.removeClass('scroll_prevent'); //背景スクロール防止を解除する
    });
    //閉じるボタンをクリックした際
    close_modal.on('click', function(){
      mask.fadeOut(500); //マスクを非表示にする
      modal.fadeOut(500); //モーダルウィンドウを非表示にする
      html.removeClass('scroll_prevent'); //背景スクロール防止を解除する
    });
  });

//モーダルウィンドウのスライドショーJS
'use strict';
{
  {
    const images01 = [
      'img/work_01-1.png',
      'img/work_01-2.png',
      'img/work_01-3.png',
    ];
    let currentIndex = 0;
  
    const mainImage01 = document.getElementById('main_img_01');
    mainImage01.src = images01[currentIndex];
  
    images01.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image;
  
      const li = document.createElement('li');
      if (index === currentIndex) {
        li.classList.add('current');
      }
      li.addEventListener('click', () => {
        mainImage01.src = image;
        const thumbnails = document.querySelectorAll('#thumbnail_01 > li');
        thumbnails[currentIndex].classList.remove('current');
        currentIndex = index;
        thumbnails[currentIndex].classList.add('current');
      });
  
      li.appendChild(img);
      document.querySelector('#thumbnail_01').appendChild(li);
    });
  
    const next = document.getElementById('next_01');
    next.addEventListener('click', () => {
      let target = currentIndex + 1;
      if (target === images01.length) {
        target = 0;
      }
      document.querySelectorAll('#thumbnail_01 > li')[target].click();
    });
  
    const prev = document.getElementById('prev_01');
    prev.addEventListener('click', () => {
      let target = currentIndex - 1;
      if (target < 0) {
        target = images01.length - 1;
      }
      document.querySelectorAll('#thumbnail_01 > li')[target].click();
    });
  }
  
  {
    const images02 = [
      'img/work_02-1.png',
      'img/work_02-2.png',
      'img/work_02-3.png',
    ];
    let currentIndex = 0;
  
    const mainImage02 = document.getElementById('main_img_02');
    mainImage02.src = images02[currentIndex];
  
    images02.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image;
  
      const li = document.createElement('li');
      if (index === currentIndex) {
        li.classList.add('current');
      }
      li.addEventListener('click', () => {
        mainImage02.src = image;
        const thumbnails = document.querySelectorAll('#thumbnail_02 > li');
        thumbnails[currentIndex].classList.remove('current');
        currentIndex = index;
        thumbnails[currentIndex].classList.add('current');
      });
  
      li.appendChild(img);
      document.querySelector('#thumbnail_02').appendChild(li);
    });
  
    const next = document.getElementById('next_02');
    next.addEventListener('click', () => {
      let target = currentIndex + 1;
      if (target === images02.length) {
        target = 0;
      }
      document.querySelectorAll('#thumbnail_02 > li')[target].click();
    });
  
    const prev = document.getElementById('prev_02');
    prev.addEventListener('click', () => {
      let target = currentIndex - 1;
      if (target < 0) {
        target = images02.length - 1;
      }
      document.querySelectorAll('#thumbnail_02 > li')[target].click();
    });
  }

  {
    const images03 = [
      'img/work_03-1.png',
      'img/work_03-2.png',
      'img/work_03-3.png',
    ];
    let currentIndex = 0;
  
    const mainImage03 = document.getElementById('main_img_03');
    mainImage03.src = images03[currentIndex];
  
    images03.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image;
  
      const li = document.createElement('li');
      if (index === currentIndex) {
        li.classList.add('current');
      }
      li.addEventListener('click', () => {
        mainImage03.src = image;
        const thumbnails = document.querySelectorAll('#thumbnail_03 > li');
        thumbnails[currentIndex].classList.remove('current');
        currentIndex = index;
        thumbnails[currentIndex].classList.add('current');
      });
  
      li.appendChild(img);
      document.querySelector('#thumbnail_03').appendChild(li);
    });
  
    const next = document.getElementById('next_03');
    next.addEventListener('click', () => {
      let target = currentIndex + 1;
      if (target === images03.length) {
        target = 0;
      }
      document.querySelectorAll('#thumbnail_03 > li')[target].click();
    });
  
    const prev = document.getElementById('prev_03');
    prev.addEventListener('click', () => {
      let target = currentIndex - 1;
      if (target < 0) {
        target = images03.length - 1;
      }
      document.querySelectorAll('#thumbnail_03 > li')[target].click();
    });
  }
}