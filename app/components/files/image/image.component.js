/**
 * Created by amurav on 08.04.2017.
 */

import './images-style.css';
import {ImageController} from './image.controller';

export const imgfileComp = {
    templateUrl: './components/files/image/image.html',
    controller: ImageController,
    controllerAs: 'imageCtrl',
    bindings: {
        image: '<'
    }
};