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

  function zoom(newScale: number, _centerX: number, _centerY: number) {
    if (moving) return;
    // const divRect = div.getBoundingClientRect();

    // The following formula, but simplified
    // const distFromCenter = centerX - (divRect.left + x);
    // const widthFrac = distFromLeft / (divRect.width * scale);
    // const newDistFromLeft = widthFrac * (divRect.width * newScale);
    // const xChange = distFromLeft - newDistFromLeft;
    newScale = clipScale(newScale);
    // const xChange = ((scale - newScale) * (centerX - divRect.left - x)) / scale;
    // const yChange = ((scale - newScale) * (centerY - divRect.top - y)) / scale;
    scale = newScale;
    // ({ x, y } = clipCoords({
    //   x: x + xChange,
    //   y: y + yChange,
    //   width: divRect.width,
    //   height: divRect.height,
    //   scale,
    // }));
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
    style:transform="scale({scale}) translate({innerWidth * (0.5 - x)}px, {innerHeight *
      (0.5 - y)}px)"
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
