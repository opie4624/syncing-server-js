export type SyncItemsDTO = {
  itemHashes: Array<string>
  syncToken: string
  cursorToken: string
  limit: number
  userAgent: string,
  contentType?: string
}
