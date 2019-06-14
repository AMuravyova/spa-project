/**
 * Created by amurav on 08.04.2017.
 */
import {FileOperations} from '../file-operations.js';

export class DocumentController extends FileOperations{

    constructor(fileService, Restangular, usersService){
        super();
        this.document = {
            firstName: 'userName',
            lastName: 'userLastName',
            teamId: 'userTeam',
            password: 'userPassword',
            title: 'title',
            description: 'desc',
            type: 'type'
        };
        this.docType = '.doc';
        this.xlsType = '.xls';
        this.fileService = fileService;
        this.usersService = usersService;
        this.currentUser = this.usersService.getUser();
    }

    deleteDocument(){
        if(this.currentUser._id === this.document.userId){
            console.log("documentController: ");
            console.log(this.currentUser._id);
            console.log(this.document.userId);
            console.log(this.document);
            this.fileService.deleteDocument(this.document);
        }
        else {
            alert("Вы не можете удалить документ другого пользователя.");
        }
    }
}