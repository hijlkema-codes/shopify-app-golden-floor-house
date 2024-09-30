export const onBreakpointChange = (breakpoint, handler) => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
    mediaQuery.addEventListener("change", handler);
    handler(mediaQuery);
}
