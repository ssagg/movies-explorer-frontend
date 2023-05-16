// export const BASE_URL = "http://localhost:3001";
export const BASE_URL =
  "http://api.diplom.ssagg.nomoredomains.work" ||
  "https://api.diplom.ssagg.nomoredomains.work";
const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
};
let auth = { "Content-Type": "application/json" };

export const setHeaders = (token) => {
  auth = { ...auth, Authorization: `Bearer ${token}` };
};

export const signup = (name, password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password, email }),
  }).then(getResponse);
};

export const signin = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password, email }),
  }).then(getResponse);
};

export const userValidation = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(getResponse);
};

export const updateUserInfo = ({ name, email }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: auth,
    body: JSON.stringify({ name: name, email: email }),
  }).then(getResponse);
};

export const saveMovie = (
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  nameRU,
  nameEN,
  thumbnail,
  movieId
) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: auth,
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      thumbnail,
      movieId,
    }),
  }).then(getResponse);
};

export const deleteLike = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: auth,
  }).then(getResponse);
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getResponse);
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: auth,
  }).then(getResponse);
};
