# WorkSphere – Workspace Staff Manager

WorkSphere wants an innovative web application dedicated to the visual and interactive management of staff within its workspaces.

The main objective is to facilitate the organization and allocation of employees on a real-time floor plan, while integrating constraints related to roles and authorized zones.

## Core Functionality

- Add, edit, and delete employees through a modal form.
- Dynamic experience fields.
- Visual floor plan with 6 zones:
  - Conference Room  
  - Reception  
  - Server Room  
  - Security Room  
  - Staff Room  
  - Archives Room  
- Role-based placement rules for each zone.
- Unassigned staff panel for quick organization.
- Clickable employee profiles with full details.

## Interaction and Navigation

### Navigation
- Page WorkSphear is the main page on which you can change the employees' details and their zones preferences

### UI Intractive

#### Map

- “+” button in each zone to assign eligible employees.
- “X” button to move them back to Unassigned.
- Restricted areas highlighted in pale red.

#### Adding Employee

- “+” button at the bottom of the sidebar to make the employee form modal popup.
- fill in the modal for an employee to get added under the search bar

#### Modifiying and Deleting a Employee

- “+” button in each employee card to modify it or “X” to delete it.

## Logic and Restrictions

- Reception → Receptionists  
- Server Room → IT Technicians  
- Security Room → Security Officers  
- Managers → Anywhere  
- Cleaning → Anywhere except Archives  
- Others → Anywhere except restricted zones  
- Adding limits per zone.

## The Technologies Used

- HTML5 / CSS3 / JavaScript  
- Flexbox + Grid  
- Responsive breakpoints for desktop, tablet, and mobile  
- Deployable on GitHub Pages
- Planning with Trello
- A Presentation With Canva
