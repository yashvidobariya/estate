export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0,
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        },

        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.7,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.25],
            }
        },

        initial: { x: '-100vw' }, // Initial position, off-screen to the left
        animate: { x: 0 }, // Animate to original position
        whileInView: "show", // Show when in view
        viewport: { once: false, amount: 0.5 },
        transition: { duration: 2 }
    };
}
