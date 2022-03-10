<script context="module" lang="ts">
  export type MoveResizeParams = {
    newX?: number;
    newY?: number;
    newScale?: number;
    withTransition?: boolean;
  };
  export type MoveResize = (p: MoveResizeParams) => void;
</script>

<script lang="ts">
  import { onMount } from "svelte";

  /** Initial scale
   *
   * Expressed as multiple of container -> 1 = no scaling
   * Changing this after init has no effect, use `moveResize()`
   */
  export let initialScale = 1;
  /** Width fraction to center on
   *
   * Changing this after init has no effect, use `moveResize()`
   */
  export let initialX = 0.5;
  /** Height fraction to center on
   *
   * Changing this after init has no effect, use `moveResize()`
   */
  export let initialY = 0.5;
  /** Duration of transitions on movement and zoom (seconds) */
  export let transitionDuration = 0.2;
  export let maxScale = 10;
  export let minScale = 0.3;

  let transition = true;
  let outerDiv: HTMLDivElement;
  let innerDiv: HTMLDivElement;
  let scale = initialScale;
  let x = initialX;
  let y = initialY;
  let moving = false;
  let moveStart: undefined | { x: number; ex: number; y: number; ey: number };
  let innerWidth: number;
  let innerHeight: number;

  /** Move and rescale to given parameters. `undefined` values remain unchanged
   *
   * Transition will happen by default, unless you specify `{ ...params, withTransition: true }`
   */
  export function moveResize({ newX, newY, newScale, withTransition }: MoveResizeParams) {
    if (newScale !== undefined) scale = clipScale(newScale);
    if (newX !== undefined) x = newX;
    if (newY !== undefined) y = newY;

    if (!withTransition) {
      transition = false;
      setTimeout(() => (transition = true));
    }
  }

  function clipScale(scale: number) {
    return Math.min(Math.max(scale, minScale), maxScale);
  }

  function zoom(newScale: number, centerX: number, centerY: number) {
    if (moving) return;
    const divRect = outerDiv.getBoundingClientRect();
    newScale = clipScale(newScale);

    // The following formula, but simplified
    // const widthChange = innerWidth * (newScale - scale);
    // const centerInClientCoords = divRect.left + innerWidth / 2 + innerWidth * (0.5 - x) * scale;
    // const distFromCenter = centerX - centerInClientCoords;
    // const widthFrac = distFromCenter / (innerWidth * scale);
    // const newDistFromCenter = widthFrac * (innerWidth * newScale);
    // const shift = distFromCenter - newDistFromCenter;
    // const newCenterInClientCoords = centerX - newDistFromCenter;
    // const newX =
    //   (-2 * newCenterInClientCoords + 2 * divRect.left + innerWidth * (newScale + 1)) /
    //   (2 * newScale * innerWidth); // solve centerInClientCoords for x, replace scale with newScale
    x -=
      ((0.5 * innerWidth - centerX + divRect.left) * (newScale - scale)) /
      (innerWidth * newScale * scale);
    y -=
      ((0.5 * innerHeight - centerY + divRect.top) * (newScale - scale)) /
      (innerHeight * newScale * scale);
    scale = newScale;
  }
  onMount(() => {
    moveResize({ newX: initialX, newY: initialY, newScale: initialScale, withTransition: false });
    const rect = outerDiv.getBoundingClientRect();
    innerHeight = rect.height;
    innerWidth = rect.width;
  });
</script>

<svelte:window
  on:mouseup={() => (moving = false)}
  on:mousemove={(e) => {
    if (!moving || moveStart === undefined) return;
    if (e.shiftKey || e.ctrlKey || e.altKey) return;

    x = moveStart.x + (moveStart.ex - e.clientX) / (innerWidth * scale);
    y = moveStart.y + (moveStart.ey - e.clientY) / (innerHeight * scale);
  }}
/>
<div
  class="outer"
  bind:this={outerDiv}
  on:wheel={(e) => {
    if (e.shiftKey || e.ctrlKey || e.altKey) return;
    zoom(scale * (1 - e.deltaY * 0.001), e.clientX, e.clientY);
    e.preventDefault();
  }}
  on:mousedown={(e) => {
    if (e.shiftKey || e.ctrlKey || e.altKey) return;
    if (e.buttons !== 1) return;
    if (
      // @ts-expect-error Can't include typescript here to explain to compiler
      e.target.matches("a, a *, button, button *")
    )
      return;
    e.preventDefault();
    moving = true;
    moveStart = { x, ex: e.clientX, y, ey: e.clientY };
  }}
>
  <div
    bind:this={innerDiv}
    style:width={innerWidth === undefined ? "100%" : `${innerWidth}px`}
    style:height={innerHeight === undefined ? "100%" : `${innerHeight}px`}
    class="inner"
    style:transform="translate({innerWidth * (0.5 - x) * scale}px, {innerHeight *
      (0.5 - y) * scale}px) scale({scale})"
    style:transition-duration="{transition ? transitionDuration : 0}s"
  >
    <slot />
  </div>
</div>

<style>
  div.outer {
    overflow: clip;
  }
  div.inner {
    transform-origin: center;
    transition: transform ease-out;
    position: relative;
  }
  div.outer,
  div.inner {
    width: 100%;
    height: 100%;
  }
</style>
