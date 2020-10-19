$(document).on('click', '.navigation-btn', function() {
  var firstImage = $(this).attr('slide-image-1')
  var secondImage = $(this).attr('slide-image-2')
  var slideHeading = $(this).attr('heading')
  var slideText = $(this).attr('caption')

  if ($(this).closest('.module-navigation').find('.navigation-btn.active').length > 0) {
    $(this).closest('.module-navigation').find('.navigation-btn.active').removeClass('active')
  }

  $(this).addClass('active')

  if ($(this).closest('.module-slider').find('.module-first-image.animate').length > 0) {
    $(this).closest('.module-slider').find('.module-first-image.animate').removeClass('animate').addClass('animate-alt')
    $(this).closest('.module-slider').find('.module-second-image.animate').removeClass('animate').addClass('animate-alt')
  } else {
    $(this).closest('.module-slider').find('.module-first-image.animate-alt').removeClass('animate-alt').addClass('animate')
    $(this).closest('.module-slider').find('.module-second-image.animate-alt').removeClass('animate-alt').addClass('animate')
  }

  $(this).closest('.module-slider').find('.module-first-image').attr('src','img/slideshow/'+firstImage)
  $(this).closest('.module-slider').find('.module-second-image').attr('src','img/slideshow/'+secondImage)
  $(this).closest('.slideshow-section').find('.caption').find('.caption-heading').text(slideHeading)
  $(this).closest('.slideshow-section').find('.caption').find('.caption-heading').attr("double-text", slideHeading)
  $(this).closest('.slideshow-section').find('.caption').find('.caption-text').text(slideText)

  if ($(this).closest('.slideshow-section').find('.caption.caption-animate').length > 0) {
    $(this).closest('.slideshow-section').find('.caption').removeClass('caption-animate').addClass('caption-animate-alt')
  } else {
    $(this).closest('.slideshow-section').find('.caption').removeClass('caption-animate-alt').addClass('caption-animate')
  }
  $(this).closest('.header').find('.btn-slide.active').removeClass('active')
  $(this).closest('.header').find('.btn-slide:nth-of-type('+$(this).attr('btn')+')').addClass('active')
})

$(document).on('click', '.btn-slide', function() {
  var slideNum = $(this).find('span').text()

  if ($(this).closest('.slideshow-navigation').find('.btn-slide.active').length > 0) {
    $(this).closest('.slideshow-navigation').find('.btn-slide.active').removeClass('active')
  }
  $(this).addClass('active')

  $(this).closest('.header').find('.navigation-btn:nth-of-type('+slideNum+')').click()
})
