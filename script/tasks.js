const completedTasks = document.getElementById('completed_tasks');
const openTasks = document.getElementById('open_tasks');

completedTasks.addEventListener('mouseover', makeActive);
completedTasks.addEventListener('mouseout', makeNotActive);
completedTasks.addEventListener('click', changeTasksCounter);

function makeActive() {
    this.style.cursor = "pointer";
    completedTasks.style.outline = "3px solid rgba(191, 191, 191, 0.2)";
    completedTasks.style.outlineOffset = "4px";

}

function makeNotActive() {
    completedTasks.style.outline = "none";
}

function changeTasksCounter() {
    const completedTasksCounter = document.querySelector('#completed_tasks span');
    const openTasksCounter = document.querySelector('#open_tasks span');
    if (Number(openTasksCounter.innerHTML) > 0) {
        confirmChange(completedTasksCounter, openTasksCounter);
    } else {
        const declineWindow = createWindow('You don\'t have any open tasks to set complete.');
        const okBtn = createButton('Ok');
        const btnBlock = createBtnBlock();
        btnBlock.appendChild(okBtn);
        declineWindow.appendChild(btnBlock);
        okBtn.onclick = function () {
            declineWindow.remove();
        }
    }
}

function confirmChange(completedTasksCounter, openTasksCounter) {
    const confirmWindow = createWindow('Are you sure you want to change the number of tasks?');

    const btnBlock = createBtnBlock();
    const yesBtn = createButton('Yep');
    const noBtn = createButton('Nope');
    btnBlock.appendChild(yesBtn);
    btnBlock.appendChild(noBtn);

    confirmWindow.appendChild(btnBlock);

    yesBtn.onclick = function () {
        completedTasksCounter.innerHTML = Number(completedTasksCounter.innerHTML) + 1;
        openTasksCounter.innerHTML = Number(openTasksCounter.innerHTML) - 1;
        confirmWindow.remove();
    };
    noBtn.onclick = function () {
        confirmWindow.remove();
    }
}

function createWindow(message) {
    const confirmWindow = document.createElement('div');
    const confirmWindowStyles = `
    position: fixed;
    top: 50vh;
    left: 50vw;
    width: 350px;
    height: 250px;
    transform: translate(-50%, -50%);
    background-color: black;
    border-radius: 5px;
    `;
    confirmWindow.style = confirmWindowStyles;
    document.body.style.position = 'relative';
    const confirmMessage = createConfirmMessage(message);
    confirmWindow.appendChild(confirmMessage);
    document.body.appendChild(confirmWindow);
    return confirmWindow;
}

function createConfirmMessage(message) {
    const confirmMessage = document.createElement('p');
    confirmMessageStyles = `
    padding: 30px 30px 50px 30px;
    font-size: 24px;
    color: white;
    `;
    confirmMessage.style = confirmMessageStyles;
    confirmMessage.innerText = message;
    return confirmMessage;
}

function createButton(btnName) {
    const btn = document.createElement('button');
    btn.innerHTML = btnName;
    btnStyles = `
    width: 70px;
    height: 40px;
    color: black;
    background-color: white;
    border: white;
    border-radius: 5px;
    font-size: 20px;
    `;
    btn.style = btnStyles;
    return btn;
}

function createBtnBlock() {
    const btnBlock = document.createElement('div');

    btnBlockStyles = `
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 70px;
    `;
    btnBlock.style = btnBlockStyles;
    return btnBlock;
}