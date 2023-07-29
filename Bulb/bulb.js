export const Bulb = (props) => {
  const { isOn } = props;

  const element = document.createElement('div');
  element.classList.add('bulb');

  if (isOn) {
    element.classList.add('bulb--on');
  }

  element.addEventListener('click', () => {
    element.replaceWith(
      Bulb({
        isOn: !isOn,
      }),
    );
  });

  return element;
};
