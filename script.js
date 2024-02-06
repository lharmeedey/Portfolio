
// document.addEventListener("DOMContentLoaded", () => {
//   const menuIcon = document.querySelector(".menu-icon");
//   const menu = document.querySelector(".menu");

//   menuIcon.addEventListener("click", () => {
//     menu.classList.toggle("show");
//   });

//   // Animate cards on scroll
//   const cards = document.querySelectorAll(".card");

//   const animateCards = () => {
//     cards.forEach((card) => {
//       const cardTop = card.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;

//       if (cardTop < windowHeight - 150) {
//         card.classList.add("show");
//       }
//     });
//   };

//   // Trigger initial animation
//   animateCards();

//   window.addEventListener("scroll", animateCards);
// });







document.addEventListener("DOMContentLoaded", () => {
   const menuIcon = document.querySelector(".menu-icon");
   const menu = document.querySelector(".menu");

   menuIcon.addEventListener("click", () => {
     menu.classList.toggle("show");
     menuIcon.classList.toggle("active");
     console.log('working')
   });

  // Animate cards and menu items on scroll
  const cards = document.querySelectorAll(".card");
  const menuItems = document.querySelectorAll(".menu li");

  const animateItems = () => {
    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight - 150) {
        card.classList.add("show");
      }
    });

    menuItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight - 150) {
        item.classList.add("show");
      }
    });
  };

  // Trigger initial animation
  animateItems();

  window.addEventListener("scroll", animateItems);
});
