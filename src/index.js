const STORAGE_KEY = `Employees`;

const Employees = [
  {
    fullname: "mme  Sanfora",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room",
    experience: [
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" }
    ]
  },
  {
    fullname: "ahmed hosni",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room",
    experience: [
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" }
    ]
  },
  {
    fullname: "Bababoi Her",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room",
    experience: [
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" }
    ]
  },
  {
    fullname: "ahmed hosni",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room",
    experience: [
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" }
    ]
  },
  {
    fullname: "Bababoi Hermano",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room",
    experience: [
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" }
    ]
  },
  {
    fullname: "ahmed hosni",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room",
    experience: [
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" }
    ]
  },
  {
    fullname: "Bababoi Hermano",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room",
    experience: [
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" }
    ]
  },
  {
    fullname: "ahmed hosni",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room",
    experience: [
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" }
    ]
  },
  {
    fullname: "Bababoi Hermano",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room",
    experience: [
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" }
    ]
  },
  {
    fullname: "ahmed hosni",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room",
    experience: [
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" }
    ]
  },
  {
    fullname: "Bababoi Hermano",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room",
    experience: [
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" },
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" },
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" },
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" }
    ]
  },
  {
    fullname: "ahmed hosni",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room",
    experience: [
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" }
    ]
  },
  {
    fullname: "Bababoi Hermano",
    email: "namehimsomuch@gmial.com",
    Position: "Reception",
    phone: "0606050523",
    current_location: "Staff room",
    experience: [
      { from: "2025-2-15", to: "2025-3-10", role: "Manager", company: "Youcode" }
    ]
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

// Checking for data in the local storage 


// adding employees to local storage modal 


// Employees modal

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

// modal Inputs for dynamic exp
const addExpBtn = document.getElementById('addExperienceBtn');
const expList = document.getElementById('experienceList');
const inputFrom = document.getElementById('expFrom');
const inputTo = document.getElementById('expTo');
const inputRole = document.getElementById('expRole');
const inputCompany = document.getElementById('expCompany');

addExpBtn.addEventListener('click', () => {
  const from = inputFrom.value.trim();
  const to = inputTo.value.trim();
  const role = inputRole.value.trim();
  const company = inputCompany.value.trim();

  if (role && company) {

    const emptyMsg = expList.querySelector('.empty-msg');
    if (emptyMsg) emptyMsg.remove();

    const itemContainer = document.createElement('div');
    itemContainer.className = "w-full bg-slateDeep p-3 rounded border border-slate-600/50 animate-pulse-once shadow-sm group relative hover:border-red-500/50 transition-colors cursor-pointer";
    const dateRange = (from || to) ? `<div class="text-xs text-accent mb-1 font-mono">${from} - ${to}</div>` : '';

    itemContainer.innerHTML = `
        ${dateRange}
        <div class="text-sm text-white font-semibold leading-tight">${role}</div>
        <div class="text-xs text-slate-400">${company}</div>
        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 font-bold">X</div>
    `;

    itemContainer.onclick = function () {
      this.remove();
      if (expList.children.length === 0) {
        const msg = document.createElement('p');
        msg.className = "text-slate-500 text-sm italic empty-msg select-none";
        msg.textContent = "No experience added yet.";
        expList.appendChild(msg);
      }
    };

    expList.appendChild(itemContainer);
    inputFrom.value = '';
    inputTo.value = '';
    inputRole.value = '';
    inputCompany.value = '';


  }
});

// Rendring the Employees 


function renderEmployeeList() {
  const container = document.getElementById('employeeList');
  container.innerHTML = '';

  Employees.forEach((emp, index) => {
    const cardHTML = `
      <div class="w-full rounded-2xl bg-slateDeep flex items-center p-2 shadow-lg border border-slate-700/50 hover:border-accent/30 transition-colors">
        
        <div class="shrink-0 mr-2">
            <img src="" alt="${emp}'s profile photo" class="h-10 w-10 rounded-full object-cover border border-accent/20">
        </div>

        <div class="flex-1 min-w-0">
            <h4 class="text-white font-semibold text-sm truncate capitalize">${emp.fullname}</h4>
            <p class="text-slate-400 text-[10px] truncate">${emp.Position}</p>
        </div>

        <div class="flex items-center gap-1 ml-1">
            <button onclick="editEmployee(${index})" class="p-1.5 rounded bg-slate-700/30 text-slate-400 hover:text-accent hover:bg-slate-700 transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
            </button>
            <button onclick="deleteEmployee(${index})" class="p-1.5 rounded bg-slate-700/30 text-slate-400 hover:text-red-400 hover:bg-slate-700 transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
        </div>

      </div>
    `;
    container.innerHTML += cardHTML;
  });
}


renderEmployeeList();



