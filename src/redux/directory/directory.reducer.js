const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://images.pexels.com/photos/1078975/pexels-photo-1078975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.pexels.com/photos/2918534/pexels-photo-2918534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
