document.querySelectorAll('.FAQ-point').forEach(faqPoint => {
  const question = faqPoint.querySelector('.top');
  const content = faqPoint.querySelector('.data-info');
  const plusIcon = faqPoint.querySelector('.FAQ-plus-icon');
  const minusIcon = faqPoint.querySelector('.FAQ-minus-icon');

  question.addEventListener('click', () => {
    // Toggle content visibility
    content.classList.toggle('hidden');
    content.classList.toggle('block');

    // Toggle icons
    plusIcon.classList.toggle('hidden');
    minusIcon.classList.toggle('hidden');

    // Close other open FAQs
    document.querySelectorAll('.FAQ-point').forEach(otherPoint => {
      if (otherPoint !== faqPoint) {
        const otherContent = otherPoint.querySelector('.data-info');
        const otherPlusIcon = otherPoint.querySelector('.FAQ-plus-icon');
        const otherMinusIcon = otherPoint.querySelector('.FAQ-minus-icon');

        otherContent.classList.add('hidden');
        otherContent.classList.remove('block');
        otherPlusIcon.classList.remove('hidden');
        otherMinusIcon.classList.add('hidden');
      }
    });
  });
});