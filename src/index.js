const STORAGE_KEY = `unsignedEmployees`;
let Employees = [];
const storedData = localStorage.getItem(STORAGE_KEY);

if (storedData) {
  Employees = JSON.parse(storedData);
  if (Employees.length === 0) {
    initializeDefaultEmployees();
  }
} else {
  initializeDefaultEmployees();
}

function initializeDefaultEmployees() {
  Employees = [{
    "id": "emp-0-1763627588515",
    "fullName": "mme Sanfora",
    "email": "namehimsomuch@gmial.com",
    "position": "Reception",
    "phone": "0606050523",
    "currentLocation": "Staff room",
    "photoUrl": "https://imgs.search.brave.com/q-QoMPyZHgH3putURkfCdIQMa5Bg8luup8qs3GjbpQs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdXNlci1wcm9m/aWxlLWljb24tY2ly/Y2xlXzEyNTYwNDgt/MTI0OTkuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw",
    "experience": []
  }];
}

// Sidebar show hide
const hideSideBarBtn = document.getElementById(`hideSideBarBtn`);
const sideBar = document.getElementById(`sideBar`);
const showSideBarBtn = document.getElementById(`showSideBarBtn`);
const saveBtn = document.getElementById('saveModalInformation');

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

// Save Data
function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
// Generate ID
function generateId() {
  return `s${Date.now() + Math.random().toString(36)}`;
}

// Profile Photo Preview Handling
const photoURL = document.getElementById("photoURL");
const preview_img = document.getElementById("preview_img");

photoURL.addEventListener("input", () => {
  preview_img.src = photoURL.value;
});

// Add Employee Modal Toggle
const addEmployeeBtn = document.getElementById('addEmployeeInformation');
const modal = document.getElementById('addEmployeeBtn');
const cancelBtn = modal.querySelector('#closeModalBtn');

addEmployeeBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
});

cancelBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
});

// Experience Addition Section 
let tempExperienceList = [];
const addExpBtn = document.getElementById('addExperienceBtn');
const expList = document.getElementById('experienceList');
const inputFrom = document.getElementById('expFrom');
const inputTo = document.getElementById('expTo');
const inputRole = document.getElementById('expRole');
const inputCompany = document.getElementById('expCompany');
const expWarningMsg = document.getElementById('expWarningMsg');

addExpBtn.addEventListener('click', () => {
  const from = inputFrom.value.trim();
  const to = inputTo.value.trim();
  const role = inputRole.value.trim();
  const company = inputCompany.value.trim();

  if (role && company) {
    expWarningMsg.classList.add("hidden");
    const emptyMsg = expList.querySelector('.empty-msg');
    if (emptyMsg) emptyMsg.remove();

    const newCard = createExperienceCard(from, to, role, company);

    expList.appendChild(newCard);
    tempExperienceList.push({
      from,
      to,
      role,
      company
    });

    inputFrom.value = '';
    inputTo.value = '';
    inputRole.value = '';
    inputCompany.value = '';
  } else {
    expWarningMsg.classList.remove("hidden");
  }
});

// Create Experience HTML Card
function createExperienceCard(from, to, role, company) {
  const itemContainer = document.createElement('div');
  itemContainer.className = "w-full bg-slateDeep p-3 rounded border border-slate-600/50 animate-pulse-once shadow-sm group relative hover:border-red-500/50 transition-colors cursor-pointer";

  const dateRange = (from || to) ? `<div class="text-xs text-accent mb-1 ">${from} - ${to}</div>` : '';

  itemContainer.innerHTML = `
        ${dateRange}
        <div class="text-sm text-white font-semibold leading-tight">${role}</div>
        <div class="text-xs text-slate-400">${company}</div>
        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 font-bold">X</div>
    `;

  itemContainer.onclick = function () {
    this.remove();

    const index = tempExperienceList.findIndex(item =>
      item.role === role &&
      item.company === company &&
      item.from === from &&
      item.to === to
    );

    if (index > -1) {
      tempExperienceList.splice(index, 1);
    }

    const expList = document.getElementById('experienceList');
    if (expList.children.length === 0) {
      const msg = document.createElement('p');
      msg.className = "text-slate-500 text-sm italic empty-msg select-none";
      msg.textContent = "No experience added yet.";
      expList.appendChild(msg);
    }
  };

  return itemContainer;
}

const nameRegex = /^[a-zA-Z\s]{3,}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const phoneRegex = /^\d{10}$/;

// Save Employee 
saveBtn.addEventListener('click', () => {
  const fullNameVal = document.getElementById('nameInput').value.trim();
  const emailVal = document.getElementById('emailInput').value.trim();
  const positionVal = document.getElementById('positionInput').value;
  const phoneVal = document.getElementById('phoneInput').value.trim();
  const photoVal = document.getElementById('photoURL').value;

  const nameWarn = document.getElementById('fullNameWarningMsg');
  const emailWarn = document.getElementById('emailWarningMsg');
  const phoneWarn = document.getElementById('phoneWarningMsg');
  const positionWarn = document.getElementById('PositionWarningMsg')

  nameWarn.classList.add('hidden');
  emailWarn.classList.add('hidden');
  phoneWarn.classList.add('hidden');
  positionWarn.classList.add('hidden');

  // Validation Checks
  if (!nameRegex.test(fullNameVal)) {
    nameWarn.classList.remove('hidden');
    return;
  }

  if (!emailRegex.test(emailVal)) {
    emailWarn.classList.remove('hidden');
    return;
  }

  if (!phoneRegex.test(phoneVal)) {
    phoneWarn.classList.remove('hidden');
    return;
  }

  if (!positionVal) {
    positionWarn.classList.remove('hidden');
    return;
  }

  // Create Object
  const newEmployee = {
    id: generateId(),
    fullName: fullNameVal,
    email: emailVal,
    position: positionVal,
    phone: phoneVal,
    photoUrl: photoVal || "https://imgs.search.brave.com/q-QoMPyZHgH3putURkfCdIQMa5Bg8luup8qs3GjbpQs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdXNlci1wcm9m/aWxlLWljb24tY2ly/Y2xlXzEyNTYwNDgt/MTI0OTkuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw",
    experience: [...tempExperienceList]
  };

  Employees.push(newEmployee);
  saveData(Employees);
  renderEmployeeList();

  // Close Modal & Reset Form
  modal.classList.add('hidden');
  modal.classList.remove('flex');

  tempExperienceList = [];
  document.getElementById('experienceList').innerHTML = '<p class="text-slate-500 text-sm italic empty-msg select-none">No experience added yet.</p>';
  document.getElementById('nameInput').value = "";
  document.getElementById('emailInput').value = "";
  document.getElementById('phoneInput').value = "";
  document.getElementById('photoURL').value = "";
  document.getElementById('positionInput').value = "";
});

// Delete Employee Modal with the deletion logic il devide them later for more optimazation
const deleteModal = document.getElementById('deleteEmployeeModal');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

let employeeToDeleteIndex = null;

function triggerDelete(index) {
  employeeToDeleteIndex = index;
  deleteModal.classList.remove('hidden');
  deleteModal.classList.add('flex');
}

cancelDeleteBtn.addEventListener('click', () => {
  deleteModal.classList.add('hidden');
  deleteModal.classList.remove('flex');
  employeeToDeleteIndex = null;
});

confirmDeleteBtn.addEventListener('click', () => {
  if (employeeToDeleteIndex !== null) {
    Employees.splice(employeeToDeleteIndex, 1);
    saveData(Employees);
    renderEmployeeList();

    deleteModal.classList.add('hidden');
    deleteModal.classList.remove('flex');
    employeeToDeleteIndex = null;
  }
});

// Render Employee List 
function renderEmployeeList() {
  const container = document.getElementById('employeeList');
  container.innerHTML = '';

  Employees.forEach((emp, index) => {
    const cardHTML = `
      <div class="w-full rounded-2xl bg-slateDeep flex items-center p-2 shadow-lg border border-slate-700/50 hover:border-accent/30 transition-colors">
        
        <div class="shrink-0 mr-2">
            <img src="${emp.photoUrl}" alt="Profile" class="h-10 w-10 rounded-full object-cover border border-accent/20">
        </div>

        <div class="flex-1 min-w-0">
            <h4 class="text-white font-semibold text-sm truncate capitalize">${emp.fullName}</h4>
            <p class="text-slate-400 text-[10px] truncate">${emp.position}</p>
        </div>

        <div class="flex items-center gap-1 ml-1">
            <button onclick="triggerDelete(${index})" class="p-1.5 rounded bg-slate-700/30 text-slate-400 hover:text-red-400 hover:bg-slate-700 transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
        </div>

      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

renderEmployeeList();