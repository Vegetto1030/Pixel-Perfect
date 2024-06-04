const todoInput = document.getElementById('todo-input');
        const addButton = document.getElementById('add-button');
        const todoItems = document.getElementById('todo-items');

        function loadTasks() {
            const storedTasks = localStorage.getItem('toDoList');
            if (storedTasks) {
                const tasks = JSON.parse(storedTasks);
                tasks.forEach(task => {
                    const listItem = document.createElement('li');
                    listItem.textContent = task;

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Supprimer';
                    deleteButton.addEventListener('click', () => {
                        todoItems.removeChild(listItem);
                        saveTasks();
                    });

                    listItem.appendChild(deleteButton);
                    todoItems.appendChild(listItem);
                });
            }
        }

        function saveTasks() {
            const tasks = Array.from(todoItems.children).map(listItem => listItem.textContent);
            localStorage.setItem('toDoList', JSON.stringify(tasks));
        }

        loadTasks();

        addButton.addEventListener('click', () => {
            const todoText = todoInput.value.trim();

            if (todoText) {
                const listItem = document.createElement('li');
                listItem.textContent = todoText;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Supprimer';
                deleteButton.addEventListener('click', () => {
                    todoItems.removeChild(listItem);
                    saveTasks();
                });

                listItem.appendChild(deleteButton);
                todoItems.appendChild(listItem);

                todoInput.value = '';
                saveTasks(); // Sauvegarde de la nouvelle tâche
            }
        });