<template>
    <input class="root" />
</template>

<style lang="less" scoped>
@import "./Config";

.root {
    background: @layer2;
    padding: 8px;
    border-radius: 3px;
    height: 30px;
    color: @text;
    transition: 300ms;
    border: 1px solid @contrastBorder;
    box-shadow: 0 1px 5px @contrastBorder;

    &:focus {
        transition: 100ms;
        border-bottom-color: @accent;
    }

    &.has-error {
        border-color: @error;
    }
}
</style>