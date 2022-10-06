const target = document.querySelector('div');
target.addEventListener('mouseover', (e) => {
  console.log(`${e.pageX}, ${e.pageY}`);
})