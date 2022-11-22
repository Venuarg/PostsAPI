import axios from "axios";

interface PaginationParams {
  page: number
  limit: number
}

export async function getPosts (params: PaginationParams) {
     return await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _page: params.page,
        _limit: params.limit
      }
    })
  }
