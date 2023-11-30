
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

const Forbidden = () => {
  const navigate  = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary" onClick={handleBackHome}>Back Home</Button>}
    />
  );
};

export default Forbidden;