import { Helmet } from "react-helmet-async";

const HelmetChanger = ({ title }) => {
  return (
    <Helmet>
      <title>Urjassvi - {title}</title>
    </Helmet>
  );
};

export default HelmetChanger;
