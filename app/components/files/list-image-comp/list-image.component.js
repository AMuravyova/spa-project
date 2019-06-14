/**
 * Created by amurav on 22.03.2017.
 */

import {ListImageController} from './list-image.controller';

export const listimageComp = {
    templateUrl: './components/files/list-image-comp/list-image.html',
    controller: ListImageController,
    controllerAs: 'listImageCtrl',
    bindings: {
        limitView: '<'
    }
};



