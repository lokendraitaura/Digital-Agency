import { NavItemType } from "../types";

export const navItems: NavItemType[] = [
  { name: "About", path: "#" },
  { name: "Services", path: "#" },
  { name: "Projects", path: "#" },
];

export const apiUrl: string = `https://newsapi.org/v2/top-headlines?country=us&apiKey=56ab3e1387ae400bbcfdf4981d4409b5`;
export const authUrl: string = `https://dummyjson.com/auth/login`;
