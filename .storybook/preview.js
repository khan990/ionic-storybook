import { addDecorator, moduleMetadata } from "@storybook/angular";
import { IonicModule } from "@ionic/angular";
import { IonicWrapperCenteredComponent } from "../src/stories/ionic-example-wrapper/ion-example-centered-wrapper.component";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { CommonModule } from "@angular/common";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator(
  moduleMetadata({
    declarations: [IonicWrapperCenteredComponent],
    imports: [CommonModule, IonicModule.forRoot()],
  })
);
