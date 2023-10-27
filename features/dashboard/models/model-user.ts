export const modelUser = (data: any[], pageSize: number, page: number) => {
  return data?.map((x, i) => ({
    ...x,
    key: i,
    no: i + 1 + pageSize * (page - 1),
  }))
}
