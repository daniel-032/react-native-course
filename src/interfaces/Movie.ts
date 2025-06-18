export interface ApiPath {
    path: string;
    params: { [key: string]: string | number | boolean}
}

export interface DataMovie {
  id: string;
  overview: string;
  title: string;
  poster_path: string;
  release_date: string;
}
