class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponse = (res) => {
    return res.ok ? res.json() : Promise.reject("Error happened");
  };

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: { "Content-Type": "application/json" },
    }).then(this._getResponse);
  }
}

export const api = new Api({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});
