const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');








button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        const del = document.createElement('button');
        del.textContent = "❌";

        li.append(del);

        list.append(li);

        input.value = '';
    }
    input.focus();
});


del.addEventListener('click', function () {

    list.removeChild(li);
    input.focus();
});

