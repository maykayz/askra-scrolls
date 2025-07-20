import { API_URL } from '@/constants/api';
import { Message, StreamMessage } from '@/types/chat';

class WebSocketService {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000;
  private messageHandlers: ((data: StreamMessage) => void)[] = [];

  private getWebSocketUrl() {
    return API_URL.replace(/^https?/, 'ws') + '/api/ws/chat';
  }

  initializeConnection(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        resolve();
        return;
      }

      const wsUrl = this.getWebSocketUrl();

      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        this.reconnectAttempts = 0;
        resolve();
      };

      this.ws.onmessage = event => {
        try {
          const data = JSON.parse(event.data);
          this.messageHandlers.forEach(handler => handler(data));
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      this.ws.onclose = () => {
        this.attemptReconnect();
      };

      this.ws.onerror = error => {
        console.error('WebSocket error:', error);
        reject(error);
      };
    });
  }

  private attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;

      setTimeout(() => {
        this.initializeConnection().catch(error => {
          console.error('Reconnection failed:', error);
        });
      }, this.reconnectDelay * this.reconnectAttempts);
    } else {
      console.error('Max reconnection attempts reached');
    }
  }

  sendMessage(message: Message) {
    if (!message || !message.question || !message.chat_id) {
      throw new Error("Message must contain 'question' and 'chat_id'");
    }

    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const messageData = {
        question: message.question,
        chat_id: message.chat_id
      };

      this.ws.send(JSON.stringify(messageData));
    } else {
      console.error('WebSocket is not connected. Current state:', this.ws?.readyState);

      this.initializeConnection()
        .then(() => {
          if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(
              JSON.stringify({
                question: message.question,
                chat_id: message.chat_id
              })
            );
          }
        })
        .catch(error => {
          console.error('Failed to reconnect and send message:', error);
        });
    }
  }

  onMessage(callback: (data: StreamMessage) => void) {
    this.messageHandlers.push(callback);

    return () => {
      const index = this.messageHandlers.indexOf(callback);
      if (index > -1) {
        this.messageHandlers.splice(index, 1);
      }
    };
  }

  disconnectSocket() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  getConnectionState() {
    return this.ws ? this.ws.readyState : WebSocket.CLOSED;
  }

  isConnected() {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }
}

const webSocketService = new WebSocketService();

export const initializeConnection = () => webSocketService.initializeConnection();
export const disconnectSocket = () => webSocketService.disconnectSocket();
export const sendMessage = (message: Message) => webSocketService.sendMessage(message);
export const onMessage = (callback: (data: StreamMessage) => void) =>
  webSocketService.onMessage(callback);
export const isConnected = () => webSocketService.isConnected();

export default webSocketService;
