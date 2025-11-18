const STORAGE_KEY = `Employees`;

const Employees = [
  {
    fullname: "mme  Sanfora",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room"
  },
  {
    fullname: "ahmed hosni",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room"
  },
  {
    fullname: "Bababoi Hermano",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room"
  }
];

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

// adding employees to local storage modal 
const addExpBtn = document.getElementById('addExperienceBtn');
const expInput = document.getElementById('experienceInput');
const expList = document.getElementById('experienceList');

addExpBtn.addEventListener('click', () => {
  const text = expInput.value.trim();

  if (text) {
    const emptyMsg = expList.querySelector('.empty-msg');
    if (emptyMsg) emptyMsg.remove();

    const pTag = document.createElement('p');

    pTag.className = "w-full break-words bg-slateDeep text-white text-sm p-2 rounded border border-slate-600/50 animate-pulse-once shadow-sm";

    pTag.textContent = text;
    pTag.style.cursor = "pointer";
    pTag.title = "Click to remove";
    pTag.onclick = function () {
      this.remove();
      if (expList.children.length === 0) {
        const msg = document.createElement('p');
        msg.className = "text-slate-500 text-sm italic empty-msg select-none";
        msg.textContent = "No experience added yet.";
        expList.appendChild(msg);
      }
    };

    expList.appendChild(pTag);
    expInput.value = '';
    expInput.focus();
  }
});
// Checking for data in the local storage 



