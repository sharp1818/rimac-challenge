import HEADER_IMAGES from '../images/Header';
import FORM_IMAGES from '../images/Form';
import CREATE_PLAN_IMAGES from '../images/CreatePlan';
import WELCOME_IMAGES from '../images/Welcome';

export function GetHeaderImage(image) {
  switch (image) {
    case 'LOGO_RIMAC':
      return HEADER_IMAGES.LOGO_RIMAC;
    default:
      break;
  }
}

export function GetFormImage(image) {
  switch (image) {
    case 'BACKGROUND':
      return FORM_IMAGES.BACKGROUND;
    case 'ICON_GIRL':
      return FORM_IMAGES.ICON_GIRL;
    case 'ICON_GIRL_MOBILE':
      return FORM_IMAGES.ICON_GIRL_MOBILE;
    default:
      break;
  }
}

export function GetCreatePlanImage(image) {
  switch (image) {
    case 'ICON_CAR_CRASH':
      return CREATE_PLAN_IMAGES.ICON_CAR_CRASH;
    case 'ICON_RUN_OVER':
      return CREATE_PLAN_IMAGES.ICON_RUN_OVER;
    case 'ICON_TIRE_THEFT':
      return CREATE_PLAN_IMAGES.ICON_TIRE_THEFT;
    default:
      break;
  }
}

export function GetWelcomeImage(image) {
  switch (image) {
    case 'BACKGROUND_MOBILE':
      return WELCOME_IMAGES.BACKGROUND_MOBILE;
    case 'BACKGROUND':
      return WELCOME_IMAGES.BACKGROUND;
    default:
      break;
  }
}
