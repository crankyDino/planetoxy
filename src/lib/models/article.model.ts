export interface IArticle {
  data: Array<IData>
  meta: IMeta
}

export interface IData {
  id: number
  attributes: IArticle | IMedia
}

export interface IArticle {
  createdAt: string
  updatedAt: string
  publishedAt: string
  author: string
  title: string
  paragraph: Array<IParagraph>
  tags: Array<ITag>
  row: any
  card: ICard
  banner: IBanner
  url: string // remove
  alternativeText: string // remove
}

export interface IParagraph {
  id: number
  body: Array<IBody>
  row: Array<IRow>
}

export interface IBody {
  type: string
  children: Array<IParagraphChildren>
}

export interface IParagraphChildren {
  type: string
  text: string
}

export interface IRow {
  id: number
  Title: string
  description: Array<IDescription>
  content: { data: IData }
}

export interface IDescription {
  type: string
  children: Array<IParagraphChildren>
}

export interface IMedia {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: IFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface IFormats {
  thumbnail: IThumbnail
  small: IFormat
  medium: IFormat
  large: IFormat
}

export interface IThumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface IFormat {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface ITag {
  id: number
  tag: string
}

export interface ICard {
  id: number
  Title: string
  description: any
}

export interface IBanner {
  data: IData
}

export interface IMeta {
  pagination: IPagination
}

export interface IPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
