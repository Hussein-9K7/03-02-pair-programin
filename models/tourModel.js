let tourArray = [];
let nextId = 1;

const getAll = () => {
  return tourArray;
};

const addOne = (name, info, image, price) => {
  if (!name || !info || !image || !price) {
    return false;
  }
  const newTour = {
    id: nextId++,
    name: name,
    info: info,
    image: image,
    price: price
  };
  tourArray.push(newTour);
  return newTour;
};

const findById = (id) => {
  const tour = tourArray.find((tour) => tour.id === Number(id));
  if (tour) {
    return tour;
  } else {
    return false;
  }
};

const updateOneById = (id, updatedData) => {
  const tour = findById(id);
  if (tour) {
    if (updatedData.name) {
      tour.name = updatedData.name;
    }
    if (updatedData.info) {
      tour.info = updatedData.info;
    }
    if (updatedData.image) {
      tour.image = updatedData.image;
    }
    if (updatedData.price) {
      tour.price = updatedData.price;
    }
    return tour;
  }
  return false;
};

const deleteOneById = (id) => {
  const tour = findById(id);
  if (tour) {
    const initialLength = tourArray.length;
    tourArray = tourArray.filter((tour) => tour.id !== Number(id));
    return tourArray.length < initialLength;
  } else {
    return false;
  }
};

if (require.main === module) {
  let result = addOne("Paris Tour", "A beautiful tour in Paris.", "paris.jpg", 500);
  console.log(result);
  result = addOne("Rome Tour", "Explore the historical sites of Rome.", "rome.jpg", 400);
  console.log(result);
  console.log(`getAll called: ${JSON.stringify(getAll(), null, 2)}`);
  console.log(`findById called: ${JSON.stringify(findById(1), null, 2)}`);
  console.log(
    `updateById called: ${JSON.stringify(updateOneById(1, {
      name: "Paris Grand Tour",
      price: 550
    }), null, 2)}`
  );
  console.log(`findById called after item updated: ${JSON.stringify(findById(1), null, 2)}`);
  console.log(`deleteById called: ${deleteOneById(2)}`);
  console.log(`findById called after item deleted: ${JSON.stringify(findById(2), null, 2)}`);
}

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById
};
