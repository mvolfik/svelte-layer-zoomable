<script lang="ts">
  import { panel } from "svelte-knobby";
  import Zoomable, { type MoveResize } from "$lib/Zoomable.svelte";
  import Image from "/src/assets/svelte.png";

  let rerenderKey = 0;
  const controls = panel({
    $label: "svelte-layer-zoomable",
    initOpts: {
      $label: "Initialization options",
      initialScale: {
        value: 1,
        min: 0.1,
        max: 10,
        step: 0.1,
      },
      initialX: {
        value: 0.4,
        min: -1.5,
        max: 2.5,
        step: 0.1,
      },
      initialY: {
        value: 0.4,
        min: -1.5,
        max: 2.5,
        step: 0.1,
      },
      "Destroy & recreate to take effect": () => {
        rerenderKey += 1;
      },
    },
    otherOpts: {
      $label: "Other options",
      transitionDuration: {
        value: 0.2,
        min: 0,
        max: 2,
        step: 0.1,
      },
      minScale: {
        value: 0.3,
        min: 0.1,
        max: 1,
        step: 0.1,
      },
      maxScale: {
        value: 10,
        min: 2,
        max: 20,
        step: 0.5,
      },
    },
    moveResize: {
      $label: "`Zoomable.moveResize(args)`",
      newScale: {
        value: 1,
        min: 0.1,
        max: 10,
        step: 0.1,
      },
      newX: {
        value: 0.4,
        min: -1.5,
        max: 2.5,
        step: 0.1,
      },
      newY: {
        value: 0.4,
        min: -1.5,
        max: 2.5,
        step: 0.1,
      },
      withTransition: true,
      Execute: () => {
        moveResize($controls.moveResize);
      },
    },
  });
  let moveResize: MoveResize;
</script>

<svelte:head>
  <title>svelte-layer-zoomable</title>
</svelte:head>

<h1>svelte-layer-zoomable</h1>
<p>
  GitHub repository: <a href="https://github.com/mvolfik/svelte-layer-zoomable"
    >mvolfik/svelte-layer-zoomable</a
  >
</p>
<p>NPM: <a href="https://npmjs.com/package/svelte-layer-zoomable">svelte-layer-zoomable</a></p>
<p style:font-weight="bold">Note: do not confuse with <code>svelte-zoomable</code></p>
<h2>Usage:</h2>
<pre style="overflow: auto;"><code
    >&lt;script lang="ts"&gt;
  import Zoomable from "svelte-layer-zoomable";
  import type &lbrace; MoveResize &rbrace; from "svelte-layer-zoomable";

  let moveResize: MoveResize;
  let transitionDuration = {$controls.otherOpts.transitionDuration};
  let minScale = {$controls.otherOpts.minScale};
  let maxScale = {$controls.otherOpts.maxScale};

  // ...
&lt;/script&gt;

&lt;Zoomable
  bind:moveResize
  initialScale=&lbrace;{$controls.initOpts.initialScale}&rbrace;
  initialX=&lbrace;{$controls.initOpts.initialX}&rbrace;
  initialY=&lbrace;{$controls.initOpts.initialY}&rbrace;
  &lbrace;transitionDuration&rbrace;
  &lbrace;minScale&rbrace;
  &lbrace;maxScale&rbrace;
&gt;
  &lt;!-- layer content --&gt;
&lt;/Zoomable&gt;
&lt;p&gt;
  &lt;button
    on:click=&lbrace;() =&gt;
      moveResize({JSON.stringify($controls.moveResize)
      .replace(',"withTransition":true', "")
      .replaceAll('":', ": ")
      .replaceAll(',"', ", ")
      .replace('{"', "{ ")
      .replace("}", " }")})&rbrace;
  &gt;
    Execute
  &lt;/button&gt;
&lt;/p&gt;
  </code></pre>

<div style:background-color="#ccc">
  {#key rerenderKey}
    <Zoomable bind:moveResize {...$controls.initOpts} {...$controls.otherOpts}>
      <div
        style:height="100%"
        style:width="100%"
        style:outline="1px solid black"
        style:outline-offset="-1px"
      >
        <img src={Image} alt="Svelte logo" />
      </div>
    </Zoomable>
  {/key}
</div>
