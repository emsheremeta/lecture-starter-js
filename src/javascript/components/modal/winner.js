/* eslint-disable import/prefer-default-export */
import showModal from './modal';

export default function showWinnerModal(fighter) {
    // call showModal function
    showModal({ title: 'The winner is', bodyElement: fighter.name });
}
