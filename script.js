const hex = document.querySelector('.hex');

const generateBtn = document.querySelector('.generator');

const randomColor = () => {
  const hexColor = Math.random().toString(16).substring(2, 8);

  document.body.style.backgroundColor = `#${hexColor}`;
  hex.innerHTML = `#${hexColor}`;
};

generateBtn.addEventListener('click',randomColor  );


randomColor();