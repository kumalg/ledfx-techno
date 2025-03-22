const HOST = 'http://localhost:8888'

export const api = {
  async setEffect(device: string, data: Record<string, unknown>) {
    return await fetch(`${HOST}/api/virtuals/${device}/effects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
}
