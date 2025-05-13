
import PaymentPage from "@/components/PaymentPage";

const CryptoTradingPayment = () => {
  return (
    <PaymentPage 
      courseName="Cryptocurrency Trading Course" 
      amount={100} 
      currency="USD" 
      redirectPath="/crypto-trading-confirmation" 
    />
  );
};

export default CryptoTradingPayment;
