
import PaymentPage from "@/components/PaymentPage";

const BettingTipsPayment = () => {
  return (
    <PaymentPage 
      courseName="Betting Tips and Tickets" 
      amount={10} 
      currency="USD" 
      redirectPath="/betting-tips-confirmation" 
    />
  );
};

export default BettingTipsPayment;
