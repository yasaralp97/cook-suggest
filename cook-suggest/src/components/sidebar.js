import React, {useState,useEffect} from 'react';


const Sidebar = (props) => {


  
  const [isOpen, setIsOpen] = useState(false);
  const [includedIngredients, setIncludedIngredients] = useState([]);

  function includeIngredients (ingredient) {
    setIncludedIngredients([...includedIngredients,ingredient])
  }

  const returnIngredients = () => {
    props.returnIngredients(includedIngredients)
  }

  useEffect(() => {
    console.log(includedIngredients)
    returnIngredients()
  });


  return (
    <div className="sidebar">
      <div className="accordion">
        <div onClick={() => setIsOpen(!isOpen)} className="accordion-header btn btn-primary btn-block">
          <img className="accordion-image" src="https://s3.amazonaws.com/supercook-icons/Dairy.png" />
          <h2>Dairy</h2>
        </div>
        {isOpen && (
          <div className="accordion-body ingredients-button d-flex flex-wrap">
            <button onClick={(e)=>includeIngredients(e.target.value)} className="btn btn-secondary ingredients" value="apples">Apple</button>
            <button onClick={(e)=>includeIngredients(e.target.value)} className="btn btn-secondary ingredients" value="banana">Banana</button>
            <button className="btn btn-secondary ingredients">Watermelon</button>
            <button className="btn btn-secondary ingredients">Pineapple</button>
            <button className="btn btn-secondary ingredients">Strawberry</button>
            <button className="btn btn-secondary ingredients">Strawberry</button>
          </div>
          )}
      </div>
    </div>
  );
};

export default Sidebar;
