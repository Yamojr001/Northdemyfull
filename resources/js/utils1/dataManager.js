
// dataManager should use backend API endpoints instead of localStorage fallbacks
// API Endpoints:
// - /api/services - for services
// - /api/training - for training programs  
// - /api/team-members - for team members
// - /api/programs - for general programs

const KEYS = {
  SERVICES: 'nd_services',
  PROGRAMS: 'nd_programs',
  TEAM: 'nd_team',
  BLOG: 'nd_blog',
  BOARD: 'nd_board'
};

export const getManagedData = (key, fallback) => {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : fallback;
};

export const saveManagedData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  // Dispatch custom event to notify components
  window.dispatchEvent(new Event('data-updated'));
};

export const DataManager = {
  getServices: () => getManagedData(KEYS.SERVICES, []),
  getPrograms: () => getManagedData(KEYS.PROGRAMS, []),
  getTeam: () => getManagedData(KEYS.TEAM, []),
  getBlog: () => getManagedData(KEYS.BLOG, []),
  getBoard: () => getManagedData(KEYS.BOARD, []),

  addService: (item) => {
    const data = DataManager.getServices();
    saveManagedData(KEYS.SERVICES, [{ ...item, id: Date.now().toString() }, ...data]);
  },
  addProgram: (item) => {
    const data = DataManager.getPrograms();
    saveManagedData(KEYS.PROGRAMS, [{ ...item, id: Date.now().toString() }, ...data]);
  },
  addTeamMember: (item) => {
    const data = DataManager.getTeam();
    saveManagedData(KEYS.TEAM, [{ ...item, id: Date.now().toString() }, ...data]);
  },
  addBlogPost: (item) => {
    const data = DataManager.getBlog();
    saveManagedData(KEYS.BLOG, [{ ...item, id: Date.now().toString(), date: new Date().toLocaleDateString() }, ...data]);
  },
  addBoardMember: (item) => {
    const data = DataManager.getBoard();
    saveManagedData(KEYS.BOARD, [{ ...item, id: Date.now().toString() }, ...data]);
  },
  
  deleteItem: (keyType, id) => {
    const key = KEYS[keyType];
    const current = JSON.parse(localStorage.getItem(key) || '[]');
    const filtered = current.filter((item) => item.id !== id);
    saveManagedData(key, filtered);
  }
};
