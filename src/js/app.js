import '../styles/root.scss'

let positionOfSlide = 1
const slides = [...document.querySelectorAll('.carousel__item')]
const carouselButtons = [...document.querySelectorAll('.carousel__btn')]
const carouselIndicators = [...document.querySelectorAll('.carousel__indicator')]
const quantity_of_Items = slides.length

const run = () => {
  carouselIndicators[positionOfSlide].classList.add('carousel__indicator--active')

  const carouselHandler = (e) => {
    const nextDirectionSlide = e.target.dataset.swipe
    if (nextDirectionSlide === 'right') {
      moveToNextSlide()
    } else {
      moveToPrevSlide()
    }
  }

  const moveToNextSlide = () => {
    positionOfSlide === quantity_of_Items - 1 ? positionOfSlide = 0 : positionOfSlide++
    updatePosition()
  }

  const moveToPrevSlide = () => {
    positionOfSlide === 0 ? positionOfSlide = quantity_of_Items - 1 : positionOfSlide--
    updatePosition()
  }

  const updatePosition = () => {
    slides.forEach(slide => slide.classList.remove('carousel__item--visible'))

    carouselIndicators.forEach(indicator => indicator.classList.remove('carousel__indicator--active'))

    slides[positionOfSlide].classList.add('carousel__item--visible')
    carouselIndicators[positionOfSlide].classList.add('carousel__indicator--active')
  }
  carouselButtons.forEach(button => {
    button.addEventListener('click', carouselHandler)
  })
}

document.addEventListener('DOMContentLoaded', run)