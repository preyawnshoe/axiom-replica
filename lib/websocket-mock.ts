/**
 * WebSocket Mock Service
 * Simulates real-time price updates for tokens
 */

export type PriceUpdate = {
  id: string;
  marketCap: string;
  volume: string;
  floor: string;
  change: 'increase' | 'decrease' | 'neutral';
  timestamp: number;
};

type Listener = (update: PriceUpdate) => void;

class WebSocketMock {
  private listeners: Set<Listener> = new Set();
  private intervalId: NodeJS.Timeout | null = null;
  private isConnected = false;
  private allTokenIds: string[] = [
    '6GZx...TS3V', '2WBR...NH8Y', '8c1c...pump', '2sDz...pump', '9kGe...bonk',
    'TSO...pump', '9aXv...7nNm', '5ZKQ...BA4r', 'HF6P...NSTU', 'ESPP...79Uf',
    '43vY...pump', 'Goog...leAI', 'WoB5...FdZL', 'GCED...Me4T', '7mQV...oM3H',
    'FXtM...A2vW', 'BgDR...iyrw', 'Zama...5678',
    // BNB tokens
    '0x12...abcd', '0x34...efgh', '0x56...ijkl', '0x78...mnop', '0x9a...qrst', '0xbc...uvwx',
    '0xde...yz01', '0xf0...1234', '0x78...abcd', '0xde...yz12', '0xf0...3456', '0x12...5678',
    '0x34...9abc', '0x56...def0'
  ];

  connect() {
    if (this.isConnected) return;
    
    this.isConnected = true;
    
    // Simulate price updates every 400ms-750ms for faster updates
    this.intervalId = setInterval(() => {
      this.broadcastMultipleUpdates();
    }, Math.random() * 350 + 400);
  }

  disconnect() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isConnected = false;
    this.listeners.clear();
  }

  subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private broadcastMultipleUpdates() {
    // Update 10-15 random tokens per broadcast for high activity
    const numUpdates = Math.floor(Math.random() * 6) + 10;
    const shuffled = [...this.allTokenIds].sort(() => Math.random() - 0.5);
    const tokensToUpdate = shuffled.slice(0, numUpdates);

    tokensToUpdate.forEach(tokenId => {
      const changePercent = (Math.random() * 20 - 10).toFixed(2);
      const isIncrease = parseFloat(changePercent) > 0;
      
      const update: PriceUpdate = {
        id: tokenId,
        marketCap: this.generatePrice(3000, 50000),
        volume: this.generatePrice(0, 10000),
        floor: (Math.random() * 0.1 + 0.01).toFixed(3),
        change: isIncrease ? 'increase' : 'decrease',
        timestamp: Date.now(),
      };

      this.listeners.forEach(listener => listener(update));
    });
  }

  private generatePrice(min: number, max: number): string {
    const value = Math.random() * (max - min) + min;
    if (value < 1000) return `$${value.toFixed(0)}`;
    return `$${(value / 1000).toFixed(2)}K`;
  }
}

export const websocketMock = new WebSocketMock();
