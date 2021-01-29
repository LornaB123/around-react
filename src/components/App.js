import React from 'react';
import Header from './Header.js';
import Main from './Main.js';

function App() {
  return (
    
<div className="body">
  <Header />
  <Main />
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
                
         
    </div>
  );
  }
export default App;