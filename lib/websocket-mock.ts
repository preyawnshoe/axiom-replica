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
  private allTokenIds: string[] = [];

  constructor() {
    // Generate all token IDs matching the mockData structure
    // SOL tokens (30 each for 3 columns = 90 tokens)
    for (let i = 0; i < 30; i++) {
      this.allTokenIds.push(`NP${i}...`); // New Pairs
    }
    for (let i = 0; i < 30; i++) {
      this.allTokenIds.push(`FS${i}...`); // Final Stretch
    }
    for (let i = 0; i < 30; i++) {
      this.allTokenIds.push(`MG${i}...`); // Migrated
    }
    // BNB tokens (30 each for 3 columns = 90 tokens)
    for (let i = 0; i < 30; i++) {
      this.allTokenIds.push(`BNP${i}...`); // BNB New Pairs
    }
    for (let i = 0; i < 30; i++) {
      this.allTokenIds.push(`BFS${i}...`); // BNB Final Stretch
    }
    for (let i = 0; i < 30; i++) {
      this.allTokenIds.push(`BMG${i}...`); // BNB Migrated
    }
    
    // Add original sample token IDs for backwards compatibility
    this.allTokenIds.push(
      '6GZx...TS3V', '2WBR...NH8Y', '8c1c...pump', '2sDz...pump', '9kGe...bonk',
      'TSO...pump', '9aXv...7nNm', '5ZKQ...BA4r', 'HF6P...NSTU', 'ESPP...79Uf',
      '43vY...pump', 'Goog...leAI', 'WoB5...FdZL', 'GCED...Me4T', '7mQV...oM3H',
      'FXtM...A2vW', 'BgDR...iyrw', 'Zama...5678',
      '0x12...abcd', '0x34...efgh', '0x56...ijkl', '0x78...mnop', '0x9a...qrst', '0xbc...uvwx',
      '0xde...yz01', '0xf0...1234', '0x78...abcd', '0xde...yz12', '0xf0...3456', '0x12...5678',
      '0x34...9abc', '0x56...def0'
    );
  }

  connect() {
    if (this.isConnected) return;
    
    this.isConnected = true;
    
    // Simulate price updates every 1142ms-2142ms (50% slower than original 571ms-1071ms)
    this.intervalId = setInterval(() => {
      this.broadcastMultipleUpdates();
    }, Math.random() * 1000 + 1142);
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
    // Update 7-11 random tokens per broadcast
    const numUpdates = Math.floor(Math.random() * 4) + 7;
    const shuffled = [...this.allTokenIds].sort(() => Math.random() - 0.5);
    const tokensToUpdate = shuffled.slice(0, numUpdates);

    tokensToUpdate.forEach(tokenId => {
      const changePercent = (Math.random() * 14 - 7).toFixed(2);
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
