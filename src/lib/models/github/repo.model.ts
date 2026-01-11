export interface IRepoLinks {
  self: string;
  git: string;
  html: string;
}

export interface IRepo {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: 'file' | 'dir'; // Restricting type to known GitHub content types
  _links: IRepoLinks;
}
