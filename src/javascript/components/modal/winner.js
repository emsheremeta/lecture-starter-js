/* eslint-disable import/prefer-default-export */
import showModal from './modal';

export function showWinnerModal(fighter) {
    // call showModal function
    showModal({ title: 'The winner is', bodyElement: fighter.name });
}
