/**
 * Created by amurav on 23.03.2017.
 */
import {accountComp} from './account-comp/account.component';
import {headerComp} from './header-comp/header-comp.component';
import {listComp} from './files/list-comp/list.component';
import {logoComp} from './logo-comp/logo.component';
import {menuComp} from './menu-comp/menu.component';
import {statisticComp} from './statistic-comp/statistic.component';
import {regComp} from './auth/reg-comp/registration.component';
import {accountformComp} from './account-form-comp/accountform.component';
import {commonComp} from './common-comp/common.component';
import {addfileComp} from './add-file-comp/addfile.component';
import {listimageComp} from './files/list-image-comp/list-image.component';
import {authComp} from './auth/login-comp/auth.component';
import {imgfileComp} from './files/image/image.component';
import {docfileComp} from './files/document/document.component';
import {FileService} from './files/file.service';
import {UsersService} from './users/users.service';
import {AuthService}from './auth/auth.service';



export const compApp = angular.module('spApp.components',[])
    .component('listComp', listComp)
    .component('headerComp', headerComp)
    .component('accountComp', accountComp)
    .component('logoComp', logoComp)
    .component('menuComp', menuComp)
    .component('statisticComp', statisticComp)
    .component('regComp', regComp)
    .component('accountformComp', accountformComp)
    .component('commonComp', commonComp)
    .component('addfileComp', addfileComp)
    .component('listimageComp', listimageComp)
    .component('authComp', authComp)
    .component('imgfileComp', imgfileComp)
    .component('docfileComp', docfileComp)
    .service('fileService', FileService)
    .service('usersService', UsersService)
    .service('authService', AuthService)
    .name;
