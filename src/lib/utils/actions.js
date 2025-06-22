// This action is used to detect whether a click is made outside a specific dom node
// particularly useful for dropdowns, modals, or any component that should close when clicking outside of it.
// usage: <div use:clickOutside on:outsideclick={handleOutsideClick}>...</div>
export function clickOutside(node) {
    setTimeout(() => {
        window.addEventListener('click', handleClick);
    }, 100);

    function handleClick(e) {
        if (!node.contains(e.target)) {
            node.dispatchEvent(new CustomEvent('outsideclick'))
        }
    }

    return {
        destroy() {
            window.removeEventListener('click', handleClick)
        }
    };
}

// helper action for sliding in the navbar drawer
// after the drawer div is created (when the if block around it is true) a class is added to it
// to trigger the slide-in animation.
export function slideInDrawer(node) {
    node.classList.add('animate-in');

    return {
        destroy() {
            node.classList.remove('animate-in');
        }
    };
}