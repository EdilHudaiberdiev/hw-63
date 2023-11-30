export interface IPost {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface IPostSend {
  title: string,
  description: string,
  date: Date,
}
