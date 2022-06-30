const KEYS = {
  employees: "employees",
  employeeId: "employeeId",
};

export const getCategoryCollection = () => [
  { id: "1", title: "Solar Panels" },
  { id: "2", title: "Solar Inverters" },
  { id: "3", title: "Solar Batteries" },
  { id: "4", title: "Solar Street Lights" },
  { id: "5", title: "PV Combiner Box" },
  { id: "6", title: "PV Accessory" },
];
export const getTypeCollection = () => [
  [
    { id: "1", title: "Tier one" },
    { id: "2", title: "Tokkma" },
    { id: "3", title: "Jasaki" },
  ],
  [
    { id: "1", title: "Off-Grid" },
    { id: "2", title: "On-Grid" },
    { id: "3", title: "Hybrid" },
    { id: "4", title: "Pump" },
  ],
  [
    { id: "1", title: "Lithium battery" },
    { id: "2", title: "Gel battery" },
    { id: "3", title: "Tubular battery" },
  ],

  [
    { id: "1", title: "800 Watt" },
    { id: "2", title: "600 Watt big" },
    { id: "3", title: "600 Watt small" },
    { id: "3", title: "600 Watt" },
  ],
  [
    { id: "1", title: "2 string" },
    { id: "2", title: "4 string" },
    { id: "3", title: "6 string" },
    { id: "4", title: "8 string" },
    { id: "5", title: "10 string" },
    { id: "6", title: "12 string" },
  ],
  [
    { id: "1", title: "Middle Clamp" },
    { id: "2", title: "End Clamp" },
    { id: "3", title: "Main Beam" },
    { id: "4", title: "Hinged Joint" },
    { id: "5", title: "Hand Crimping tools" },
    { id: "6", title: "MC4 connector" },
    { id: "7", title: "Solar cable" },
  ],
];

export function insertEmployee(data) {
  let employees = getAllEmployees();
  data["id"] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.employees));
}
