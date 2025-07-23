

export const initializeTimes = () => {
  const today = new Date();
  try {
    return window.fetchAPI(today);
  } catch (error) {
    console.error("Error fetching initial times:", error);
    return [];
  }
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'date_change': {
      const date = action.date;
      console.log("🚀 Llamando a fetchAPI con:", date);
      const times = window.fetchAPI(date);
      return times;
    }

    default:
      return state;
  }
};