/**
 * Created by amurav on 30.03.2017.
 */
import {DocumentController} from './document.controller';
import './documents-style.css';

export const docfileComp = {
    templateUrl: './components/files/document/document.html',
    controller: DocumentController,
    controllerAs: 'docCtrl',
    bindings: {
        document: '<'
    }

};






















/*
import {ParentFile} from '../parent.file.js';
import './documents-style.css';

class DocumentController extends ParentFile{
    constructor(documentService){
        super();
        //this.arrDocuments = serviceFile.query();
        this.arrDocuments = [{
            userFirstName: 'userName',
            userLastName: 'userLastName',
            userTeam: 'userTeam',
            userPassword: 'userPassword',
            title: 'title',
            description: 'desc',
            type: 'type',
            path: 'path',
            data: 'data'
        }];
        //this.countDocuments= this.arrDocuments.length;
        this.typeDoc = true;
        this.documentService = documentService;
        this.refreshDocuments();
        console.log(this.getCountDocuments());
    };

    refreshDocuments(){
        this.documentService.getDocuments().then((data)=>{
            this.arrDocuments = data;
        });
    }
    getCountDocuments (){
        return this.arrDocuments.length;
    };

    getListDocumentsFromMongoDB (){
       return  this.arrDocuments.addRestangularMethod('','get','/document');
    };

    getDocumentFromMongoDB () {
      return this.arrDocuments.getDocument();
    };

     Creating new Restangular Methods
     RestangularProvider.addElementTransformer('users', true, function(user) {
     // This will add a method called login that will do a POST to the path login
     // signature is (name, operation, path, params, headers, elementToPost)

     user.addRestangularMethod('login', 'post', 'login');

     return user;
     });

}
*/
/*
export const docfileComp = {
    templateUrl: './files/document/document.html',
    controller: DocumentController,
    controllerAs: 'docCtrl'

};
*/