class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
    this._headers = { "Content-Type": "application/json" };
    this._token = "";
  }

  _getResponse = (res) => {
    return res.ok ? res.json() : Promise.reject("Error happened");
  };

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._getResponse);
  }

  sendUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name: name, about: about }),
    }).then(this._getResponse);
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    }).then(this._getResponse);
  }

  setLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._getResponse);
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._getResponse);
  }

  setHeaders(token) {
    this._headers = { ...this._headers, Authorization: `Bearer ${token}` };
  }
}

export const api = new Api({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});
