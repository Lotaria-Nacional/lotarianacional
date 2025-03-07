export interface IDailyResult {
  id: string
  date: Date
  formatedDate: string
  results: IResult[]
}

export interface IResult {
  id: string
  name: string
  hour: string
  number_1: number
  number_2: number
  number_3: number
  number_4: number
  number_5: number
  videoURL: string
  createdAt: Date
}
export interface INewsDetailed {
  news: INews[]
  total: number
  pages: number
  pageSize: number
}

export interface INews {
  id: string
  title: string
  image: string
  description: string
  createdAt: string
}

export interface IAgency {
  id: string
  name: string
  phone: number
  type: string
  latitude: number
  longitude: number
  location_text: string
  createdAt: Date
}

export interface IUser {
  id: string
  email: string
  firstName: string
  role: string
  lastName: string
  profilePic?: string | Buffer
  createdAt: Date
}

export interface IBanner {
  id: string
  device: string
  image: string
  createdAt: Date
}

export interface IStats {
  sortedNumber: number
  sortedTimes: number
}

export interface IStatistic {
  id: string
  file: string
  statsData: IStats[]
  createdAt: Date
}

export interface IEmission {
  id: string
  url: string
  description?: string
  formatedDate: string
  createdAt: Date
}

export type DeviceType = "desktop" | "mobile"
