const stubImages = [
  {
    id: 0,
    link:
      '',
    description: 'Test image in the grid',
  },
  {
    id: 1,
    link:
      'https://i.ibb.co/GxZZqWz/salle2.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 2,
    link:
      'https://i.ibb.co/PQb16pt/salle4.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 3,
    link:
      'https://i.ibb.co/87bRmTF/salle3.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 4,
    link:
      '',
    description: 'Test image in the grid',
  },
  {
    id: 5,
    link:
      'https://i.ibb.co/jr0kp3x/saal1.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 6,
    link:
      'https://i.ibb.co/ZhrFxdH/salle7.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 7,
    link:
      'https://i.ibb.co/jr0kp3x/saal1.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 8,
    link:
      'https://i.ibb.co/Xyx4XYZ/Libre.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 9,
    link:
      'https://i.ibb.co/SxxNX8f/saale1.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 10,
    link:
      'https://i.ibb.co/Xyx4XYZ/Libre.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 11,
    link:
      'https://i.ibb.co/GxZZqWz/salle2.jpg',
    description: 'Test image in the grid',
  },
];

// Initial state
const initialState = {
  isLoading: false,
  images: [],
};

// Actions
const START_IMAGES_LOADING = 'GalleryState/START_LOADING';
const IMAGES_LOADED = 'GalleryState/IMAGES_LOADED';
const CLEAR_IMAGES = 'GalleryState/CLEAR_IMAGES';

// Action creators
function startImagesLoading() {
  return { type: START_IMAGES_LOADING };
}

function imagesLoaded(images) {
  return {
    type: IMAGES_LOADED,
    images,
  };
}

function clearImages() {
  return { type: CLEAR_IMAGES };
}

export function loadImages() {
  return dispatch => {
    dispatch(startImagesLoading());
    // Connect to the API here
    dispatch(imagesLoaded(stubImages));
  };
}

export function refreshImages() {
  return dispatch => {
    dispatch(startImagesLoading());
    dispatch(clearImages());
    dispatch(imagesLoaded(stubImages));
  };
}

// Reducer
export default function GalleryStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case START_IMAGES_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case IMAGES_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        images: action.images,
      });
    case CLEAR_IMAGES:
      return Object.assign({}, state, {
        images: [],
      });
    default:
      return state;
  }
}
