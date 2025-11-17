// Side Bar show hide
const hideSideBarBtn = document.getElementById(`hideSideBarBtn`);
const sideBar = document.getElementById(`sideBar`);
const showSideBarBtn = document.getElementById(`showSideBarBtn`);

function showSidebar() {
    sideBar.classList.remove('hidden');
    hideSideBarBtn.classList.remove('hidden');
    showSideBarBtn.classList.add('hidden');
}

function hideSidebar() {
    sideBar.classList.add(`hidden`);
    hideSideBarBtn.classList.add(`hidden`);
    showSideBarBtn.classList.remove(`hidden`);
}

hideSideBarBtn.addEventListener('click', hideSidebar);
showSideBarBtn.addEventListener('click', showSidebar);