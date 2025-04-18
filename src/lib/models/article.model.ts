export interface IArticle {
  slug: ISlug,
  title: string,
  author: string,
  tags: Array<ITag>,
  paragraphRaw: any
  published: Date
}
export interface ISlug {
  current: string
}
export interface ITag {
  tagName: string
}
export interface IArticleMedia {
  contentUrl: string,
  description: string,
  title: string,
  type: string,
  ref: string,
}