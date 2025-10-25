const MarqueeTicker = () => {
  const currencyPairs = [
    { pair: "EUR/USD", rate: "1.0859", change: "+0.0022", isPositive: true },
    { pair: "GBP/USD", rate: "1.2643", change: "+0.0010", isPositive: true },
    { pair: "USD/JPY", rate: "149.8706", change: "+0.0010", isPositive: true },
    { pair: "AUD/USD", rate: "0.6487", change: "+0.0022", isPositive: true },
    { pair: "USD/CAD", rate: "1.3557", change: "+0.0014", isPositive: true },
    { pair: "NZD/USD", rate: "0.6004", change: "+0.0023", isPositive: true },
  ];

  // Duplicate the array for seamless loop
  const duplicatedPairs = [...currencyPairs, ...currencyPairs];

  return (
    <div className="bg-[#1a1a1a] text-white py-2 overflow-hidden border-b border-gray-800">
      <div className="relative flex">
        <div className="animate-marquee flex gap-8 whitespace-nowrap">
          {duplicatedPairs.map((item, index) => (
            <div key={index} className="flex items-center gap-2 px-4">
              <span className="font-semibold text-sm">{item.pair}</span>
              <span className="text-sm">{item.rate}</span>
              <span 
                className={`text-xs font-medium ${
                  item.isPositive ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {item.change}
              </span>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex gap-8 whitespace-nowrap" aria-hidden="true">
          {duplicatedPairs.map((item, index) => (
            <div key={index} className="flex items-center gap-2 px-4">
              <span className="font-semibold text-sm">{item.pair}</span>
              <span className="text-sm">{item.rate}</span>
              <span 
                className={`text-xs font-medium ${
                  item.isPositive ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeTicker;
