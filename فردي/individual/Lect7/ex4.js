const users = [
    { id: 1, name: "Ahmed Mohamed", email: "Ahmed Mohamed@example.com", isActive: true },
    { id: 2, name: "Mohamed Mostafa", email: "Mohamed Mostafa@example.com", isActive: false },
    { id: 3, name: "Ali Tarek", email: "Ali Tarek@example.com", isActive: true },
    { id: 4, name: "Yosef Ahmed", email: "Yosef Ahmed@example.com", isActive: false }
];


const renderUsers = () => {
    const userList = document.getElementById("userList");
    users.forEach(user => {
        const li = document.createElement("li");

        
        li.innerHTML = `
            <span class="user-name">${user.name}</span>
            <br>
            <span class="user-email">${user.email}</span>
            <br>
            <span class="${user.isActive ? 'active' : 'inactive'}">
                ${user.isActive ? 'Active' : 'Inactive'}
            </span>
        `;
        userList.appendChild(li);
    });
};


renderUsers();