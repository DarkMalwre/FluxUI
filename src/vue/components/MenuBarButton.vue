<template>
    <button class="root">
        <slot></slot>
    </button>
</template>

<style lang="less" scoped>
@import "./Config";

.root {
    padding: 0 10px;
    height: 25px;
    border-radius: 3px;
    border: none;
    background: transparent;
    color: @text;
    font-size: 11px;
    margin-left: 5px;
    cursor: pointer;
    transition: 300ms;

    &:hover {
        transition: 100ms;
        background: @layer1;
    }
}

&:hover {
    button {
        color: @textDim;

        &:hover {
            color: @text;
        }
    }
}
</style>