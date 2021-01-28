import React from 'react';
import Header from './components/Header.js';

function App() {
  return (
    
<div className="body">
  <Header />
            <main className="content">
                <section class="profile">
                        <div className="profile__avatar">
                            <img className="profile__image" src="images/cousteau.png" alt="Jacques Cousteau Avatar" />
                            <button className="profile__image-edit" type="button" aria-label="Edit Avatar"></button>
                        </div>
                    <div class="profile__info">
                        <h1 class="profile__info-title">Jacques Cousteau</h1>
                        <button class="profile__edit-button" aria-label="Edit"></button>
                        <p class="profile__info-subtitle">Explorer</p>   
                    </div>
                    <button class="profile__add-button" aria-label="Add"></button>
                </section>
                <section class="elements"></section>
            </main>
            <footer class="footer">
                <p class="footer__info">© 2020 Around The U.S.</p>
            </footer>

            <div class = "popup popup_type_avatar">
                <div class="popup__container">
                    <form action="#" class="popup__form avatar-form" novalidate>
                      <h2 class="popup__title">Change Profile Picture</h2>                        
                        <input id = "avatar-URL" type='url' name='avatarURL' class="popup__input popup__input_type_avatar-URL" minlength="2" />
                        <span id="avatar-URL-error" class = "popup__error"></span>

                        <button class="popup__save" type="submit" aria-label="Save">Save</button>
                        <button class="popup__close-button" type="reset" aria-label="Close Form"></button>
                    </form>
                </div>
            </div>

            <div class="popup popup_type_edit">
                <div class="popup__container">
                    <form action="#" class="popup__form edit-form" novalidate>
                      <h2 class="popup__title">Edit profile</h2>
                        
                        <input id = "profile-name" type='text' name='name' class="popup__input popup__input_type_name" placeholder='Jacques Cousteau' required maxlength="40" minlength="2"/>
                        <span id="profile-name-error" class = "popup__error"></span>

                        <input id = "profile-text" type='text' name='job' class='popup__input popup__input_type_job' placeholder='Explorer' required maxlength="200" minlength="2"/>
                        <span id="profile-text-error" class = "popup__error"></span>

                        <button class="popup__save" type="submit" aria-label="Save">Save</button>
                        <button class="popup__close-button" type="reset" aria-label="Close Form"></button>
                    </form>
                </div>
            </div>
                <div class="popup popup_type_add-card">
                    <div class="popup__container">
                      <form action="#" class="popup__form add-form" novalidate>
                        <h2 class="popup__title">New Place</h2>
                            <input id="card-title" type='text' name='card-title' class="popup__input popup__input_type_title" placeholder='Title' required maxlength="30" minlength="2"/>
                            <span id="card-title-error" class = "popup__error"></span>

                            <input id="card-url" type='url' name='card-link' class='popup__input popup__input_type_link' placeholder='Image Link' required/>
                            <span id="card-url-error" class = "popup__error"></span>
                            
                            <button class="popup__save" type="submit" aria-label="Create">Create</button>
                            <button class="popup__close-button" type="reset" aria-label="Close Form"></button>
                        </form>
                    </div>
                </div>

                <div class="popup popup_type_delete-card">
                    <div class="popup__container">
                      <form action="#" class="popup__form delete-form" novalidate>
                        <h2 class="popup__title">Are you sure?</h2>
                            <button class="popup__save" type="submit" aria-label="Create">Yes</button>
                            <button class="popup__close-button" type="reset" aria-label="Close Form"></button>
                        </form>
                    </div>
                </div>

                <div class="popup popup_type_image">
                    <div class="popup_container_type_image">
                        <img alt="Popup Image Picture" class="popup__image" />
                        <h3 class= "popup__caption"></h3>
                        <button class="popup__close-button" type="reset" aria-label="Close Form"></button>
                    </div>
                </div>
                
            <template class = "card__template">
                <figure class="elements__element">
                    <img class="elements__element-pic" alt="card image" />
                    <figcaption class="elements__caption"></figcaption>
                    <div class = "elements__favorite-container">
                        <button class="elements__favorite" type="button" aria-label="Like"></button>
                        <p class="elements__likes">0</p>
                    </div>
                    <button class="elements__trash" type="button" aria-label="Delete"></button>
                </figure>
            </template>
    </div>
  );
  }
export default App;
