import TitleBar from "./components/TitleBar.vue";
import MenuBar from "./components/MenuBar.vue";
import NavigationRow from "./components/NavigationRow.vue";
import Switch from "./components/Switch.vue";
import ModalWindow from "./components/ModalWindow.vue";
import FormCard from "./components/FormCard.vue";
import DescribeContainer from "./components/DescribeContainer.vue";
import GeneralButton from "./components/GeneralButton.vue";
import { App } from "vue";

export default class FluxUi {
    public app: App | null = null;

    public static create(): FluxUi {
        return new FluxUi();
    }

    public install(app: App, options: any) {
        this.app = app;
        this.defineComponents();
    }

    public defineComponents() {
        this.app!.component("TitleBar", TitleBar);
        this.app!.component("MenuBar", MenuBar);
        this.app!.component("NavigationRow", NavigationRow);
        this.app!.component("Switch", Switch);
        this.app!.component("GeneralButton", GeneralButton);
        this.app!.component("ModalWindow", ModalWindow);
        this.app!.component("FormCard", FormCard);
        this.app!.component("DescribeContainer", DescribeContainer);
    }
}