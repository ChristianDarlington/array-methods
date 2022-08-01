const items = [ 
  {name: 'Bike', price: 100 },
  {name: 'Boat', price: 200} ,
  {name: 'Computer', price: 1000}, 
  {name: 'Book', price: 5},
  {name: 'keyboard', price:25},
  {name: 'Album', price: 10}
  ]
  
  const itemNames = items.map((item) =>{
  return item.price
  })
  
  console.log(itemNames)