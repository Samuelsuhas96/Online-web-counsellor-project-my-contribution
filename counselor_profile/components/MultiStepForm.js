import React,{ useState } from "react";
import { useForm, useStep} from "react-hooks-helper";
import { Names } from "./stepForm/Names";
import { Address } from "./stepForm/Address";
import { Contact } from "./stepForm/Contact";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";

const defaultData = {
  
  Name: "",
  About: "",
  Skills: "",
  languages: "",
  city: "",
  state: "",
  Pin: "",
  phone: "",
  email: "",
};

const steps = [
  { id: "names" },
  { id: "address" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const [state,setState]=useState([])


  const props = { formData, setForm, navigation,listed };

  const [list,setlist] = useState([]);
  
  function listed(new_value)
  {
    setlist(...list,new_value)
    console.log(list)
    // console.log(n)
    // console.log(newname_value)

  }

  switch (step.id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};

export default MultiStepForm;