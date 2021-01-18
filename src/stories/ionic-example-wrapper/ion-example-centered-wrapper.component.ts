import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ion-wrapper-centered",
  template: `
    <ion-app>
      <ion-content>
        <ion-grid style="height: 100%">
          <ion-row
            style="height:100%"
            class="ion-justify-content-center ion-align-items-center"
          >
            <ion-col class="ion-text-center">
              <ng-content></ng-content>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-app>
  `,
})
export class IonicWrapperCenteredComponent {}
