// import { TimelineMax as Timeline, Power1 } from 'gsap';
import gsap from 'gsap';

const getDefaultTimeline = (node, delay) => {
    // const timeline = new Timeline({ paused: true });
    const timeline = gsap.timeline({ paused: true });
    const content = node.querySelector('.content');
    const contentInner = node.querySelector('.content--inner');

    timeline
        .from(node, 0.1, {
            display: 'none',
            autoAlpha: 0,
            delay,
            ease: 'power1.in',
        })
        .from(content, 0.5, { autoAlpha: 0, y: 25, ease: 'power1.inOut' })
        .from(contentInner, 0.3, {
            autoAlpha: 0,
            delay: 0.2,
            ease: 'power1.in',
        });

    return timeline;
};

export const play = (pathname, node, appears) => {
    const delay = 0;
    let timeline = getDefaultTimeline(node, delay);
    window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const exit = (node) => {
    const timeline = gsap.timeline({ paused: true });

    timeline.to(node, 0.15, { autoAlpha: 0, ease: 'power1.out' });
    timeline.play();
};
