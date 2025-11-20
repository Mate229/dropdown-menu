export function menulclick () {
    const ddButton = document.querySelector('#icons');
    const container = document.querySelector('#container');

    ddButton.addEventListener('click', () => {
        container.classList.toggle('show');
    })

    ddButton.addEventListener('mouseover', () => {
        if (document.querySelector('.show') !== null) return;
        container.classList.add('change');
    })

    ddButton.addEventListener('mouseout', () => {
        container.classList.remove('change');
    })
}