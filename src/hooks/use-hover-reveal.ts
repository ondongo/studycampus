export default function useHoverReveal() {
  const moveImage = (e: MouseEvent | React.MouseEvent, item: HTMLElement) => {
    const itemRect = item.getBoundingClientRect();
    const x = e.clientX - itemRect.left;
    const y = e.clientY - itemRect.top;
    const childElement = item.querySelector('.tp-hover-reveal-bg') as HTMLElement;

    if (childElement) {
      childElement.style.left = `${x}px`;
      childElement.style.top = `${y}px`;
    }
  };

  const handleMouseMove = (e: MouseEvent | React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    moveImage(e, target);
  };

  return {
    handleMouseMove,
  };
}
