import React, { useEffect, useRef, useState } from 'react'

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();
  const categoryUrl = "https://webshopper1024-default-rtdb.europe-west1.firebasedatabase.app/categories.json"

  useEffect(() => {
    fetch(categoryUrl)
      .then(res => res.json())
      .then(json  => setCategories(json || [ ]) ) //
  }, []);
  const erase = (index) => {
    categories.splice(index, 1);
    setCategories(categories.slice());
    fetch(categoryUrl, {method:"PUT", body: JSON.stringify(categories)});
  }
    const addCategories = () => {
      categories.push(categoryRef.current.value);
      setCategories(categories.slice())
      fetch(categoryUrl, {method:"PUT", body: JSON.stringify(categories)});
  }
  return (
    <div>
      <label> New category</label>
      <input ref={categoryRef} type="text" />
      <button onClick={addCategories}>Add category</button>
      
      {categories.map((category, index) => <div key={category}>
         {category}
        
         <button onClick={() => erase(index)}>x</button>

        
         </div>
       )}
    </div>
  )
}

export default MaintainCategories