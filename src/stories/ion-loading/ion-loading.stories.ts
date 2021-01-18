import { Meta, Story } from "@storybook/angular";
import { Component } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Component({
  template: `
    <ion-wrapper-centered>
      <ion-button (click)="presentLoading()"
        >Activate loading for 3 seconds</ion-button
      >
      <ion-button (click)="presentLoadingWithOptions()"
        >Activate loading for 3 seconds With OPTIONS</ion-button
      >
    </ion-wrapper-centered>
  `,
})
class ComponentWrapper {
  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Please wait...",
      duration: 3000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed!");
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 3000,
      message: "Click the backdrop to dismiss early...",
      translucent: true,
      cssClass: "custom-class custom-loading",
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed with role:", role);
  }
}

export default {
  title: "ion-loading",
  component: ComponentWrapper,
} as Meta;

const Template: Story<ComponentWrapper> = (args: ComponentWrapper) => ({
  props: { ...args },
  component: ComponentWrapper,
});

export const Basic: Story<ComponentWrapper> = Template.bind({});
Basic.storyName = "Basic";
Basic.args = {};
