<template>
    <div class="root">
        <div class="left">
            <slot name="left">
                <menu-bar-button>Default Button</menu-bar-button>
            </slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "./Config";

.root {
    background: @layer0;
    height: 35px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
}
</style>