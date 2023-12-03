export interface NavItemType {
  name: string;
  path: string;
}
export interface ButtonType {
  name: string;
  onClick: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}
export interface ApiData {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export interface LoginFormState {
  username: string;
  password: string;
}
