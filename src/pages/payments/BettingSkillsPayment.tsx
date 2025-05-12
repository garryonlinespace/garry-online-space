
import PaymentPage from "@/components/PaymentPage";

const BettingSkillsPayment = () => {
  return (
    <PaymentPage 
      courseName="Betting Skills Course" 
      amount={50000} 
      redirectPath="/betting-skills-confirmation" 
    />
  );
};

export default BettingSkillsPayment;
