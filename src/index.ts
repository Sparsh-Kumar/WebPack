import AlertService from './app/alert.service';
import ComponentService from './app/component.service';
import run from './app/app';
import './main.scss'

const alertService: AlertService = new AlertService();
const componentService: ComponentService = new ComponentService();
run(alertService, componentService);


