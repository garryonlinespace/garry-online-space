import { useEffect, useState, useRef } from "react";

// ⚠️ ADD YOUR FINNHUB API KEY HERE ⚠️
const FINNHUB_API_KEY = "d3ugcl9r01qil4apur8gd3ugcl9r01qil4apur90";

interface ForexPrice {
  pair: string;
  symbol: string;
  rate: number;
  change: number;
  changePercent: number;
  previousRate: number;
  isPositive: boolean;
  isUpdating: boolean;
}

const MarqueeTicker = () => {
  const [prices, setPrices] = useState<ForexPrice[]>([
    { pair: "EUR/USD", symbol: "OANDA:EUR_USD", rate: 0, change: 0, changePercent: 0, previousRate: 0, isPositive: true, isUpdating: false },
    { pair: "GBP/USD", symbol: "OANDA:GBP_USD", rate: 0, change: 0, changePercent: 0, previousRate: 0, isPositive: true, isUpdating: false },
    { pair: "USD/JPY", symbol: "OANDA:USD_JPY", rate: 0, change: 0, changePercent: 0, previousRate: 0, isPositive: true, isUpdating: false },
    { pair: "AUD/USD", symbol: "OANDA:AUD_USD", rate: 0, change: 0, changePercent: 0, previousRate: 0, isPositive: true, isUpdating: false },
    { pair: "GBP/JPY", symbol: "OANDA:GBP_JPY", rate: 0, change: 0, changePercent: 0, previousRate: 0, isPositive: true, isUpdating: false },
    { pair: "USD/CAD", symbol: "OANDA:USD_CAD", rate: 0, change: 0, changePercent: 0, previousRate: 0, isPositive: true, isUpdating: false },
    { pair: "NZD/USD", symbol: "OANDA:NZD_USD", rate: 0, change: 0, changePercent: 0, previousRate: 0, isPositive: true, isUpdating: false },
  ]);
  
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>();
  const reconnectAttemptsRef = useRef(0);
  const maxReconnectAttempts = 5;

  useEffect(() => {
    const connectWebSocket = () => {
      const ws = new WebSocket(`wss://ws.finnhub.io?token=${FINNHUB_API_KEY}`);
      wsRef.current = ws;

      ws.onopen = () => {
        console.log("✅ WebSocket connected to Finnhub");
        setIsConnected(true);
        reconnectAttemptsRef.current = 0;

        // Subscribe to all currency pairs
        prices.forEach(price => {
          ws.send(JSON.stringify({ type: "subscribe", symbol: price.symbol }));
        });
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        
        if (data.type === "trade" && data.data) {
          data.data.forEach((trade: { s: string; p: number }) => {
            setPrices(prevPrices => 
              prevPrices.map(price => {
                if (price.symbol === trade.s) {
                  const newRate = trade.p;
                  const change = newRate - (price.rate || newRate);
                  const changePercent = price.rate ? ((change / price.rate) * 100) : 0;
                  
                  return {
                    ...price,
                    previousRate: price.rate || newRate,
                    rate: newRate,
                    change,
                    changePercent,
                    isPositive: change >= 0,
                    isUpdating: true,
                  };
                }
                return price;
              })
            );

            // Reset updating state after animation
            setTimeout(() => {
              setPrices(prevPrices =>
                prevPrices.map(p => ({ ...p, isUpdating: false }))
              );
            }, 500);
          });
        }
      };

      ws.onerror = (error) => {
        console.error("❌ WebSocket error:", error);
        setIsConnected(false);
      };

      ws.onclose = () => {
        console.log("🔌 WebSocket disconnected");
        setIsConnected(false);

        // Attempt reconnection with exponential backoff
        if (reconnectAttemptsRef.current < maxReconnectAttempts) {
          const timeout = Math.min(1000 * Math.pow(2, reconnectAttemptsRef.current), 30000);
          console.log(`🔄 Reconnecting in ${timeout / 1000}s... (Attempt ${reconnectAttemptsRef.current + 1}/${maxReconnectAttempts})`);
          
          reconnectTimeoutRef.current = setTimeout(() => {
            reconnectAttemptsRef.current++;
            connectWebSocket();
          }, timeout);
        } else {
          console.error("❌ Max reconnection attempts reached");
        }
      };
    };

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        prices.forEach(price => {
          wsRef.current?.send(JSON.stringify({ type: "unsubscribe", symbol: price.symbol }));
        });
        wsRef.current.close();
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, []);

  // Duplicate prices for seamless loop
  const duplicatedPrices = [...prices, ...prices];

  return (
    <div className="bg-[#1a1a1a] text-white py-2 overflow-hidden border-b border-gray-800 relative fixed top-[72px] left-0 right-0 z-40">
      {/* Connection Status Indicator */}
      <div className="absolute top-1 right-2 z-10">
        <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} 
             title={isConnected ? 'Connected' : 'Disconnected'} />
      </div>

      <div className="relative flex hover:[&>div]:pause-animation">
        <div className="animate-marquee flex gap-8 whitespace-nowrap">
          {duplicatedPrices.map((item, index) => (
            <div 
              key={`${item.pair}-${index}`} 
              className={`flex items-center gap-2 px-4 transition-all duration-300 ${
                item.isUpdating ? 'scale-105' : 'scale-100'
              }`}
            >
              <span className="font-semibold text-sm">{item.pair}</span>
              <span className="text-sm tabular-nums">
                {item.rate > 0 ? item.rate.toFixed(4) : "-.----"}
              </span>
              {item.rate > 0 && (
                <>
                  <span className={`text-xs ${item.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {item.isPositive ? '▲' : '▼'}
                  </span>
                  <span 
                    className={`text-xs font-medium tabular-nums ${
                      item.isPositive ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="animate-marquee flex gap-8 whitespace-nowrap" aria-hidden="true">
          {duplicatedPrices.map((item, index) => (
            <div 
              key={`${item.pair}-duplicate-${index}`} 
              className={`flex items-center gap-2 px-4 transition-all duration-300 ${
                item.isUpdating ? 'scale-105' : 'scale-100'
              }`}
            >
              <span className="font-semibold text-sm">{item.pair}</span>
              <span className="text-sm tabular-nums">
                {item.rate > 0 ? item.rate.toFixed(4) : "-.----"}
              </span>
              {item.rate > 0 && (
                <>
                  <span className={`text-xs ${item.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {item.isPositive ? '▲' : '▼'}
                  </span>
                  <span 
                    className={`text-xs font-medium tabular-nums ${
                      item.isPositive ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeTicker;
