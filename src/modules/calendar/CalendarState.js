
import axios from 'axios'
var urlcnst = require('../../const/bookapi')() + 'sib-api/booking/bookings/by-date/between-dates?startDate=2020-03-23T09:07:00.422Z&endDate=2050-12-29T08:16:14.132Z'
const ITEMS_LOADED = 'CalendarState/ITEMS_LOADED';

function itemsLoaded(items) {
//  //console.log(items)
  return {
    type: ITEMS_LOADED,
    items,
  };
}

const names = ['Max', 'Philip', 'Alex', 'Irina', 'Vovan'];
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const labels = ['Urgent', 'Interview'];

export function loadItems(day) {
  // Do items loading here
  return (dispatch, getState) => {
    if (getState().calendar.items.length > 0) return;

    const items = {};

axios.get(urlcnst)
.then((response) =>{
console.log(response.data)


  response.data.forEach(element => {
  //console.log(new Date(Object.keys(element)[0]).toISOString().split('T')[0])
items[new Date(Object.keys(element)[0]).toISOString().split('T')[0]] = [{name: "rafik" ,time:"hello",labels:[]}]

});

})




   /*  for (let i = -15; i < 85; i += 1) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = new Date(time).toISOString().split('T')[0];
      if (!items[strTime]) {
        items[strTime] = [];
        const numItems = randomNumber(0, 5);
        for (let j = 0; j < numItems; j += 1) {
          items[strTime].push({
            name: `newItems with ${names[randomNumber(0, 4)]}`,
            time: `${randomNumber(0, 24)}:${randomNumber(0, 60)}`,
            labels: randomNumber(0, 1) ? [labels[randomNumber(0, 1)]] : [],
          });
        }
      }
    } */

    const newItems = {};
    Object.keys(items).forEach(key => {
      newItems[key] = items[key];
    });

   // //console.log(newItems);

    dispatch(itemsLoaded(newItems));
  };
}

const defaultState = {
  items: [],
  isLoading: false,
};

export default function CalendarStateReducer(state = defaultState, action) {
  switch (action.type) { 
    case ITEMS_LOADED:
      return Object.assign({}, state, {
        isLoading: true,
        items: action.items,
      });
    default:
      return state;
  }
}
