export function smoothScrollToAnchor(id: string) {
      const element = document.getElementById(id);
      const elementPosition = element?.getBoundingClientRect().top;
      const offsetPosition =
        (elementPosition && element) ? (elementPosition + window.scrollY - element.offsetHeight - 15) : 0;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
}
