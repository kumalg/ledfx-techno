const QLC_WS_URL = "ws://localhost:9999/qlcplusWS";

export class QlcWsClient {
  private socket: WebSocket | undefined;
  private readonly messageQueue: string[] = [];

  constructor(private readonly url: string = QLC_WS_URL) {}

  connect() {
    if (
      this.socket &&
      (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING)
    ) {
      return;
    }

    this.socket = new WebSocket(this.url);

    this.socket.addEventListener("open", () => {
      this.flushQueue();
      console.log(`[QLC+] Connected to ${this.url}`);
    });

    this.socket.addEventListener("close", () => {
      console.warn("[QLC+] WebSocket connection closed");
    });

    this.socket.addEventListener("error", (event) => {
      console.error("[QLC+] WebSocket error", event);
    });
  }

  disconnect() {
    this.socket?.close();
    this.socket = undefined;
  }

  sendMessages(messages: string[]) {
    for (const message of messages) {
      this.sendMessage(message);
    }
  }

  private sendMessage(message: string) {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(message);
      return;
    }

    this.messageQueue.push(message);
    this.connect();
  }

  private flushQueue() {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      return;
    }

    while (this.messageQueue.length > 0) {
      const message = this.messageQueue.shift();
      if (message) {
        this.socket.send(message);
      }
    }
  }
}
