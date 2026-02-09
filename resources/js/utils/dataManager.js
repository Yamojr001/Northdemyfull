
import { SERVICES, PROGRAMS, ALL_TEAM, BLOG_POSTS, BOARD } from '../constants';

const KEYS = {
  SERVICES: 'nd_services',
  PROGRAMS: 'nd_programs',
  TEAM: 'nd_team',
  BLOG: 'nd_blog',
  BOARD: 'nd_board'
};

export const getManagedData = (key: string, fallback: any[]) => {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : fallback;
};

export const saveManagedData = (key: string, data: any[]) => {
  localStorage.setItem(key, JSON.stringify(data));
  // Dispatch custom event to notify components
  window.dispatchEvent(new Event('data-updated'));
};

export const DataManager = {
  getServices: () => getManagedData(KEYS.SERVICES, SERVICES),
  getPrograms: () => getManagedData(KEYS.PROGRAMS, PROGRAMS),
  getTeam: () => getManagedData(KEYS.TEAM, ALL_TEAM),
  getBlog: () => getManagedData(KEYS.BLOG, BLOG_POSTS),
  getBoard: () => getManagedData(KEYS.BOARD, BOARD),

  addService: (item: any) => {
    const data = DataManager.getServices();
    saveManagedData(KEYS.SERVICES, [{ ...item, id: Date.now().toString() }, ...data]);
  },
  addProgram: (item: any) => {
    const data = DataManager.getPrograms();
    saveManagedData(KEYS.PROGRAMS, [{ ...item, id: Date.now().toString() }, ...data]);
  },
  addTeamMember: (item: any) => {
    const data = DataManager.getTeam();
    saveManagedData(KEYS.TEAM, [{ ...item, id: Date.now().toString() }, ...data]);
  },
  addBlogPost: (item: any) => {
    const data = DataManager.getBlog();
    saveManagedData(KEYS.BLOG, [{ ...item, id: Date.now().toString(), date: new Date().toLocaleDateString() }, ...data]);
  },
  addBoardMember: (item: any) => {
    const data = DataManager.getBoard();
    saveManagedData(KEYS.BOARD, [{ ...item, id: Date.now().toString() }, ...data]);
  },
  
  deleteItem: (keyType: keyof typeof KEYS, id: string) => {
    const key = KEYS[keyType];
    const current = JSON.parse(localStorage.getItem(key) || '[]');
    const filtered = current.filter((item: any) => item.id !== id);
    saveManagedData(key, filtered);
  }
};
