/**
 * Created by amurav on 28.03.2017.
 */
import {teamComp} from './team-page/team.component'

export const pageApp = angular.module('spApp.pages',[])
    .component('teamComp', teamComp)
    .name;
