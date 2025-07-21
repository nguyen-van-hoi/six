interface SmoothScrollOptions {
    lerp?: number;
    mouseScrollScale?: number;
    toucheScrollScale?: number;
    disableOnMobile?: boolean;
}
declare class SmoothScroll {
    private isEnabled;
    private targetScroll;
    private animatedScroll;
    private scrollTween;
    private hookSystem;
    private scrollHandle;
    private lastTime;
    private lerp;
    private rafId;
    constructor({ mouseScrollScale: wheelMultiplier, toucheScrollScale: touchMultiplier, lerp, disableOnMobile, }?: SmoothScrollOptions);
    private getActualScroll;
    private getMaxScroll;
    private setScroll;
    private onNativeScroll;
    private scrollTo;
    private loop;
    start(): void;
    stop(): void;
    raf(time: number): void;
    on(event: 'scroll', callback: (value: number) => void): () => void;
}

export { SmoothScroll };
