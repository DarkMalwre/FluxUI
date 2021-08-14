<template>
    <button class="root">
        <slot></slot>
    </button>
</template>

<style lang="less" scoped>
@import "./Config";

.root {
    border: 1px solid @contrastBorder;
    background: @layer2;
    color: @text;
    border-radius: 3px;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 12px;
    min-width: 100px;
    transition: 300ms;
    font-family: @mainFont;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 5px @contrastBorder;
    justify-content: center;

    &:hover {
        transition: 100ms;
        background: @layer2;
    }

    &.mode-primary {
        background: @accent;
        color: @layer0;
        box-shadow: none;
        border: none;
    }
}
</style>