<template>
    <TitleBar />
    <MenuBar />

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

    <general-button @click="$refs.modal.show()">Open modal</general-button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Main extends Vue {
    public created() {
        document.querySelector("body")!.classList.add("_dark");
    }
}
</script>

<style lang="less">
@import "./components/Config";
</style>