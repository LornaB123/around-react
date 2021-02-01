class Api { 
    constructor({baseUrl, headers}) { 
        //constructor body 
        this._baseUrl = baseUrl; 
        this._headers = headers; 
    } 
 
    // GET specified URL-cards 
    getInitialCards() { 
        return fetch(this._baseUrl + '/cards/', { 
            headers:  this._headers 
        }) 
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText)) 
        .catch(err => console.log(err)) 
    } 
 
    //GET specified URL -user-info 
    getUserInfo() { 
        return fetch(this._baseUrl + '/users/me/', { 
            headers: this._headers 
        }) 
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText)) 
        .catch(err => console.log(err)) 
    } 
 
      getAppInfo(){ 
          //gather all info together and render all at once 
          return Promise.all([this.getUserInfo(), this.getInitialCards()]) 
      } 
 
    //POST speicifed url -cards 
    addCard({ name, link }) { 
        return fetch(this._baseUrl + '/cards/', { 
            headers:  this._headers, 
            method: "POST", 
            body: JSON.stringify({ 
                name, 
                link 
            }) 
        }) 
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText)) 
        .catch(err => console.log(err)) 
    } 
 
    // //DELETE specified url =cardID 
    removeCard(cardID) { 
         return fetch(this._baseUrl + '/cards/' + cardID, { 
             headers:  this._headers, 
             method: "DELETE", 
             }) 
         .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText)) 
         //.then(res => res.remove(cardID)) 
         .catch(err => console.log(err)) 
     } 
 
    //PUT specified url cardID 
    //DELETE specified url cardID 
    addLike(cardID) { 
        return fetch(this._baseUrl + '/cards/likes/' + cardID, { 
            headers:  this._headers, 
            method: "PUT", 
            }) 
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText)) 
        //.then(res => res.remove(cardID)) 
        .catch(err => console.log(err)) 
    } 
 
    removeLike(cardID){ 
        return fetch(this._baseUrl + '/cards/likes/' + cardID, { 
            headers:  this._headers, 
            method: "DELETE", 
            }) 
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText)) 
        //.then(res => res.remove(cardID)) 
        .catch(err => console.log(err)) 
    } 
 
    //PATCH user-info 
    setUserInfo({ name, about }) { 
        return fetch(this._baseUrl + '/users/me/', { 
            method: "PATCH", 
            headers: {  
            authorization: "a950b923-6d6c-4927-9948-6833c1950cc9", 
            "Content-Type": "application/json" 
            }, 
            body: JSON.stringify({ 
                name, 
                about 
        }) 
    }) 
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText)) 
        .catch(err => console.log(err)) 
} 
 
    //PATCH avatar 
    setUserAvatar(avatar) { 
        return fetch(this._baseUrl + '/users/me/avatar/', { 
            headers: this._headers, 
            method: "PATCH", 
            body: JSON.stringify({ 
                avatar 
            }) 
        }) 
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText)) 
        .catch(err => console.log(err)) 
    } 
} 
//connect api 
// project server URL = https://around.nomoreparties.co/v1/ + ADD Group ID here(group-7)...,  
//authorization = TOKEN( a950b923-6d6c-4927-9948-6833c1950cc9 ) 
const api = new Api({ 
    baseUrl: "https://around.nomoreparties.co/v1/group-7", 
    headers: { 
        authorization: "a950b923-6d6c-4927-9948-6833c1950cc9", 
        "Content-Type": "application/json" 
    } 
}); 

export default api;