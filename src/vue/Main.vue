<template>
    <div class="_root">
        <title-bar ref="TitleBar">
            Search Here
        </title-bar>

        <describe-container description="lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet" title="Test Form">
            <form-card title="Sign In" :inputs="[
                {
                    type: 'text',
                    placeholder: 'Email Address or User Name'
                },
                {
                    type: 'text',
                    placeholder: 'Password'
                }
            ]" :links="[
                {
                    label: 'Don\'t have an account?',
                    linkText: 'Sign Up!'
                },
                {
                    linkText: 'Terms of Servive',
                    remote: true
                }
            ]" />
        </describe-container>

        <modal-window ref="modal">
            <describe-container description="lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet" title="Test Form">
                <form-card title="Sign In" :inputs="[
                    {
                        type: 'text',
                        placeholder: 'Email Address or User Name'
                    },
                    {
                        type: 'text',
                        placeholder: 'Password'
                    }
                ]" />
            </describe-container>
        </modal-window>

        <general-button @click="showModal">Open</general-button>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import TitleBar from "./components/TitleBar.vue";

export default class Main extends Vue {
    public showModal() {
        const modal = this.$refs.modal as any;
        modal.show();
    }
}
</script>

<style lang="less">
@import "./components/Colors";
@import "./components/Config";

._root {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    background: @layer1;
}
</style>