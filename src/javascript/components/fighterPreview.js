import createElement from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';

    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });

    if (fighter) {
        const { name, health, attack, defense } = fighter;
        const nameElement = createElement({
            tagName: 'p',
            className: 'fighters___fighter'
        });
        nameElement.innerText = `NAME: ${name}`;

        const healthElement = createElement({
            tagName: 'p',
            className: 'fighters___fighter'
        });
        healthElement.innerText = `HEALTH: ${health}`;

        const attackElement = createElement({
            tagName: 'p',
            className: 'fighters___fighter'
        });
        attackElement.innerText = `ATTACK: ${attack}`;

        const defenseElement = createElement({
            tagName: 'p',
            className: 'fighters___fighter'
        });
        defenseElement.innerText = `DEFENSE: ${defense}`;

        fighterElement.append(nameElement, healthElement, attackElement, defenseElement);
    }

    // todo: show fighter info (image, name, health, etc.)

    return fighterElement;
}

export function createFighterImage(fighter) {
    const { source, name } = fighter;

    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}
