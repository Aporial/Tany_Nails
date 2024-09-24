function openFullscreen(img) {
  const fullscreenContainer = document.getElementById('fullscreen-container')
  const fullscreenImage = document.getElementById('fullscreen-image')

  // Встановлюємо джерело зображення
  fullscreenImage.src = img.src

  // Відображаємо контейнер на весь екран з анімацією
  fullscreenContainer.style.display = 'flex' // Показуємо контейнер
  setTimeout(() => {
    fullscreenContainer.classList.add('show') // Додаємо клас для анімації
    document.body.classList.add('no-scroll') // Додаємо клас для блокування прокручування
  }, 10) // Маленька затримка
}

function closeFullscreen() {
  const fullscreenContainer = document.getElementById('fullscreen-container')

  // Видаляємо клас для анімації
  fullscreenContainer.classList.remove('show')

  // Використовуємо таймер, щоб дочекатися анімації
  setTimeout(() => {
    fullscreenContainer.style.display = 'none' // Сховуємо контейнер після анімації
    document.body.classList.remove('no-scroll') // Відновлюємо прокручування
  }, 300) // Час, що відповідає анімації
}

// Меню для мобільної версії

function toggleMenu() {
  const menu = document.getElementById('mobile-menu')
  menu.classList.toggle('show') // Додаємо/видаляємо клас show
}

// Додаємо обробник подій для закриття меню при натисканні на пункт
document.querySelectorAll('.menu-item').forEach((item) => {
  item.addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu')
    menu.classList.remove('show') // Видаляємо клас show
  })
})
