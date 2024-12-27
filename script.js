function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
 /**
 * Toggles the rotation of the skill card to show the description.
 * Ensures each card behaves independently.
 */
function toggleSkill(skillItem) {
  // Toggle the 'active' class to flip the skill card
  skillItem.classList.toggle('active');
}
/* Toggles the rotation of the project- card to show the description.*/
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});





