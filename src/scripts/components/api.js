/* eslint-disable comma-dangle, quote-props, quotes */
class APIManager {
 mainUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

 gameid = 'BTJlNTAM3dWwTuQzTuh0' // Game with ID: BTJlNTAM3dWwTuQzTuh0 added.

 gameUrl = `${this.mainUrl}games/${this.gameid}`

 data = { "name": "disocu" };

 createGame = async () => {
   const response = await fetch(`${this.mainUrl}games/`, {
     method: 'POST',
     body: JSON.stringify(this.data),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
   });
   return this.getAPIsResponse(response);
 };

 addUser = async (user) => {
   const response = await fetch(`${this.gameUrl}/scores/`, {
     method: 'POST',
     body: JSON.stringify(user),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
   });
   return this.getAPIsResponse(response);
 }

 getUsers = async () => {
   const response = await fetch(`${this.gameUrl}/scores/`);
   return this.getAPIsResponse(response);
 }

  getAPIsResponse = async (response) => {
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.result;
    }
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
}

export { APIManager as default };