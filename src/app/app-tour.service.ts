import { Injectable } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';

@Injectable({
  providedIn: 'root'
})
export class AppTourService {

  constructor(public shepherdService: ShepherdService) {

   }

   startTour() {
    if (!this.shepherdService.isActive) {
      let defaultSteps =
      {
        classes: 'shepherd-theme-arrows',
        scrollTo: true,
        cancelIcon: {
          enabled: true
        }
      };
      this.shepherdService.modal = true;
      this.shepherdService.defaultStepOptions = defaultSteps;
      this.shepherdService.addSteps([
        {
          title: 'Test details',
          text: `You can find test details here`,
          attachTo: {
            element: '.test-details-0',
            on: 'bottom'
          },
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text shepherd-step-highlight',

          buttons: [
            {
              action() {
                return this.next();
              },
              text: 'Next'
            }
          ],
          id: 'creating'
        },
        {
          title: 'Namecard',
          text: `You can find patient details here`,
          attachTo: {
            element: '.namecard-0',
            on: 'bottom'
          },
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',

          buttons: [
            {
              action() {
                return this.back();
              },
              classes: 'shepherd-button-secondary',
              text: 'Back'
            },
            {
              action() {
                return this.next();
              },
              text: 'Next'
            }
          ],
          id: 'creating'
        },
        {
          title: 'Emergency contact details',
          text: `You can find emergency contact details.`,
          attachTo: {
            element: '.emergency-details-0',
            on: 'bottom'
          },
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',

          buttons: [
            {
              action() {
                return this.back();
              },
              classes: 'shepherd-button-secondary',
              text: 'Back'
            },
            {
              action() {
                return this.next();
              },
              text: 'Next'
            }
          ],
          id: 'creating'
        },
        {
          title: 'Hospital details',
          text: `You can find Hospital details here`,
          attachTo: {
            element: '.hospital-details-0',
            on: 'bottom'
          },
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',

          buttons: [
            {
              action() {
                return this.back();
              },
              classes: 'shepherd-button-secondary',
              text: 'Back'
            },
            {
              action() {
                return this.next();
              },
              text: 'Next'
            }
          ],
          id: 'creating'
        },
        {
          title: 'Oxygen level details',
          text: `You can find oxygen details here.`,
          attachTo: {
            element: '.oxygen-details-0',
            on: 'bottom'
          },
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',

          buttons: [
            {
              action() {
                return this.back();
              },
              classes: 'shepherd-button-secondary',
              text: 'Back'
            },
            {
              action() {
                return this.next();
              },
              text: 'Next'
            }
          ],
          id: 'creating'
        },
        {
          title: 'BPM level details',
          text: `You can find BPM details here.`,
          attachTo: {
            element: '.bpm-details-0',
            on: 'bottom'
          },
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',

          buttons: [
            {
              action() {
                return this.back();
              },
              classes: 'shepherd-button-secondary',
              text: 'Back'
            },
            {
              action() {
                return this.next();
              },
              text: 'Next'
            }
          ],
          id: 'creating'
        },
        {
          title: 'Sugar level details',
          text: `You can find sugar level details here.`,
          attachTo: {
            element: '.sugar-details-0',
            on: 'bottom'
          },
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',

          buttons: [
            {
              action() {
                return this.back();
              },
              classes: 'shepherd-button-secondary',
              text: 'Back'
            },
            {
              action() {
                return this.next();
              },
              text: 'Finish'
            }
          ],
          id: 'creating'
        },
        
        
      ]);
      this.shepherdService.modal = true;
      this.shepherdService.confirmCancel = false;
      this.shepherdService.start();
    }
  }
}
