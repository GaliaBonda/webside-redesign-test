const album = document.querySelector('.record__album');

const picArray = [];
for (let i = 0; i < album.children.length; i++) {
    picArray.push(album.children[i]);
    album.children[i].addEventListener('click', changeNotifications);
    album.children[i].addEventListener('mouseover', makePicActive);
    album.children[i].addEventListener('mouseout', makePicNonActive);
}

function changeNotifications(event) {
    const currentIndex = picArray.indexOf(event.target);
    const notifications = document.getElementById('notifications');
    notifications.setAttribute('data-after', currentIndex);
}

function makePicActive() {
    this.style.cursor = 'pointer';
    this.style.opacity = '0.5';
}

function makePicNonActive() {
    this.style.opacity = '1';
}
