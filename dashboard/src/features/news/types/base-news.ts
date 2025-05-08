export type BaseNews = {
  title?:string
  image?: string | File | null;
  description?: string;
};

export type NewsStateProps<T extends BaseNews> = {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
};