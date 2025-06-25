export type NewsWithPagination = {
    data: {
      id: string
      title: string
      image: string
      description: string
      createdAt: string
    }[]
    total: number
    pages: number
    pageSize: number
  }
  
  export type NewsEntity = {
    id: string
    title: string
    image: string
    description: string
    createdAt: string
  }