const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const removeBtn = document.querySelector('.item__delete');
const shoppingList = document.querySelector('.item__name');
const form = document.querySelector('.new-form');

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  // 2. 새로운 아이템은 만듦 (텍스트 + 삭제 버튼)
  const item = createItem(text);
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가
  items.appendChild(item);
  // 4. 새로 추가 된 아이템으로 스크롤링
  item.scrollIntoView({ block: 'center' });
  // 5. input을 초기화 한다
  input.value = '';
  input.focus();
}
let id = 0; // UUID or HashCode in object 등 고유한 id를 쓰는 것이 좋음
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__Row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = ` 
        <div class="item">
          <span class="item__name">${text}</span>
          <button class="item__delete" >
            <i class="fas fa-trash-alt" data-id=${id}></i>
          </button>
        </div>
        <div class="item__divider"></div>`;
    id++;
    return itemRow;
}

form.addEventListener('submit', event => {
  event.preventDefault(); // page자동으로 로딩X
  onAdd();
})
// addBtn.addEventListener('click', () => {
//   onAdd();
// });

// input.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter') {
//     onAdd();
//   }
// })

items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDelete = document.querySelector(`.item__Row[data-id = "${id}"]`);
    toBeDelete.remove();
  }
})