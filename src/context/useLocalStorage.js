import React from "react";

// HOOKS
function useLocalStorage(itemName, initialValue) {
  //Persistencia de datos ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  

  React.useEffect(() => {
    setTimeout( () => {
      try {

        let getData = localStorage.getItem(itemName);
        let parsedItem;
        if (!getData) {
          localStorage.setItem('TODOS_V1', JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(getData);
          setItem(parsedItem);
        }
  
        setLoading(false);
  
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



  // funcion para actualizar el estado y el localStorage de los todos
  const saveItem = (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item, 
    saveItem, 
    loading, 
    error
  };
}

export {
  useLocalStorage
};