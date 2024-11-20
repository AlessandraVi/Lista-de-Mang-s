// script.js

// Função para adicionar novo mangá
document.getElementById('add-manga').addEventListener('click', () => {
    const mangaName = prompt('Digite o nome do mangá:');
    if (mangaName) {
        const list = document.getElementById('manga-list');
        const newItem = document.createElement('li');
        newItem.innerHTML = `
            <span>${mangaName}</span>
            <div class="edit-buttons">
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Excluir</button>
            </div>
        `;
        list.appendChild(newItem);
    }
});

// Evento para edição e exclusão de mangás
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        // Excluir item
        e.target.parentElement.parentElement.remove();
    } else if (e.target.classList.contains('btn-edit')) {
        // Editar item
        const item = e.target.parentElement.parentElement;
        const newName = prompt('Digite o novo nome do mangá:', item.querySelector('span').innerText);
        if (newName) {
            item.querySelector('span').innerText = newName;
        }
    }
});
