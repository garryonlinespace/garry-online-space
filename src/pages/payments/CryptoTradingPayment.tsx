
import PaymentPage from "@/components/PaymentPage";

const CryptoTradingPayment = () => {
  return (
    <PaymentPage 
      courseName="Cryptocurrency Trading Course" 
      amount={300000} 
      redirectPath="/crypto-trading-confirmation" 
    />
  );
};

export default CryptoTradingPayment;
