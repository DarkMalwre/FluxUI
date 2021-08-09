<template>
    <div class="root">
        <div @click="hide" class="background"></div>

        <div class="window">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ModalWindow extends Vue {
    public shown = false;    

    public show() {
        this.shown = true;
        this.setVisibility();
    }

    public hide() {
        this.shown = false;
        this.setVisibility();
    }

    public setVisibility() {
        if (this.shown) {
            this.$el.classList.add("show");
            return;
        }

        this.$el.classList.remove("show");
    }
}
</script>

<style lang="less" scoped>
@import "./Config";

.root {
    position: fixed;
    top: 30px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 30px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: @text;
    font-family: @mainFont;
    font-size: 12px;
    pointer-events: none;

    .background {
        background: @level;
        width: 100vw;
        height: 100%;
        transition: 300ms;
        opacity: 0;
        -webkit-backdrop-filter: blur(5px);
    }

    .window {
        min-width: 300px;
        min-height: 50px;
        max-width: 500px;
        background: @layer1;
        position: absolute;
        transition: 300ms;
        border-radius: 3px;
        transform: translate(0px, -100px);
        opacity: 0;
    }

    &.show {
        pointer-events: all;

        .window {
            opacity: 1;
            transform: translate(0px, 0px);
        }

        .background {
            opacity: 0.3;
        }
    }
}
</style>