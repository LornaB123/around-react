import React from 'react';

function Main() {
    return(
            <main className="content">
                <section className="profile">
                        <div className="profile__avatar">
                            <img className="profile__image" src="../../images/cousteau.png" alt="Jacques Cousteau Avatar" />
                            <button className="profile__image-edit" type="button" aria-label="Edit Avatar"></button>
                        </div>
                    <div className="profile__info">
                        <h1 className="profile__info-title">Jacques Cousteau</h1>
                        <button className="profile__edit-button" aria-label="Edit"></button>
                        <p className="profile__info-subtitle">Explorer</p>   
                    </div>
                    <button className="profile__add-button" aria-label="Add"></button>
                </section>
                <section className="elements"></section>
            </main>
    );
}

export default Main;
