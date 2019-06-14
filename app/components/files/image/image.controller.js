/**
 * Created by amurav on 29.03.2017.
 */
import {FileOperations} from '../file-operations.js';

export class ImageController extends FileOperations{
    constructor(Restangular, fileService, usersService){

        super();
        this.fileService = fileService;
        this.image = {
            firstName: 'userName',
            lastName: 'userLastName',
            teamId: 'userTeam',
            password: 'userPassword',
            title: 'title',
            description: 'desc',
            type: 'type',
            path: 'path'
        };
        this.imgType = '.png';
        this.usersService = usersService;
        this.currentUser = this.usersService.getUser();
    }

    deleteImage(){
        if(this.currentUser._id === this.image.userId){
            console.log("imageController: ");
            console.log(this.currentUser._id);
            console.log(this.image.userId);
            console.log(this.image);
            this.fileService.deleteImage(this.image);
        }
        else {
            alert("Вы не можете удалить файл другого пользователя.");
        }
    }
}












