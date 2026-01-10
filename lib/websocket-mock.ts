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
    // Generate all token IDs matching the mockData structure exactly
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
    
    this.scheduleNextUpdate();
  }

  private scheduleNextUpdate() {
    // Slower updates: 3000ms-5000ms range for more gradual changes
    const delay = Math.random() * 2000 + 3000;
    setTimeout(() => {
      if (this.isConnected) {
        this.broadcastMultipleUpdates();
        this.scheduleNextUpdate();
      }
    }, delay);
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
    // Update ALL tokens for comprehensive real-time updates
    const tokensToUpdate = [...this.allTokenIds];

    tokensToUpdate.forEach(tokenId => {
      // Minimal price change range: -10% to +10% for gradual updates
      const changePercent = (Math.random() * 20 - 10).toFixed(2);
      const isIncrease = parseFloat(changePercent) > 0;
      
      const update: PriceUpdate = {
        id: tokenId,
        marketCap: this.generatePrice(2000, 80000),
        volume: this.generatePrice(0, 20000),
        floor: (Math.random() * 0.15 + 0.005).toFixed(3),
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
