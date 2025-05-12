
import PaymentPage from "@/components/PaymentPage";

const BettingTipsPayment = () => {
  return (
    <PaymentPage 
      courseName="Betting Tips and Tickets" 
      amount={35000} 
      redirectPath="/betting-tips-confirmation" 
    />
  );
};

export default BettingTipsPayment;
